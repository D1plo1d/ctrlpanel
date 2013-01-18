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

  viewer = new Viewer $("video"), ->
    $.get "/40mmcube.gcode", (gcode) -> viewer.setGCode(gcode)
    #viewer.loadModel("/40mmcube.stl") # TODO: we need compute normals for this model to work
    #viewer.loadModel("/ultimaker_platform.stl")
    viewer.loadModel("/DNA_Righthanded.stl")


class Viewer

  # Configuration and WebGL settings

  gcodeScale: 0.3
  qrMetricWidth: 35.0
  qrScale: 0.55 # Horray for totally bs scaling factors!

  arEnabled: false
  mode: "gcode" # gcode | mixed | model # (TODO)

  buildVolume: [210, 210, 220]
  mmToGLCoords = 0.1

  rotation: new PhiloGL.Vec3(Math.PI*3/2+0.2, 0, 0)
  position: new PhiloGL.Vec3(0, -5, -70)

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
        ambient: { r: 0.6, g: 0.6, b: 0.6 }
        directional:
          color: { r: 0.2, g: 0.2, b: 0.2 }
          direction: { x: -0.5, y: -0.3, z: -1 }
    models:
      model:
        display: true
        class: PhiloGL.O3D.Model
        dynamic: true
        vertices: []
        indices: []
        position: [0, 0, 0]
        rotation: [0, 0, 0]
        scale: ( mmToGLCoords for i in [0..2] )
        #scale: ( mmToGLCoords for i in [0..2] )
        colors: [32/255, 77/255, 37/255, 1]
        uniforms: @commonUniforms
        init: (o3d) ->
          # TODO: autoposition this object by offsetting it by it's lowest vert
          verts = o3d.$vertices
          offset = [0, 0, 0]
          min = ( Number.MAX_VALUE for i in [0..2])
          max = ( Number.MIN_VALUE for i in [0..2])
          for i in [0..verts.length-1] by 3
            for j in [0..2]
              min[j] = verts[i+j] if verts[i+j] < min[j]
              max[j] = verts[i+j] if verts[i+j] > max[j]
          center = ( (max[i] + min[i])/2 for i in [0..2] )
          console.log min
          for i in [0..verts.length-1] by 3
            verts[i+2] -= min[2]
            for j in [0..1]
              verts[i+j] -= center[j]
      gcodeLines:
        display: true
        class: PhiloGL.O3D.PolyLine
        colors: [1, 0, 1, 1]
        scale: (mmToGLCoords for dimension in @buildVolume)
        uniforms: @commonUniforms
        render: @renderLines
      arMarker:
        display: true
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
        normals: [
          0,0,-1,
          0,0,-1,
          0,0,-1
          0,0,-1
          0,0,-1
          0,0,-1
        ]
        uniforms: @commonUniforms
      platform:
        display: true
        class: PhiloGL.O3D.Model
        url: "/ultimaker_platform.stl"
        scale: [0.1, 0.1, 0.1]
        colors: [0.2, 0.2, 0.2, 0.5]
        uniforms: @commonUniforms
        init: (o3d) =>
          verts = o3d.$vertices
          offset = [0, @webGlSettings().models.cube.scale[1] / o3d.scale.y, 0]
          verts[i+j] += offset[j] for j in [0..2] for i in [0..verts.length-1] by 3
      cube:
        display: false
        class: PhiloGL.O3D.Cube
        position: [0, 0, 0]
        texCoords: []
        scale: (dimension/2 * mmToGLCoords for dimension in @buildVolume)
        #colors: [37*1.3/255, 117*1.3/255, 189*1.3/255, 0.7] #0088cc with 10% more saturation
        #colors: [0.2, 0.2, 0.2, 0.5]
        colors: [0.5, 0.5, 1, 0.5]
        uniforms: @commonUniforms
        init: (o3d) ->
          verts = o3d.$vertices
          offset = [0, 0, +1]
          verts[i+j] += offset[j] for j in [0..2] for i in [0..verts.length-1] by 3
    events:
      onDragStart: @setDragOffset
      onDragMove: @onDragMove
      onMouseWheel: @onMouseWheel
    onError: (e) -> console.log("An error ocurred while loading the application"); console.log e
    onLoad: @onLoad


  # Viewer Methods

  constructor: ($video, callback) ->
    @_onLoadCallback = callback
    @$glCanvas = $ $("<canvas id='webGlCanvas'></canvas>").attr style: "z-index: 10; position: absolute"
    $video.parent().prepend @$glCanvas
    @$glCanvas.on "mousewheel", (e) -> e.preventDefault()

    # Setting up AR scaling
    @qrWidth = @qrScale * @qrMetricWidth

    # WebGL overlay
    PhiloGL @$glCanvas.attr("id"), @_webGlSettings = @webGlSettings()

  onLoad: (app) => requestAnimationFrame =>
    @app = app
    @[k] = app[k] for k in ['gl', 'program', 'camera', 'canvas', 'scene']

    #console.log app

    # WebGL settings
    #@gl.clearColor(1, 1, 1, 1)
    #@gl.clearColor(0, 0, 0, 0)
    @gl.clearColor(1, 1, 1, 1)
    @gl.clearDepth(1)
    @gl.enable(@gl.CULL_FACE)
    @gl.enable(@gl.DEPTH_TEST)
    #@gl.depthMask(true)
    @gl.depthFunc(@gl.LEQUAL)
    #@gl.blendFunc(@gl.ONE_MINUS_SRC_ALPHA, @gl.ONE)
    #@gl.blendFunc(@gl.SRC_ALPHA, @gl.ZERO)
    #@gl.blendFunc(@gl.SRC_ALPHA, @gl.ONE)
    #@gl.blendFunc(@gl.SRC_ALPHA, @gl.ONE_MINUS_SRC_ALPHA)
    @gl.blendFunc(@gl.SRC_ALPHA, @gl.ONE_MINUS_SRC_ALPHA)
    @gl.enable(@gl.BLEND)

    # Camera + Scene config
    @camera.target.set(0,0,-1)
    @camera.update()

    # Initializing models (because philoGL doesn't yet do this for us)
    @addToScene(k, opts) for k, opts of @webGlSettings().models

    # Augmented Reality config
    @$video = $("video").on
      'ar:orientaionchange': @onArOrientationChange
      'ar:videoresize': (e, t) => @tracer = t; @resize()
    @$video.arTracer qr: {metricWidth: @qrMetricWidth}, enabled: @arEnabled

    # Init
    @update()
    @requestRender()
    @resize()
    @render()
    @_onLoadCallback()

  # Adds a o3d to the scene by generating it based on the opts
  addToScene: (name, opts) ->
    if opts.url?
      @loadToScene name, opts
    else
      @[name] = o3d = new opts.class opts
      o3d[k].set.apply(o3d[k], opts[k] || v) for k, v of { position: [0,0,0], rotation: [0,0,0], scale: [1,1,1] }
      #console.log "#{name} start"
      #console.log o3d
      #console.log "#{name} end"
      opts.init(o3d) if opts.init?
      o3d.update()
      @scene.add o3d
      @requestRender()

  # Adds a o3d to the scene by ajax loading it, parsing it and then generating it based on the opts
  loadToScene: (name, opts) -> P3D.loadStl opts.url, (verts, normals, indices) =>
    opts.vertices = verts
    opts.normals = normals
    opts.indices = indices
    delete opts.url
    @addToScene name, opts
    @update()

  setGCode: (gcode) ->
    # GCode parsing
    gcodeUtils.parse gcode, (cmd, axes) => @gcodeLines.lineTo(axes)
    @gcodeLines.updateLines()
    @requestRender()

  loadModel: (url) -> P3D.loadStl url, (verts, normals, indices) =>
    @scene.remove @model
    m = @webGlSettings().models.model
    m.vertices = verts
    m.normals = normals
    m.indices = indices
    @addToScene("model", m)

  setDragOffset: (e) => @mouseOffset = {x: e.x, y: e.y}
  onDragMove: (e) =>
    mouse = {x: e.x - @mouseOffset.x, y: e.y - @mouseOffset.y}
    @setDragOffset(e)

    rot = @rotation
    rot.y = ( rot.y + mouse.x/50 ) % ( Math.PI*2 )
    rot.x = ( rot.x - mouse.y/100 )
    rot.x = Math.max Math.PI, Math.min(rot.x, Math.PI*2)

    @update()
    @requestRender()

  onMouseWheel: (e) =>
    @position.z = Math.max -500, Math.min -1, @position.z - e.wheel*10
    
    @update()
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

  onBeforeRender: (elem, i) =>
    # Making the model opaque
    isOpaque = elem == @model
    isOpaque = true
    #console.log isOpaque
    @gl.depthMask isOpaque
    @gl[if isOpaque then "disable" else "enable"](@gl.BLEND)

  render: =>
    if @dirty == true
      #console.log "Draw!"
      # Clear Screen
      @gl.clear(@gl.COLOR_BUFFER_BIT | @gl.DEPTH_BUFFER_BIT)
      # Draw everything
      @scene.render(onBeforeRender: @onBeforeRender)

    @dirty = false
    requestAnimationFrame @render


  onArOrientationChange: (e, t) => if (@tracer = t)?
    @printerMat4.$translate( @tracer.translation )
    @printerMat4.$rotateXYZ( @tracer.rotation )
    @update()
    @render()

  update: (t, r) -> for model in [@platform, @gcodeLines, @model, @cube, @arMarker]
    continue unless model?
    model.rotation = @rotation
    model.position = @position
    model.update()

  renderLines: => if @gcodeLines.vertices.length > 0
    return
    #console.log "line render!"
    #console.log @gcodeLines.$verticesLength
    #console.log @gcodeLines.$indicesLength * 3 / 2
    #@gl.drawArrays(@gl.LINES, 0, @gcodeLines.$verticesLength / 3)

