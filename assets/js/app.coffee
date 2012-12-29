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

  new Viewer($("video"))

class Viewer

  position: [0,0,0]
  lineVerts: []
  lineColors: []

  constructor: ($video) ->
    # WebGL overlay
    @$glCanvas = $ $("<canvas id='webGlCanvas'></canvas>").attr style: "z-index: 10; position: absolute"
    $video.parent().prepend @$glCanvas

    @initWebGl()

    gcode.parse gcode2dExample, (cmd, axes) => @lineTo(axes)
    #gcode.parse gcode2dExample, (cmd, axes) => @lineTo(x: axes.x*100, y: axes.y*100, z: 0)

  initWebGl: => PhiloGL @$glCanvas.attr("id"),
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
        points:
          diffuse: { r: 0.7, g: 0.7, b: 0.7}
          specular: { r: 0.8, g: 0.8, b: 0 }
          position: { x: 3, y: 3, z: 3}
    onError: (e) -> console.log("An error ocurred while loading the application"); console.log e
    onLoad: @onLoad

  onLoad: (app) => requestAnimationFrame =>
    @app = app
    @gl = app.gl
    @program = app.program
    @camera = app.camera
    @canvas = app.canvas
    @scene = app.scene
    @view = new PhiloGL.Mat4

    console.log app

    @gl.clearColor(0, 0, 0, 0)
    @gl.clearDepth(1)
    @gl.enable(@gl.DEPTH_TEST)
    @gl.depthFunc(@gl.LEQUAL)

    @camera.target = new PhiloGL.Vec3(0,0,-1)
    #@camera.view.id()

    @lines = new PhiloGL.O3D.Model
      drawType: @gl.LINES
      dynamic: true
      vertices: []
      colors: []
      uniforms:
        shininess: 10,
        colorUfm: [0.5, 0.3, 0.7, 1]


    window.square = @square = new PhiloGL.O3D.Model
      drawType: @gl.TRIANGLE_STRIP
      vertices: [
        +1, +1, 0
        -1, +1, 0
        +1, -1, 0
        -1, -1, 0
      ]
      colors: [
        0.5, 0.5, 1, 0.5,
        0.5, 0.5, 1, 0.5,
        0.5, 0.5, 1, 0.5,
        0.5, 0.5, 1, 0.5
      ]
      uniforms:
        shininess: 10,
        colorUfm: [0.5, 0.3, 0.7, 1]

    metricWidth = 35.0
    @square.scale.set metricWidth, metricWidth, 0.1
    #@square.scale.set 25, 25, 2 # not sure why this scale works but it does (something to do with px vs mm perhaps?)
    @scene.add(@square)
    console.log @square
    @updateLines()

    # updating the model orientation
    $video = $("video").on 'ar:orientaionchange', (e, t) => @tracer = t; @drawScene()
    $video.on 'ar:videoresize', (e, t) => @tracer = t; @resize()
    # initializing qr code tracking
    $video.arTracer qr: {metricWidth: metricWidth}

  ###
  drawElement: (elem, type, vertsPerElement) =>
    #update element matrix
    elem.update()
    #get new view matrix out of element and camera matrices
    @view.mulMat42(@camera.view, elem.matrix)
    #set buffers with element data
    @program.setBuffers
      aVertexPosition: { value: elem.vertices, size: 3 }
      aVertexColor:    { value: elem.colors,   size: 4 }

    #set uniforms
    @program.setUniform('uMVMatrix', @view)
    @program.setUniform('uPMatrix', @camera.projection)
    #console.log elem.vertices.length
    @gl.drawArrays(type, 0, vertsPerElement)
  ###

  resize: ->
    # Resize
    console.log @tracer.size
    @size = @tracer.size
    @$glCanvas.attr @size
    @gl.viewport(0, 0, @size.width, @size.height)
    @camera.aspect = @size.width / @size.height
    @camera.update()
    @drawScene()

  drawScene: =>
    # Clear Screen
    @gl.clear(@gl.COLOR_BUFFER_BIT | @gl.DEPTH_BUFFER_BIT)

    # Draw everything
    @scene.render()

    #@updateTracerPositions()
    #console.log @square.position
    #@drawElement(@square, @gl.TRIANGLE_STRIP, 4)
    #@drawElement(@lines, @gl.LINES, 2)

  lineTo: (newPosition) =>
    for p in [@position, newPosition]
      @lineVerts << [p.x, p.y, p.z]
      @lineColors << [0.5, 0.5, 1, 1]
    @position = newPosition

  updateLines: =>
    @scene.models.remove(@lines) if @line?
    @lines = new PhiloGL.O3D.Model vertices: @lineVerts, colors: @lineColors
    @scene.add(@lines)

  updateTracerPositions: -> if @tracer?
    t = @tracer.translation
    r = @tracer.rotation

    for obj in [@lines, @square]
      obj.position.set(t[0], t[1], t[2])
      obj.rotation.set(r.x, r.y, r.z)
      obj.update()
