require 'longjohn'
require 'sugar'

# Importing our NPM libraries. TODO: How could this be made more DRY in a standard way?
globalRequire = () -> for requirement in arguments
  GLOBAL[requirement] = require requirement

globalRequire 'express', 'stylus', 'http', 'util'
GLOBAL.fs = require 'fs-extra'
assets = require 'connect-assets'

asset_opts =
  build: true
  minifyBuilds: false
  buildFilenamer: (filename, code) -> filename
  buildDir: "#{__dirname}/build/content"


# Initializing the app
app = express()
app.use express.compress()
# Add Connect Assets
isProduction = process.env.NODE_ENV == 'production'
console.log "Node ENV: #{process.env.NODE_ENV}"
#app.use assets build: false, src: if isProduction then "builtAssets" else "assets"
app.use assets asset_opts

# Set the public folder as static assets
app.use express.static(process.cwd() + '/public')

fs.mkdir uploadDir = "#{__dirname}/../uploads"
app.use express.bodyParser keepExtensions: true, uploadDir: uploadDir, hash: "sha1"
app.use express.cookieParser()

# Set View Engine
app.set 'view engine', 'jade'

# Define Port
port = process.env.PORT or process.env.VMC_APP_PORT or 3009
# Start Server
app.listen port, -> console.log "Listening on #{port}\nPress CTRL-C to stop server."

app.get '/', (req, resp) -> resp.render 'index'
