rest = require '../node_modules/restler/lib/restler'

#redback = require('redback').createClient()
#printer = redback.createHash('printer')

class PrintDriver
  jog: (opts, callback) ->
    url = "http://admin:password@localhost:4311/move/axis/#{opts.axis}/#{opts.distance}/#{opts.speed*60}"

    rest.get(url).on "success", (data, res) ->
      console.log data
      callback()

class PrintQueue
  constructor: (d) ->
    @driver = driver
    @printJobs = []

  add: (files, callback) ->
    @printJobs.push files.path
    @print(callback)
    #callback?()

  print: (callback) ->
    url = "http://admin:password@localhost:4311/printbutton"
    # TODO: get the next file in the queue
    data = filename: @printJobs.pop()
    console.log "printing #{data.filename}"

    rest.get(url, data: data).on "success", (data, res) ->
      console.log data
      callback?()

module.exports =
  driver: ( driver = new PrintDriver() )
  queue: new PrintQueue(driver)
