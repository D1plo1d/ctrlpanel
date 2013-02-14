fs             = require 'fs-extra'
{print}        = require 'util'
which          = require 'which'
{spawn, exec}  = require 'child_process'
assets         = require 'connect-assets'
yml            = require 'js-yaml'
require 'sugar'

# ANSI Terminal Colors
bold  = '\x1B[0;1m'
red   = '\x1B[0;31m'
green = '\x1B[0;32m'
reset = '\x1B[0m'

pkg = JSON.parse fs.readFileSync('./package.json')
testCmd = pkg.scripts.test
startCmd = pkg.scripts.start
  

log = (message, color, explanation) ->
  console.log color + message + reset + ' ' + (explanation or '')

currentMessage = null
logStart = (message) ->
  currentMessage = message
  process.stdout.write "#{message}.."

logEnd = (message = currentMessage) ->
  console.log "\r#{message}..".padRight(' ', 60 - message.length) + '[\x1B[0;32m DONE \x1B[0m]'

config = null
loadConfig = (callback) ->
  fs.readFile "#{__dirname}/config/config.yml", "utf8", (err, data) =>
    config = yml.load data
    callback?()


# Compiles app.coffee and src directory to the app directory
build = (callback) ->
  compileApp -> buildAssets -> callback?()

compileApp = (callback) ->
  logStart 'Compiling CoffeeScripts'
  options = ['-c','-b', '-o', 'app', 'src']
  cmd = which.sync 'coffee'
  coffee = spawn cmd, options
  coffee.stdout.pipe process.stdout
  coffee.stderr.pipe process.stderr
  coffee.on 'exit', (status) -> if status is 0
    logEnd()
    callback?()

buildAssets = (callback) ->
  options = {}
  cleanAssets options, ->
    _buildAssetsAfterCleaning options, callback

cleanAssets = (options = {}, callback) ->
  builtAssets = (options.buildDir || './builtAssets')
  fs.exists builtAssets, (exists) ->
    if exists
      fs.remove fs.realpathSync(builtAssets), callback
    else
      callback?()

_buildAssetsAfterCleaning = (options = {}, callback) ->
  oldEnv = process.env.NODE_ENV
  process.env.NODE_ENV = 'production'
  options.build = true
  options.minifyBuilds = false
  options.buildFilenamer ?= (filename, code) -> filename
  assets options
  for [compiler, name] in [[css, 'CSS'], [js, 'JS ']]
    logStart "PreCompiling #{name}"
    compiler 'app'
    logEnd()
  process.env.NODE_ENV = oldEnv
  callback?()


deploy = (callback) ->
  console.log "who?"
  loadConfig -> gitPull -> rsyncAssets callback

gitPull = (callback) ->
  logStart "Synchronizing Git Repository"
  host = config.deployment.hostname
  dir = '~/ctrlpanel/'
  exec "git remote rm localDeployment", ->
    exec "git remote add localDeployment ssh://#{host}/~/ctrlpanel/.git", ->
      proc = exec "git push localDeployment"
      proc.on 'exit', (status) -> if status == 0
        logEnd()
        callback?()
      proc.stderr.on 'data', console.log
      proc.stdout.on 'data', console.log

rsyncAssets = (callback) ->
  logStart "Synchronizing Assets"
  host = config.deployment.hostname
  dir = '~/ctrlpanel/builtAssets'
  proc = exec "rsync -r ./builtAssets #{host}:#{dir}"
  proc.on 'exit', (status) -> callback?() if status == 0
  proc.stderr.on 'data', console.log
  proc.stdout.on 'data', console.log
  logEnd()

# mocha test
test = (callback) ->
  options = [
    '--compilers'
    'coffee:coffee-script'
    '--colors'
    '--require'
    'should'
    '--require'
    './server'
  ]
  try
    cmd = which.sync 'mocha' 
    spec = spawn cmd, options
    spec.stdout.pipe process.stdout 
    spec.stderr.pipe process.stderr
    spec.on 'exit', (status) -> callback?() if status is 0
  catch err
    log err.message, red
    log 'Mocha is not installed - try npm install mocha -g', red

task 'docs', 'Generate annotated source code with Docco', ->
  fs.readdir 'src', (err, contents) ->
    files = ("src/#{file}" for file in contents when /\.coffee$/.test file)
    try
      cmd = which.sync 'docco' 
      docco = spawn cmd, files
      docco.stdout.pipe process.stdout
      docco.stderr.pipe process.stderr
      docco.on 'exit', (status) -> callback?() if status is 0
    catch err
      log err.message, red
      log 'Docco is not installed - try npm install docco -g', red


task 'build', ->
  build -> log ":)", green

task 'deploy', ->
  build -> deploy -> log ":)", green

task 'spec', 'Run Mocha tests', ->
  build -> test -> log ":)", green

task 'test', 'Run Mocha tests', ->
  build -> test -> log ":)", green

task 'dev', 'start dev env', ->
  # watch_coffee
  options = ['-c', '-b', '-w', '-o', 'app', 'src']
  cmd = which.sync 'coffee'  
  coffee = spawn cmd, options
  coffee.stdout.pipe process.stdout
  coffee.stderr.pipe process.stderr
  log 'Watching coffee files', green
  # watch_js
  #supervisor = spawn 'node', ['./node_modules/supervisor/lib/cli-wrapper.js','-w','app,views', '-e', 'js|jade', '--', '--debug', 'server']
  supervisor = spawn 'node', ['./node_modules/supervisor/lib/cli-wrapper.js','-w','app,views', '-e', 'js|jade', '--', 'server']
  supervisor.stdout.pipe process.stdout
  supervisor.stderr.pipe process.stderr
  for e in ["uncaughtException", "SIGINT", "SIGTERM"]
    process.on e, -> supervisor.kill()
  
  log 'Watching js files and running server', green

  