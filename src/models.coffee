rest = require '../node_modules/restler/lib/restler'
fs   = require 'fs'
temp = require 'temp'
yml = require 'js-yaml'
path = require 'path'
{spawn, exec}  = require 'child_process'
events = require 'events'

config = null
rootDir = "#{__dirname}/.."
testingDriver = false

loadConfig = (callback) ->
  fs.readFile "#{__dirname}/../config/config.yml", "utf8", (err, data) =>
    config = yml.load data
    callback?()


class PrintDriver
  constructor: ->
    loadConfig @_initChildProc

  _initChildProc: => if config.driver.spawn
    console.log "\nStarting Driver Child Process"
    console.log "--------------------------------------"
    #@proc = spawn config.driver, undefined, cwd: rootDir
    @proc = spawn "python", ["#{rootDir}/drivers/printrun/pronsole.py", "--web"], cwd: rootDir
    @proc.stderr.on 'data', @_log
    @proc.stdout.on 'data', @_log
    for e in ["uncaughtException", "SIGINT", "SIGTERM"]
      process.on e, @_killChildProc

  _killChildProc: =>
    @proc.kill()
    process.exit()

  _log: (data) -> console.log('DRIVER > ' + line) for line in data.toString().split("\n")

  jog: (opts, callback) ->
    url = "http://admin:password@localhost:4311/move/axis/#{opts.axis}/#{opts.distance}/#{opts.speed*60}"

    rest.get(url).on "success", (data, res) ->
      console.log data
      callback?()

class PrintQueue
  constructor: (d) ->
    @driver = driver
    @printJobs = []

  add: (files, callback) ->
    if testingDriver
      @print()
    else
      @printJobs.push job = new PrintJob files.path, files.filename
      job.on "success", => @print()
    callback?()

  print: (callback) ->
    url = "http://admin:password@localhost:4311/printbutton/"
    # TODO: get the next file in the queue
    if testingDriver
      data = filename: "#{__dirname}/../uploads/68f8e84aee5b44bc39fe6829615a3678.gcode"
    else
      job = @printJobs.pop()
      data = filename: job.gcodePath
      console.log "printing #{job.filename}"

    console.log data
    rest.post(url, data: data).on "success", (data, res) -> callback?()


class PrintJob extends events.EventEmitter
  constructor: (@cadPath, @filename) ->
    @status = "slicing"
    # TODO: this should really just watch the config file
    loadConfig => @_onConfigLoad()

  _onConfigLoad: =>
    extIndex = @cadPath.lastIndexOf(path.extname @cadPath)
    @gcodePath = "#{@cadPath[0..extIndex]}gcode"
    cmd = """
      export P3D_CAD_FILE=\"#{@cadPath}\";
      export P3D_GCODE_FILE=\"#{@gcodePath}\";
      #{config.slicer}
    """
    @gcodeProc = exec cmd, undefined, cwd: rootDir
    @gcodeProc.on 'exit', @_onGCodeProcExit
    @gcodeProc.stderr.on 'data', @_logSlicer
    @gcodeProc.stdout.on 'data', @_logSlicer

  _logSlicer: (data) -> console.log('SLICER > ' + line) for line in data.split("\n")

  _onGCodeProcExit: (@slicerExitCode, signal) =>
    if @slicerExitCode == 0
      console.log "\n\nGCode Generation Complete"
      @status = "complete"
      @emit "success"
    else
      console.log "\n\nError Generating GCode"
      @status = "error"
      @emit "error"
    @emit "complete"


module.exports =
  driver: ( driver = new PrintDriver() )
  queue: new PrintQueue(driver)
