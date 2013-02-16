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

  o3dDefaults:
    class: PhiloGL.O3D.P3DModel
    uniforms:
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
        #p3d: { background: false }
        scale: ( @mmToGLCoords for i in [0..2] )
        colors: [32/255, 77/255, 37/255, 1]
      gcodeLines:
        display: false
        class: PhiloGL.O3D.PolyLine
        colors: [1, 0, 1, 1]
        scale: (@mmToGLCoords for dimension in @buildVolume)
        render: @renderLines
      cube: cube =
        display: true
        class: PhiloGL.O3D.Cube
        scale: (dimension/2 * @mmToGLCoords for dimension in @buildVolume)
        colors: [0/255, 20/255, 240/255, 0.3]
        alignment: {x: @_center, y: @_center, z: @_bottom}
      platform:
        display: true
        #p3d: { background: false }
        src: "/ultimaker_platform.stl"
        scale: scale = [0.1, 0.1, 0.1]
        colors: [0.2, 0.2, 0.2, 0.55]
        init: (o3d) =>
          verts = o3d.$vertices
          offset = [0, @webGlSettings().models.cube.scale[1] / o3d.scale.y, 0]
          verts[i+j] += offset[j] for j in [0..2] for i in [0..verts.length-1] by 3
    events:
      onDragStart: @setDragOffset
      onDragMove: @onDragMove
      onMouseWheel: @onMouseWheel
    onError: (e) -> console.log("An error ocurred while loading the application"); console.log e
    onLoad: (app) => setTimeout @onLoad.fill(app), 0


  # Viewer Methods

  constructor: ($container, @opts) ->
    @initDefaults()
    @$glCanvas = $ $("<canvas id='webGlCanvas#{viewerCount++}'></canvas>")
    $container.prepend @$glCanvas
    @$glCanvas.on "mousewheel", (e) -> e.preventDefault()

    # WebGL overlay
    PhiloGL @$glCanvas.attr("id"), @_webGlSettings = @webGlSettings()

  onLoad: (app) =>
    @app = app
    @[k] = app[k] for k in ['gl', 'program', 'camera', 'canvas', 'scene']

    window.gl = @gl

    # WebGL settings
    @gl.clearColor(0, 0, 0, 1)
    #@gl.clearColor(1, 1, 1, 1)
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
    @opts.onLoad(@)

  # Adds a o3d to the scene by generating it based on the opts
  addToScene: (name, opts) ->
    opts = $.extend {}, @o3dDefaults, opts

    orientation = position: [0,0,0], rotation: [0,0,0], scale: [1,1,1]
    isP3D = opts.class == PhiloGL.O3D.P3DModel

    @[name] = o3d = new (opts.class)(opts, @_onO3DLoad.fill opts)
    o3d[k].set.apply(o3d[k], opts[k] || v) for k, v of orientation
    @_onO3DLoad(opts, undefined, o3d) unless isP3D
    return o3d

  _onO3DLoad: (opts, p3d, o3d) =>
    #console.log p3d
    console.log p3d?.vertices.length
    console.log p3d?.nOfTriangles
    window.a = p3d.blob if p3d?
    @_alignModel o3d, opts.alignment if opts.alignment?
    opts.init(o3d) if opts.init?
    #o3d.drawType = @gl.LINES
    o3d.update()
    @scene.add o3d
    @update()
    @requestRender()

  setGCode: (gcode) ->
    # GCode parsing
    gcodeUtils.parse gcode, (cmd, axes) => @gcodeLines.lineTo(axes)
    @gcodeLines.updateLines()
    @requestRender()

  loadModel: (url, onLoadCallback) -> @model.load url, (p3d) =>
    name = p3d.filename.replace("\.[a-zA-Z0-9]+$", ".stl")
    #console.log p3d
    $(".local-download-link").attr
      href: (window.webkitURL||window.URL).createObjectURL p3d.blob
      download: name
    $(".local-download-link").html "Download #{p3d.fileType}"

    # centering and z-aligning the object on top of the build platform
    @_onO3DLoad alignment: {x: @_center, y: @_center, z: @_bottom}, p3d, @model
    onLoadCallback?()

  _center: [0.5, 0.5]
  _bottom: [0, 1]
  _none: [0, 0]

  _alignModel: (model, opts = {x: @_none, y: @_none, z: @_none}) ->
    #console.log model
    verts = model.vertices

    offset = null
    min = ( Number.MAX_VALUE for i in [0..2])
    max = ( Number.MIN_VALUE for i in [0..2])
    for i in [0..verts.length-1] by 3
      for j in [0..2]
        min[j] = verts[i+j] if verts[i+j] < min[j]
        max[j] = verts[i+j] if verts[i+j] > max[j]
    offset = ( max[i]*opts[k][0] + min[i]*opts[k][1] for k, i in ['x','y','z'] )
    for i in [0..verts.length-1] by 3
      for j in [0..2]
        verts[i+j] -= offset[j]
    

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

  resize: () ->
    @size =
      width: @opts.width?() || @$glCanvas.parent().innerWidth()
      height: @opts.height?() || @$glCanvas.parent().innerHeight()
    @$glCanvas.attr @size
    #@$glCanvas.attr height: @size.height
    console.log @size
    @gl.viewport(0, 0, @size.width, @size.height)
    @camera.aspect = @size.width / @size.height
    @camera.update()
    #@$glCanvas.removeAttr k for k in ['width', 'height']
    @requestRender()

  requestRender: -> @dirty = true

  onBeforeRender: (elem, i) =>
    # Making the model opaque
    isOpaque = @model == elem
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

  update: (t, r) -> for model in [@platform, @gcodeLines, @cube, @arMarker, @model]
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

