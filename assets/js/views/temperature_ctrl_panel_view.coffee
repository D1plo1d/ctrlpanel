#= require ./manual_ctrl_side_panel_view.coffee
# Jog Panel Directional Pad
class window.TemperatureCtrlPanelView extends ManualCtrlSidePanelView

  initialize: ->
    @$subtitle = @$(".subtitle")
    @axis = @$el.data "axis"

    @modelBindings = 
      "keyup input.jog-speed"      : "#{@axis}_jog_speed"
      "change input.jog-speed"     : "#{@axis}_jog_speed"
      "input input.jog-speed"      : "#{@axis}_jog_speed"
      "keyup input.jog-distance"   : "#{@axis}_jog_distance"
      "change input.jog-distance"  : "#{@axis}_jog_distance"
      "input input.jog-distance"   : "#{@axis}_jog_distance"

    @initPopover()
    @bindModelBindings()

    @$el.find(".directional-pad .btn").on "click", @clickMovementBtn
    #@model.bind 'change', @render, @

    @render()

  clickMovementBtn: (e) =>
    $btn = $(e.delegateTarget)

    data =
      axis: $btn.data("axis")
      distance: parseFloat( @model.get "#{@axis}_jog_distance" ) * parseInt( $btn.data "direction" )
      speed: parseFloat( @model.get "#{@axis}_jog_speed" )

    console.log data
    $.ajax "/jog", type: 'PUT', data: data, success: (data) -> console.log data

  render: ->
    #@$subtitle.html "#{@model.get "#{@axis}_jog_distance"}mm @ #{@model.get "#{@axis}_jog_speed"}mm/s"
