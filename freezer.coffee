compressor = require 'node-minify'
_ = require 'underscore'
_s = require 'underscore.string'
glob = require "glob"
cons = require 'consolidate'
fs = require 'fs-extra'
path = require 'path'
watch = require 'watch'
Snockets = require 'snockets'
stylus = require 'stylus'
{spawn, exec}  = require 'child_process'
util = require 'util'
EventEmitter = require('events').EventEmitter

class FreezerBuilder
  constructor: (@opts, callback) ->
    @addSetter(k) for k, v of @opts
    @addSetter(k) for k in @opts.servers
    callback?(@)

  addSetter: (k) -> @[k] = (v) -> @opts[k] = v

# Logging
class FreezerLog
  green: '\x1B[0;32m'
  _rs: '\x1B[0m'
  prefix: "\x1B[0;1mFreezer:\x1B[0m "

  constructor: (@verbose) ->
    @suffix = "[#{@green} DONE #{@_rs}]"
    @msgs = []

  announce: (message) ->
    @announcement = message
    @_update

  start: (message) ->
    @msgs[message] = false
    @_update()

  end: (message) ->
    @msgs[message] = true
    @_update()

  _update: ->
    width = process.stdout.getWindowSize()[0]
    `util.print("\u001b[2J\u001b[0;0H")`
    #console.log ""#"[2J"
    if @announcement?
      console.log "\n#{@prefix} #{@green}#{@announcement}#{@_rs}"
      console.log _s.rpad("", width, '_') + "\n"

    text = ""
    for message, completed of @msgs
      message = "#{message} "
      if completed
        text += _s.rpad(message, width - 10, '.')
        text += "  #{@suffix}"
      else
        text += "#{message}"
      text += "\n\n"

    process.stdout.write text
    #console.log "\rb"

  reset: ->
    #console.log "\n"
    @msgs = []

class ViewContext

  constructor: (@freezer) ->

  css: (f) ->
    "<link href=\"#{f}\" media=\"all\" rel=\"stylesheet\" type=\"text/css\">"

  js: (f) ->
    "<script type=\"text/javascript\" src=\"#{f}\"></script>"

module.exports = class Freezer extends EventEmitter
  defaults:
    buildDir: "#{__dirname}/build"
    root: "#{__dirname}"
    views: "assets/views"
    js: "assets/js"
    css: "assets/css"
    minify: process.env.NODE_ENV == 'production'
    compile: [ 'index.html', 'app.js', 'app.css', 'background.js' ]
    servers: [ 'production', 'staging' ]
    verbose: true

  constructor: (builder) ->
    @opts = new FreezerBuilder(_.clone @defaults, builder).opts
    @opts = _.clone @defaults

    @files = @opts.compile
    @log = new FreezerLog(@opts.verbose)
    @snockets = new Snockets()

  build: ->
    @_buildAssets(true)
    @_buildViews()
    # TODO: use ICED CS here

  watch: ->
    @log.announce "Watching for changes"
    @initialFileCount = 0
    for dir in [@opts.views, @opts.js, @opts.css]
      @log.start "Watching #{dir}.."

      dir = path.join @opts.root, dir
      fs.mkdirpSync dir
      watch.watchTree dir, {ignoreDotFiles: true, interval: 300}, @_onFileChange
    @log.reset()

  _onFileChange: (f, prev, next) => if prev? or next?
    @log.reset()
    @log.announce "#{path.basename f} changed"
    @_buildAssets(false)
    @_buildViews()

  _buildAssets: (minify) ->
    onlyAssets = (f) -> _s.endsWith(f, ".js") or _s.endsWith(f, ".css")
    @_buildAssetFile(fName, minify) for fName in _.filter(@files, onlyAssets)

  _buildAssetFile: (fName, minify) ->
    ext = path.extname fName
    baseName = path.basename fName, ext
    fPath = path.join @opts.root, @opts[ext[1..]], path.dirname(fName), "#{baseName}.*"

    writeCallback = (e, c) => @_writeAsset e,c, fName, ext, minify, =>
      @log.end "Building #{fName}"

    glob fPath, (e, files) => if files? and files.length > 0
      @log.start "Building #{fName}"
      f = files[0]

      if ext == ".css"
        fs.readFile f, (err, css) ->
          styl = stylus css.toString()
          styl.include require('nib').path
          styl.set 'filename', f
          styl.set('include css', true)
          styl.include path.dirname f
          styl.render writeCallback
      else
        @snockets.getConcatenation f, writeCallback

  _writeAsset: (err, content, fName, ext, minify, callback) =>
    fOut = path.join(@opts.buildDir, ext[1..], fName)
    #console.log err if err?
    fs.mkdirsSync path.dirname fOut
    fs.writeFile fOut, content, =>
      if minify
        @_minifyFile fName, callback
      else
        callback?()

  _minifyFile: (fName, callback) ->
    isJs = path.extname(fName) == '.js'
    return callback?() if isJs
    new compressor.minify
      type: if isJs then 'uglifyjs' else 'yui-css',
      fileIn: fName,
      fileOut: fName,
      callback: callback

  _buildViews: ->
    ext = path.extname fName
    onlyAssets = (f) -> _s.endsWith f, ".js" or _s.endsWith f, ".css"

    @_buildViewFile(fName) for fName in _.filter(@files, (f) -> !onlyAssets(f))

  _buildViewFile: (fName) ->
    ext = path.extname fName
    baseName = path.basename fName, ext
    fPath = path.join @opts.views, path.dirname(fName), "#{baseName}.*"

    viewContext = new ViewContext @

    glob fPath, (e, files) => if files? and files.length > 0
      @log.start "Building #{fName}"
      f = files[0]
      engine = path.extname(f)[1..]
      output = path.join @opts.views, fName

      cons[engine] f, viewContext, (err, html) =>
        #console.log err if err?
        fOut = path.join(@opts.buildDir, fName)
        fs.writeFile fOut, html, =>
          @log.end "Building #{fName}"

  _onError: (err) =>
    #console.log err if @opts.verbose
    @emit "error", err
