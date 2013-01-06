#= require vendor/jquery-1.8.3.min
#= require vendor/underscore-min
#= require_tree vendor
#= require_tree models
#= require_tree views
#= require_tree ./

$ ->

  $(".toggle-btn").toggleButtons(width: 70)

  window.printer = new PrinterModel()

  # Side Panels
  $("#manual_ctrl .jog-panel").each (i, el) -> new JogPanelView el: el, model: printer
  $("#manual_ctrl .temperature-panel").each (i, el) -> new TemperatureCtrlPanelView el: el, model: printer
  $("#manual_ctrl .extruders-panel").each (i, el) -> new ExtruderCtrlPanelView el: el, model: printer

  # Showing one side panel popover at a time
  $sidePanelLinks = $("#manual_ctrl .side-panel h4 a")
  $sidePanelLinks.on "click", -> $sidePanelLinks.not($ this).popover("hide")

  $.get "/tinyopenviolin_4x.gcode", (gcode) -> new Viewer($("video"), gcode)


class Viewer

  # Configuration and WebGL settings

  gcodeScale: 0.3
  qrMetricWidth: 35.0
  qrScale: 0.55 # Horray for totally bs scaling factors!

  arEnabled: false
  mode: "gcode" # gcode | mixed | model # (TODO)

  printerMat4: new PhiloGL.Mat4()

  commonUniforms:
    shininess: 10,
    colorUfm: [0.5, 0.3, 0.7, 1]
    hasTexture1: false

  webGlSettings: -> @_webGlSettings ||=
    program:
      from: 'ids'
      vs: 'shader-vs'
      fs: 'shader-fs'
    camera:
      fov:  40
      near: 1
      far: 1000
    scene:
      lights:
        enable: true
        ambient: { r: 0.3, g: 0.3, b: 0.3 }
        directional:
          color: { r: 0.1, g: 0.1, b: 0.1 }
          direction: { x: 0.5, y: -0.3, z: -1 }
    models:
      gcodeLines:
        class: PhiloGL.O3D.PolyLine
        colors: [1, 1, 1, 0.8]
        uniforms: @commonUniforms
        render: @renderLines
      ###
      platform:
        class: PhiloGL.O3D.Model
        vertices: [
          -1.0, -1.0,  0.0,
          1.0, -1.0,  0.0,
          -1.0,  1.0,  0.0,
          1.0,  1.0,  0.0
        ]
        position: [0, 0, 0]
        rotation: [0, 0, 0]
        #scale: [0.1 ,0.1 , 2]
        colors: [0.5, 0.5, 1, 0.5]
        indices: [0, 1, 3, 3, 2, 0]
        uniforms: @commonUniforms
        ###
      printerModel:
        class: PhiloGL.O3D.Model
        url: "/ultimaker_platform.stl"
        #url: "/cube.stl"
        #vertices: []
        position: [0, 0, 0]
        rotation: [Math.PI*3/2+0.2, 0, 0]
        scale: [0.1, 0.1, 0.1]
        #colors: [0.5, 0.5, 1, 0.5]
        colors: [0.5, 0.5, 1, 1]
        #indices: [0, 1, 3, 3, 2, 0]
        uniforms: @commonUniforms
    events:
      onDragStart: @setDragOffset
      onDragMove: @onDragMove
    onError: (e) -> console.log("An error ocurred while loading the application"); console.log e
    onLoad: @onLoad


  # Viewer Methods

  constructor: ($video, gcode) ->
    @gcode = gcode

    # Setting up AR scaling
    @qrWidth = @qrScale * @qrMetricWidth

    # Initializing the printer's orientation. TODO: This is definitely a work in progress.
    #@printerMat4.$translate 0, 0, 3
    #@printerMat4.$rotateXYZ 0, 0, 0

    # WebGL overlay
    @$glCanvas = $ $("<canvas id='webGlCanvas'></canvas>").attr style: "z-index: 10; position: absolute"
    $video.parent().prepend @$glCanvas
    PhiloGL @$glCanvas.attr("id"), @_webGlSettings = @webGlSettings()

  loadModel: (name, opts) -> P3D.loadBinaryStl opts.url, undefined, (verts, normals, indices) =>
    #console.log "loaded!"
    #console.log normals
    #console.log verts
    #o3d.normals.set normals
    opts.vertices = verts
    opts.normals = normals
    opts.indices = indices
    delete opts.url
    @addModel name, opts

  addModel: (name, opts) ->
    if opts.url?
      @loadModel name, opts
    else
      @[name] = o3d = new opts.class opts
      o3d[k].set.apply(o3d[k], opts[k] || v) for k, v of { position: [0,0,0], rotation: [0,0,0], scale: [1,1,1] }
      console.log "#{name} start"
      console.log o3d
      console.log "#{name} end"
      # o3d.parentMatrix = @printerMat4 #TODO!
      o3d.update()
      @scene.add o3d
      @requestRender()


  onLoad: (app) => requestAnimationFrame =>
    @app = app
    @[k] = app[k] for k in ['gl', 'program', 'camera', 'canvas', 'scene']

    console.log app

    # WebGL settings
    #@gl.clearColor(0, 0, 0, 0)
    @gl.clearColor(0, 0, 0, 1)
    @gl.clearDepth(1)
    @gl.enable(@gl.DEPTH_TEST)
    @gl.depthFunc(@gl.LEQUAL)

    # Camera + Scene config
    @camera.position.set 0, 0, 100 # TODO: temporary printer matrix work around
    @camera.target.set(0,0,0)
    @camera.update()

    # Initializing models (because philoGL doesn't yet do this for us)
    @addModel(k, opts) for k, opts of @webGlSettings().models

    # GCode parsing
    gcodeUtils.parse @gcode, (cmd, axes) => @gcodeLines.lineTo(axes)
    delete @gcode
    @gcodeLines.updateLines()

    #@scene.add(@[k]) for k, opts of @webGlSettings().models
    #@scene.add @platform

    # Augmented Reality config
    @$video = $("video").on
      'ar:orientaionchange': @onArOrientationChange
      'ar:videoresize': (e, t) => @tracer = t; @resize()
    @$video.arTracer qr: {metricWidth: @qrMetricWidth}, enabled: @arEnabled

    # Init
    @requestRender()
    @resize()
    @render()

  setDragOffset: (e) => @mouseOffset = {x: e.x, y: e.y}
  onDragMove: (e) =>
    mouse = {x: e.x - @mouseOffset.x, y: e.y - @mouseOffset.y}
    @setDragOffset(e)

    rot = @printerModel.rotation
    rot.y = ( rot.y + mouse.x/50 ) % ( Math.PI*2 )
    rot.x = ( rot.x - mouse.y/100 )
    rot.x = Math.max Math.PI, Math.min(rot.x, Math.PI*2)

    @printerModel.update()
    @requestRender()

  toggleAr: (enabled) =>
    @$video.arTracker "toggle", ( @arEnabled = enabled || !@arEnabled )

  resize: ->
    console.log "Resize!"
    @size = width: @$glCanvas.parent().innerWidth(), height: @$glCanvas.closest(".row").innerHeight()
    #@size = @tracer.size
    @$glCanvas.attr @size
    @gl.viewport(0, 0, @size.width, @size.height)
    @camera.aspect = @size.width / @size.height
    @camera.update()

  requestRender: -> @dirty = true

  render: =>
    if @dirty == true
      #console.log "Draw!"
      # Clear Screen
      @gl.clear(@gl.COLOR_BUFFER_BIT | @gl.DEPTH_BUFFER_BIT)
      # Draw everything
      @scene.render()

    @dirty = false
    requestAnimationFrame @render


  onArOrientationChange: (e, t) => if (@tracer = t)?
    @printerMat4.$translate( @tracer.translation )
    @printerMat4.$rotateXYZ( @tracer.rotation )
    @update()
    @render()

  update: (t, r) -> obj.update() for obj in [@gcodeLines, @platform]

  renderLines: => #if @gcodeLines.vertices.length > 0
    #console.log "line render!"
    #console.log @gcodeLines.$verticesLength
    #console.log @gcodeLines.$indicesLength * 3 / 2
    #@gl.drawArrays(@gl.LINES, 0, @gcodeLines.$verticesLength / 3)

