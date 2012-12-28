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

  # initializing qr code tracking
  $video = $("video").beacon qr: {metricWidth: 35.0}
  # updating the model orientation
  $video.on 'orientation:change', (e, o) => drawScene() if (@orientation = o)?


  # Texture and UV canvas (gcode layers)
  # -----------------------------------------------

  $textureCanvas = $ $("<canvas></canvas>").attr
    width: 300
    height: 300
    class: "textureCanvas"
  textureCtx = $textureCanvas[0].getContext "2d"

  textureCtx.moveTo 0, 0

  gcode2dExample.lines (line) ->
    # removing comments and whitespace as well as converting to lower case
    attrs = line.replace( /(;.*)|(\(.*?\))| /g , '').trim().toLowerCase().split(/(?=[a-z])/)

    cmd = attrs.shift()
    cmd = "#{cmd[0]}#{parseInt cmd.substring(1)}"

    if cmd == "g0" or cmd == "g1"
      axes = {}
      axes[a[0]] = parseFloat a.substring(1) for a in attrs
      #console.log axes

      textureCtx.lineTo(axes.x*100, axes.y*100) if axes.x? and axes.y?

  textureCtx.stroke()
  #$('body').prepend $textureCanvas


  # WebGL overlay
  # -----------------------------------------------
  $glCanvas = $ $("<canvas id='webGlCanvas'></canvas>").attr width: 500, height: 500, style: "z-index: 10; position: absolute"
  $video.parent().prepend $glCanvas

  setupElement = (elem) =>
    #update element matrix
    elem.update()
    #get new view matrix out of element and camera matrices
    @view.mulMat42(@camera.view, elem.matrix)
    #set buffers with element data
    @program.setBuffers
      aVertexPosition:
        value: elem.vertices
        size: 3

      aVertexColor:
        value: elem.colors
        size: 4

    #set uniforms
    @program.setUniform('uMVMatrix', @view)
    @program.setUniform('uPMatrix', @camera.projection)

  #drawScene = =>
  window.drawScene = =>
    # Resize
    console.log @orientation.size
    @size = @orientation.size
    $glCanvas.attr @size
    @gl.viewport(0, 0, @size.width, @size.height)
    @camera.aspect = @size.width / @size.height
    @camera.update()

    # Clear Screen
    @gl.clear(@gl.COLOR_BUFFER_BIT | @gl.DEPTH_BUFFER_BIT)

    # Draw Square
    if @orientation?
      translation = @orientation.translation
      rotation = @orientation.rotation
      @square.position.set(translation[0], translation[1], -translation[2])
      @square.rotation.set(rotation.x, rotation.y, rotation.z)
    else
      @square.position.set(-5, 0, -30)
      @square.rotation.set(0, 0, 0)
    console.log @square.position
    setupElement(@square)
    @gl.drawArrays(@gl.TRIANGLE_STRIP, 0, 4)

  onLoad = (app) =>
    @app = app
    @gl = app.gl
    @program = app.program
    @camera = app.camera
    @canvas = app.canvas
    @view = new PhiloGL.Mat4

    console.log app

    @gl.clearColor(0, 0, 0, 0)
    #gl.clearColor(0, 0, 0, 0)
    @gl.clearDepth(1)
    @gl.enable(@gl.DEPTH_TEST)
    @gl.depthFunc(@gl.LEQUAL)

    @camera.target = new PhiloGL.Vec3(0,0,-1)
    #@camera.view.id()

    window.square = @square = new PhiloGL.O3D.Model
      vertices: [
        +1, +1, 0
        -1, +1, 0
        +1, -1, 0
        -1, -1, 0
      ]
      colors: [
        0.5, 0.5, 1, 1,
        0.5, 0.5, 1, 1,
        0.5, 0.5, 1, 1,
        0.5, 0.5, 1, 1
      ]
    #@square.scale.set qrCodeWidth, qrCodeWidth, 2
    @square.scale.set 25, 25, 2 # not sure why this scale works but it does (something to do with px vs mm perhaps?)
    @square.drawType = @gl.LINES
    console.log @square

  initWebGl = => PhiloGL $glCanvas.attr("id"),
    program:
      from: 'ids'
      vs: 'shader-vs'
      fs: 'shader-fs'
    camera:
      fov:  40 # TODO: wut? why does this work? Shouldn't this should be 40? So confused.
      near: 1
      far: 1000
    onError: (e) -> console.log("An error ocurred while loading the application"); console.log e
    onLoad: onLoad

  initWebGl()

  # Pose control
  # -----------------------------------------------
