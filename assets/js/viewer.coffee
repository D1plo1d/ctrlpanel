$.fn.viewer = (opts) ->
  args = arguments
  @.each (i, el) ->
    $el = $(el)
    if (typeof opts) == "string"
      console.log "mooo"
      viewer = $el.data("viewer")
      console.log args
      viewer[args[0]].apply viewer, [args[1]]
    else
      $el.data "viewer", new Viewer $el, opts
  return @

class window.Viewer

  # Configuration and WebGL settings
  initDefaults: ->
    @mode = "gcode" # gcode | mixed | model # (TODO)

    @buildVolume = [210, 210, 220]
    @mmToGLCoords = 0.1

    @rotation = new PhiloGL.Vec3(Math.PI*3/2+0.2, 0, 0)
    @position = new PhiloGL.Vec3(0, -10, -70)

  commonUniforms:
    shininess: 10
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
          color: { r: 0.2, g: 0.2, b: 0.2 }
          direction: { x: 0.3, y: -0.3, z: -1 }
    models:
      model:
        display: true
        class: PhiloGL.O3D.Model
        dynamic: true
        vertices: []
        indices: []
        position: [0, 0, 0]
        rotation: [0, 0, 0]
        scale: ( @mmToGLCoords for i in [0..2] )
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
        display: false
        class: PhiloGL.O3D.PolyLine
        colors: [1, 0, 1, 1]
        scale: (@mmToGLCoords for dimension in @buildVolume)
        uniforms: @commonUniforms
        render: @renderLines
      platform:
        display: true
        class: PhiloGL.O3D.Model
        url: "/ultimaker_platform.stl"
        scale: [0.1, 0.1, 0.1]
        colors: [0.2, 0.2, 0.2, 0.55]
        uniforms: @commonUniforms
        init: (o3d) =>
          verts = o3d.$vertices
          offset = [0, @webGlSettings().models.cube.scale[1] / o3d.scale.y, 0]
          verts[i+j] += offset[j] for j in [0..2] for i in [0..verts.length-1] by 3
      cube:
        display: true
        class: PhiloGL.O3D.Cube
        position: [0, 0, 0]
        texCoords: []
        scale: (dimension/2 * @mmToGLCoords for dimension in @buildVolume)
        colors: [0/255, 20/255, 240/255, 0.3]
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

  constructor: ($container, callback) ->
    @initDefaults()
    @_onLoadCallback = callback
    @$glCanvas = $ $("<canvas id='webGlCanvas'></canvas>")
    $container.prepend @$glCanvas
    console.log $container
    @$glCanvas.on "mousewheel", (e) -> e.preventDefault()

    # WebGL overlay
    PhiloGL @$glCanvas.attr("id"), @_webGlSettings = @webGlSettings()

  onLoad: (app) => requestAnimationFrame =>
    @app = app
    @[k] = app[k] for k in ['gl', 'program', 'camera', 'canvas', 'scene']

    #console.log app

    # WebGL settings
    #@gl.clearColor(1, 1, 1, 1)
    #@gl.clearColor(0, 0, 0, 1)
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

    # Init
    @update()
    @requestRender()
    @resize()
    @render()
    @_onLoadCallback(@)

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
      @update()
      @requestRender()

  # Adds a o3d to the scene by ajax loading it, parsing it and then generating it based on the opts
  loadToScene: (name, opts) -> P3D.loadStl opts.url, (verts, normals, indices) =>
    opts.vertices = verts
    opts.normals = normals
    opts.indices = indices
    delete opts.url
    @addToScene name, opts

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

  resize: ->
    console.log "Resize!"
    @size = width: @$glCanvas.parent().innerWidth(), height: @$glCanvas.parent().innerHeight()
    #@size = @tracer.size
    @$glCanvas.attr @size
    @gl.viewport(0, 0, @size.width, @size.height)
    @camera.aspect = @size.width / @size.height
    @camera.update()

  requestRender: -> @dirty = true

  onBeforeRender: (elem, i) =>
    # Making the model opaque
    isOpaque = elem == @model
    #isOpaque = true
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

