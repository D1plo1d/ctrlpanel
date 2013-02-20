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

P3D.debug = true

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
    new PrintJobModal()


class PrintJobModal
  constructor: ->
    @$modal = $ "#new-print-job-modal"

    elements =
      $files: ".cad-files"
      $canvas: ".canvas-container"
      $form: "form"
      $scaleVal: ".scale-val"
      $scaleSlider: ".scale-slider"
      $printBtn: ".btn-confirm-print-job"
      $download: ".local-download-link"

    @[k] = @$modal.find selector for k, selector of elements

    @$canvas.viewer onLoad: @_onViewerLoad

  _onViewerLoad: =>
    # Show the file dialog when the new print job button is clicked
    $(".btn-new-print-job").on "click", => @$files.click()

    # Show the print dialog when a file is selected
    # TODO: allow multiple file uploads, add pagination to the modal
    @$modal.on "change", ".cad-files", => @open()

    # Model Scaling
    @$scaleSlider.slider
      min: 0.1
      max: 3
      val: 1
      snap: (val) -> val.round(1)
      onChange: @_onScaleSliderChange

    @$scaleVal.on "keyup change", @_onScaleValChange

    @$printBtn.on "click", @_onPrintBtnClick
    @$download.on "click", @_onDownloadClick

    # Testing
    #@open ["/ultimaker_platform.stl"]

  _onScaleSliderChange: (e, val) =>
    @$scaleVal.val(val).change()

  _onScaleValChange: =>
    val = parseFloat @$scaleVal.val()
    return unless Object.isNumber(val) and val > 0
    if val != @$scaleSlider.slider "val"
      @$scaleSlider.slider "val", val
    @$canvas.viewer "scale", val

  _exportBlob: ->
    exportedP3D = @p3d.cloneFromMesh
      background: false
      pipeline: ["exportTextStl"]
      scale: parseFloat @$scaleVal.val()
    exportedP3D.blob

  _exportURL: ->
    (window.webkitURL||window.URL).createObjectURL @_exportBlob()

  _onDownloadClick: =>
    @$download.attr href: @_exportURL(), download: @p3d.filename

  _onPrintBtnClick: (e) =>
    formData = new FormData @$form[0]
    formData.append "cadFiles", @_exportBlob(), @p3d.filename

    $.ajax
      url: "/print_jobs/"
      type: 'POST'
      data: formData
      cache: false
      processData : false
      contentType : false

    e.preventDefault()
    return false

  open: (files = @$files[0].files) =>
    console.log files
    return unless files.length > 0
    $("body").mask("Loading...")
    @$canvas.viewer "loadModel", files[0], @_onModelLoad

  _onModelLoad: (@p3d) =>
    # Repopulating the $files element so that we can catch change events even when the same
    # file is selected twice in a row
    fileHtml = @$files.clone().wrap('<div/>').parent().html()
    @$files.remove()
    @$files = $(fileHtml).prependTo @$modal

    @$download.html "Download Stl"
    @$scaleVal.val(1)
    @$scaleVal.trigger "change"
    $("body").unmask()
    @$modal.removeClass("hide").show().modal("show")
    @$canvas.viewer "resize"

