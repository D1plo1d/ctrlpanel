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

  $(".modal .canvas-container").viewer (viewer) ->
    #$.get "/40mmcube.gcode", (gcode) -> viewer.setGCode(gcode)
    #viewer.loadModel("/40mmcube.stl") # TODO: we need compute normals for this model to work
    #viewer.loadModel("/ultimaker_platform.stl")
    #viewer.loadModel("/DNA_Righthanded.stl")


  # New print job modal

  # Show the file dialog when the new print job button is clicked
  $(".btn-new-print-job").on "click", ->
    $("#new-print-job-modal .cad-files").click()
  # Show the print dialog when a file is selected
  $("#new-print-job-modal .cad-files").on "change", -> if @files.length > 0
    ###
    reader = new FileReader()
    reader.onload = () ->
      url = reader.result
      $("#new-print-job-modal .canvas-container").viewer "loadModel", url
      $("#new-print-job-modal").modal("show")
    reader.readAsDataURL @files[0]
    ###
    console.log @files[0]
    $("#new-print-job-modal .canvas-container").viewer "loadModel", @files[0]
    $("#new-print-job-modal").modal("show")
