#redback = require('redback').createClient()
#printer = redback.createHash('printer')

class PrintDriver
  jog: (opts, callback) ->
    url = "http://admin:password@localhost:4311/move/axis/#{opts.axis}/#{opts.distance}/#{opts.speed*60}"

    rest.get(url).on "success", (data, res) ->
      console.log data
      callback()

class PrintQueue
  constructor: (d) -> @driver = driver

  add: (files, callback) ->
    #TODO: put the files in a temp folder
    callback()

  print: ->
    url = "http://admin:password@localhost:4311/printbutton"
    # TODO: get the next file in the queue
    data = filename: "./test.gcode"

    rest.get(url).on "success", data: data, (data, res) ->
      console.log data
      callback()

module.exports =
  driver: ( driver = new PrintDriver() )
  queue: new PrintQueue(driver)
