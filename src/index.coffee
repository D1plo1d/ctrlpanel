require 'longjohn'
require 'sugar'

# Importing our NPM libraries. TODO: How could this be made more DRY in a standard way?
globalRequire = () -> for requirement in arguments
  GLOBAL[requirement] = require requirement

globalRequire 'express', 'stylus', 'http', 'util'
GLOBAL.fs = require 'fs-extra'
restler = require '../node_modules/restler/lib/restler'
assets = require 'connect-assets'

# Initializing the app
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

# Routes and Models
models = require('./models')
require('./routes').call(models, app)

# Define Port
port = process.env.PORT or process.env.VMC_APP_PORT or 3009
# Start Server
app.listen port, -> console.log "Listening on #{port}\nPress CTRL-C to stop server."
