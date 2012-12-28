require 'longjohn'
require 'sugar'
express = require 'express'
stylus = require 'stylus'
assets = require 'connect-assets'
http = require 'http'
util = require 'util'
rest = require '../node_modules/restler/lib/restler'
redback = require('redback').createClient()
fs = require('fs')

printer = redback.createHash('printer')

app = express()
app.use express.compress()
# Add Connect Assets
app.use assets()
# Set the public folder as static assets
app.use express.static(process.cwd() + '/public')

app.use express.bodyParser keepExtensions: true, uploadDir: "#{__dirname}/uploads", hash: "sha1"
app.use express.cookieParser()

# Set View Engine
app.set 'view engine', 'jade'

# Routing
app.get '/', (req, resp) -> resp.render 'index'


jog = (req, resp, next) ->
  axis = req.param('axis')
  distance = req.param('distance')
  speed = req.param('speed')

  url = "http://admin:password@localhost:4311/move/axis/#{axis}/#{distance}/#{speed*60}"

  rest.get(url).on "success", (data, res) ->
    console.log data
    next()

app.put '/jog', jog, (req, resp) -> resp.send 200


uploadPrintJob = (req, resp, next) ->
  console.log req.files
  files = req.files.printjobs
  next()
  if false
    url = "http://admin:password@localhost:4311/printbutton"
    # TODO: File uploads
    data = filename: "./test.gcode"

    rest.get(url).on "success", data: data, (data, res) ->
      console.log data
      next()

app.post '/print_jobs/', uploadPrintJob, (req, resp) -> resp.send 200

# Define Port
port = process.env.PORT or process.env.VMC_APP_PORT or 3009
# Start Server
app.listen port, -> console.log "Listening on #{port}\nPress CTRL-C to stop server."
