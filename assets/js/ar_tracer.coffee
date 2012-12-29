class ArTracer

  size: [0, 0]
  rotation: [0,0,0]
  translation: [0,0,-100]

  defaults:
    focalLength: 890
    qr:
      metricWidth: 35.0 #56.53 # mm

  # the qr code width is expected to be in milimeters
  constructor: ($video, opts) ->
    @opts = opts = $.extend true, {}, @defaults, opts

    @$video = $video

    # the frame capture canvas (used behind the scenes for cv video frame processing)
    @$canvas = $( $ "<canvas></canvas>" ).hide().appendTo "body"
    @context = @$canvas[0].getContext("2d")

    # QR code CV
    @detector = new AR.Detector()
    @posit = new POS.Posit @opts.qr.metricWidth, @opts.focalLength

    # Initializing the scaling
    @resize()
    @$video.on "playing loadedmetadata", @resize
    $(window).resize @resize

    # Camera initialization
    console.log "ar!"
    navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia
    navigator.getUserMedia {video: true}, @onCameraInit

  onCameraInit: (stream) =>
    console.log stream
    @$video.attr
      src: if (window.webkitURL) then window.webkitURL.createObjectURL(stream) else stream
      autoplay: true
    requestAnimationFrame(@tick)

  resize: (e) =>
    # Rescaling the canvas to match the video frame
    @size = width: @$video.width(), height: @$video.height() # screen size (css)
    @camera = width: @$video[0].videoWidth, height: @$video[0].videoHeight # original video feed size (camera)
    @scale = x: @size.width / @camera.width, y: @size.height / @camera.height
    console.log @size
    console.log @camera
    @$canvas.attr @size
    @$video.trigger "ar:videoresize", @

  # copies the video to the canvas for cv inspection. This is unfortunately a hugely time consuming way of doing things.
  snapshot: ->
    w = @camera.width; h = @camera.height
    @context.drawImage @$video[0], 0, 0, w, h, 0, 0, w, h
    # This data-only hack works wonders with v8 ("self" cpu time down from 39.57% to 14.33% for this function).
    #return @context.getImageData(0, 0, @size.width, @size.height)
    return data: @context.getImageData(0, 0, w, h).data, width: w, height: h

  computePosition: =>
    # running cv
    arMarkers = @detector.detect @snapshot()
    return unless arMarkers.length > 0

    # centering the corner markers about the middle of the canvas
    for c in arMarkers[0].corners
      c.x = (c.x - @camera.width/2)*@scale.x
      c.y = (@camera.height/2 - c.y)*@scale.y

    # returning a pose
    #console.log arMarkers[0].corners
    pose = @posit.pose arMarkers[0].corners
    rotationMatrix = pose.bestRotation

    @rotation = [
      -Math.asin(-rotationMatrix[1][2]),
      -Math.atan2(rotationMatrix[0][2], rotationMatrix[2][2]),
      Math.atan2(rotationMatrix[1][0], rotationMatrix[1][1])
    ]
    @translation = pose.bestTranslation
    @translation[2] *= -1

    console.log @translation
    console.log "x: #{@translation[0]}, y: #{@translation[1]}, z: #{@translation[2]}"

    @$video.trigger "ar:orientaionchange", @

  tick: =>
    try
      # run CV if the video has started playback from the camera
      if @$video[0].readyState == @$video[0].HAVE_ENOUGH_DATA and @camera?
        @computePosition()

        timestamp = new Date().getTime()
        @fps = 1000/(timestamp - p) if (p = @previousTickTimestamp)?
        @previousTickTimestamp = timestamp
        #console.log "#{@fps} fps"
    finally
      requestAnimationFrame(@tick)


$.fn.arTracer = (opts) -> new ArTracer @, opts; return @
