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
    #TODO: put the files in a temp folder
    #callback()
    uploads = path.resolve __dirname, "..", "uploads"
    fs.mkdirp uploads, ->
      # TODO: for each uploaded file
      f = files
      f.path
      # TODO: proper rename the file with a UUID name
      newPath = path.resolve uploads, "thing.stl"
      # copy the temp file to the uploads folder
      #fs.copy f.path, newPath, ->
      #  @printJobs.push newPath
      #  @print(callback)

  print: (callback) ->
    url = "http://admin:password@localhost:4311/printbutton"
    # TODO: get the next file in the queue
    data = filename: @printJobs.pop()
    console.log "printing #{data.filename}"

    rest.get(url).on "success", data: data, (data, res) ->
      console.log data
      callback()

module.exports =
  driver: ( driver = new PrintDriver() )
  queue: new PrintQueue(driver)
