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


  
  if false
    $("#manual_ctrl .canvas-container").viewer (viewer) ->
      #$.get "/40mmcube.gcode", (gcode) -> viewer.setGCode(gcode)
      #viewer.loadModel("/40mmcube.stl") # TODO: we need compute normals for this model to work
      #viewer.loadModel("/DNA_Righthanded.stl")
      #viewer.loadModel("/polysoup-fixed.stl")
      #viewer.loadModel("/low-poly-ball.stl")
      #viewer.loadModel("/10242-vert-ball.stl")
      #viewer.loadModel("/40962-vert-ball.stl")
      #viewer.loadModel("/high-poly-ball.stl")
      viewer.loadModel("/chair.stl")

  else
    # New print job modal
    $(".modal .canvas-container").viewer ->
      #console.log "w00t"

    # Show the file dialog when the new print job button is clicked
    $(".btn-new-print-job").on "click", ->
      $("#new-print-job-modal .cad-files").click()
    # Show the print dialog when a file is selected (TODO: allow multiple file uploads, add pagination to the modal)
    $("#new-print-job-modal .cad-files").on "change", -> if @files.length > 0
      $("#new-print-job-modal .canvas-container").viewer "loadModel", @files[0]
      $("#new-print-job-modal").removeClass("hide").modal("show")
    # Start the print when the print button is clicked
    $("#new-print-job-modal .btn-confirm-print-job").on "click", ->
      $("#new-print-job-modal form").submit()
      #$.ajax "/print_jobs/", type: 'POST', data: data, success: (data) -> console.log data
