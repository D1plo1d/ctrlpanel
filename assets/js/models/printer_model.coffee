class window.PrinterModel extends Backbone.Model

  defaults:
    xy_jog_speed: 3000/60 # mm/s
    xy_jog_distance: 10
    z_jog_speed: 150/60 # mm/s
    z_jog_distance: 1
    e_feedrate: 50 # ???

  initialize: ->
    @set @defaults, silent: true