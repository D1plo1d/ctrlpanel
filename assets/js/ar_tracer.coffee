class ArTracer

  size: [0, 0]
  rotation: [0,0,0]
  translation: [0,0,0]

  defaults:
    qr:
      metricWidth: 60.325 # mm

  # the qr code width is expected to be in milimeters
  constructor: ($video, opts) ->
    @opts = opts = $.extend true, {}, @defaults, opts

    @$video = $video

    # the frame capture canvas (used behind the scenes for cv video frame processing)
    @$canvas = $( $ "<canvas></canvas>" ).hide().appendTo "body"
    @context = @$canvas[0].getContext("2d")

    # QR code CV
    @detector = new AR.Detector()
    @posit = new POS.Posit @opts.qr.metricWidth, @$canvas.width()

    # Camera initialization
    console.log "ar!"
    navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia
    navigator.getUserMedia {video: true}, @onCameraInit

  onCameraInit: (stream) =>
    console.log stream
    @$video.attr
      src: if (window.webkitURL) then window.webkitURL.createObjectURL(stream) else stream
      autoplay: true
    @rescale()
    requestAnimationFrame(@tick)

  rescale: ->
    # Rescaling the canvas to match the video frame
    @size = width: @$video.width(), height: @$video.height()
    @$canvas.attr @size

  # copies the video to the canvas for cv inspection. This is unfortunately a hugely time consuming way of doing things.
  snapshot: ->
    @context.drawImage @$video[0], 0, 0, @size.width, @size.height
    # This data-only hack works wonders with v8 ("self" cpu time down from 39.57% to 14.33% for this function).
    return data: @context.getImageData(0, 0, @size.width, @size.height).data

  computePosition: =>
    imageData = @snapshot()

    # running cv
    arMarkers = @detector.detect imageData
    return unless arMarkers.length > 0

    # centering the corner markers about the middle of the canvas
    for c in arMarkers[0].corners
      c.x = c.x - @size.width/2
      c.y = @size.height/2 - c.y
  
    # returning a pose
    #console.log arMarkers[0].corners
    pose = @posit.pose arMarkers[0].corners
    rotationMatrix = pose.bestRotation

    @rotation.x = -Math.asin(-rotationMatrix[1][2])
    @rotation.y = -Math.atan2(rotationMatrix[0][2], rotationMatrix[2][2])
    @rotation.z = Math.atan2(rotationMatrix[1][0], rotationMatrix[1][1])
    @translation = pose.bestTranslation

    console.log @translation
    console.log "x: #{@translation[0]}, y: #{@translation[1]}, z: #{@translation[2]}"

    @$video.trigger "ar:orientaionchange", @

  tick: =>
    timestamp = new Date().getTime()
    @fps = 1000/(timestamp - p) if (p = @previousTickTimestamp)?
    @previousTickTimestamp = timestamp
    #console.log "#{@fps} fps"

    requestAnimationFrame(@tick)

    # run CV if the video has started playback from the camera
    @computePosition() if @$video[0].readyState == @$video[0].HAVE_ENOUGH_DATA


$.fn.arTracer = (opts) -> new ArTracer @, opts; return @
