#= require vendor/jquery-1.8.3.min
#= require vendor/underscore-min
#= require_tree vendor

#= require_tree models
#= require_tree views

#= require PhiloGL.cls
#= require philogl_p3d_model
#= require o3dExtensions
#= require p3d
#= require viewer
#= require slider

#P3D.debug = true

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


  if true
    $viewer = $("#manual_ctrl .canvas-container").viewer
      height: ->
        $(".content").innerHeight() - parseInt($viewer.css('margin-bottom'), 10) - 5
      onLoad: (viewer) ->
        #$.get "/40mmcube.gcode", (gcode) -> viewer.setGCode(gcode)
        #viewer.loadModel("/ultimaker_platform.stl")
    $('a.manual_ctrl_nav').on 'shown', -> $viewer.viewer "resize"

  #else
  if true
    # New print job modal
    $modal = $("#new-print-job-modal")
    window.$jobPreview = $canvas = $modal.find(".canvas-container").viewer onLoad: ->

      # Show the file dialog when the new print job button is clicked
      $(".btn-new-print-job").on "click", ->
        $("#new-print-job-modal .cad-files").click()

      openPrintJobModal = (files) ->
        $("body").mask("Loading...")
        $canvas.viewer "loadModel", files[0], ->
          console.log "moo"
          $("body").unmask()
          $modal.removeClass("hide").modal("show")
          $canvas.viewer "resize"

      # Show the print dialog when a file is selected (TODO: allow multiple file uploads, add pagination to the modal)
      $("#new-print-job-modal .cad-files").on "change", ->
        openPrintJobModal(@files) if @files.length > 0

      # Testing
      openPrintJobModal ["/ultimaker_platform.stl"]
      #$canvas.viewer "scale", 0.5


      # Model Scaling
      $scaleVal = $(".scale-val")
      $scaleSlider = $modal.find(".scale-slider").slider
        min: 0.1
        max: 3
        val: 1
        snap: (val) -> val.round(1)
        onChange: (e, val) ->
          #val = 1/16 * Math.pow(2,val*10)
          $scaleVal.val(val).change()

      $scaleVal.on "keyup change", ->
        val = parseFloat $scaleVal.val()
        return unless Object.isNumber(val) and val > 0
        #sliderVal = 16 * Math.log(val) / 10
        #console.log sliderVal
        if val != $scaleSlider.slider "val"
          $scaleSlider.slider "val", val
        $canvas.viewer "scale", val

      # Start the print when the print button is clicked
      $modal.find(".btn-confirm-print-job").on "click", (e) ->
        formData = new FormData $("#new-print-job-modal form")[0]
        console.log formData
        #$.post "/print_jobs/", formData
        $.ajax
          url: "/print_jobs/"
          type: 'POST'
          data: formData
          cache: false
          processData : false
          contentType : false
        console.log e
        e.preventDefault()
        return false
