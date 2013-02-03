$.fn.viewer = (opts) ->
  args = arguments
  @.each (i, el) ->
    $el = $(el)
    if (typeof opts) == "string"
      viewer = $el.data("viewer")
      viewer[args[0]].apply viewer, Array.prototype.slice.call(args)[1..]
    else
      $el.data "viewer", new Viewer $el, opts
  return @

viewerCount = 0

class window.Viewer

  # Configuration and WebGL settings
  initDefaults: =>
    @mode = "gcode" # gcode | mixed | model # (TODO)

    @buildVolume = [210, 210, 220]
    @mmToGLCoords = 0.1

    @rotation = new PhiloGL.Vec3(Math.PI*3/2+0.2, 0, 0)
    @position = new PhiloGL.Vec3(0, -10, -70)
    #@position = new PhiloGL.Vec3(0, 0, -70)
    @model = []

  commonUniforms:
    shininess: 10
    hasTexture1: false

  webGlSettings: => @_webGlSettings ||=
    #context: {debug: true}
    program:
      from: 'ids'
      #vs: 'shader-vs'
      #fs: 'shader-fs'
      vs: 'per-fragment-lighting-vs'
      fs: 'per-fragment-lighting-fs'
    camera:
      fov:  40
      near: 1
      far: 1000
    scene:
      lights:
        enable: true
        ambient: { r: ambient = 0.3, g: ambient, b: ambient }
        directional:
          color: { r: d=0.2, g: d, b: d }
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
        #scale: ( @mmToGLCoords*20 for i in [0..2] )
        scale: ( @mmToGLCoords for i in [0..2] )
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
          #console.log min
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
    onLoad: (app) => setTimeout @onLoad.fill(app), 0


  # Viewer Methods

  constructor: ($container, callback) ->
    @initDefaults()
    @_onLoadCallback = callback
    @$glCanvas = $ $("<canvas id='webGlCanvas#{viewerCount++}'></canvas>")
    $container.prepend @$glCanvas
    @$glCanvas.on "mousewheel", (e) -> e.preventDefault()

    # WebGL overlay
    PhiloGL @$glCanvas.attr("id"), @_webGlSettings = @webGlSettings()

  onLoad: (app) =>
    @app = app
    @[k] = app[k] for k in ['gl', 'program', 'camera', 'canvas', 'scene']

    window.gl = @gl
    #console.log app

    # WebGL settings
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
    @resize()
    @render()
    @_onLoadCallback(@)

  # Adds a o3d to the scene by generating it based on the opts
  addToScene: (name, opts) ->
    return if name == "model"
    if opts.url?
      @loadToScene name, opts
    else
      o3d = new opts.class opts
      @[name] = o3d if name?
      o3d[k].set.apply(o3d[k], opts[k] || v) for k, v of { position: [0,0,0], rotation: [0,0,0], scale: [1,1,1] }
      #console.log "#{name} start"
      #console.log o3d
      #console.log "#{name} end"
      opts.init(o3d) if opts.init?
      #o3d.drawType = @gl.LINES
      o3d.update()
      @scene.add o3d
      @update()
      @requestRender()
      return o3d

  # Adds a o3d to the scene by ajax loading it, parsing it and then generating it based on the opts
  loadToScene: (name, opts) -> new P3D opts.url, (p3d) =>
    opts[k] = p3d.chunks[0][k] for k in["vertices", "normals", "indices"]
    delete opts.url
    @addToScene name, opts

  setGCode: (gcode) ->
    # GCode parsing
    gcodeUtils.parse gcode, (cmd, axes) => @gcodeLines.lineTo(axes)
    @gcodeLines.updateLines()
    @requestRender()

  loadModel: (url, onLoadCallback) -> new P3D url, (p3d) =>
    # TODO: build a sphere with ~130k verts. If the 65k limit is screwing us it should only show one half of the sphere
    #console.log p3d.verts[196609+i] for i in [0..6] # -1.562000e+00
    @scene.remove m for m in @model
    @model = []
    name = p3d.filename.replace("\.[a-zA-Z0-9]+$", ".stl")
    $(".local-download-link").attr
      href: (window.webkitURL||window.URL).createObjectURL p3d.exportTextStl()
      download: name

    # getting the object properties. TODO: move this to p3d
    verts = p3d.vertices
    offset = [0, 0, 0]
    min = ( Number.MAX_VALUE for i in [0..2])
    max = ( Number.MIN_VALUE for i in [0..2])
    for i in [0..verts.length-1] by 3
      for j in [0..2]
        min[j] = verts[i+j] if verts[i+j] < min[j]
        max[j] = verts[i+j] if verts[i+j] > max[j]
    center = ( (max[i] + min[i])/2 for i in [0..2] )

    # Add each chunk to the scene. TODO: refactor p3d to be able to include multiple chunks in one p3d object
    #console.log "#{p3d.chunks.length} chunk(s)"
    for chunk in p3d.chunks
      opts = @webGlSettings().models.model
      opts[k] = chunk[k] for k in["vertices", "normals", "indices"]

      # Update the position of each chunk so that it is positioned correctly
      verts = opts.vertices
      for i in [0..verts.length-1] by 3
        verts[i+2] -= min[2]
        for j in [0..1]
          verts[i+j] -= center[j]

      o3d = new opts.class opts
      o3d[k].set.apply(o3d[k], opts[k] || v) for k, v of { position: [0,0,0], rotation: [0,0,0], scale: [1,1,1] }
      @scene.add o3d
      @model.push o3d

    @update()
    @requestRender()
    onLoadCallback() if onLoadCallback?

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
    #console.log "Resize!"
    @size = width: @$glCanvas.parent().innerWidth(), height: @$glCanvas.parent().innerHeight()
    @$glCanvas.attr @size
    @gl.viewport(0, 0, @size.width, @size.height)
    @camera.aspect = @size.width / @size.height
    @camera.update()
    @requestRender()

  requestRender: -> @dirty = true

  onBeforeRender: (elem, i) =>
    # Making the model opaque
    isOpaque = @model.indexOf(elem) != -1
    #isOpaque = true
    #console.log isOpaque
    @gl.depthMask isOpaque
    @gl[if isOpaque then "disable" else "enable"](@gl.BLEND)

  render: =>
    if @dirty == true
      console.log "Draw!"
      # Clear Screen
      @gl.clear(@gl.COLOR_BUFFER_BIT | @gl.DEPTH_BUFFER_BIT)
      # Draw everything
      @scene.render(onBeforeRender: @onBeforeRender)

    @dirty = false
    setTimeout @render, 1000/40
    #requestAnimationFrame @render

  update: (t, r) -> for model in [@platform, @gcodeLines, @cube, @arMarker].concat @model
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

