// Generated by CoffeeScript 1.4.0
var app, assets, globalRequire, models, port, restler;

require('longjohn');

require('sugar');

globalRequire = function() {
  var requirement, _i, _len, _results;
  _results = [];
  for (_i = 0, _len = arguments.length; _i < _len; _i++) {
    requirement = arguments[_i];
    _results.push(GLOBAL[requirement] = require(requirement));
  }
  return _results;
};

globalRequire('express', 'stylus', 'http', 'util');

GLOBAL.fs = require('fs-extra');

restler = require('../node_modules/restler/lib/restler');

assets = require('connect-assets');

app = express();

app.use(express.compress());

app.use(assets());

app.use(express["static"](process.cwd() + '/public'));

app.use(express.bodyParser({
  keepExtensions: true,
  uploadDir: "" + __dirname + "/uploads",
  hash: "sha1"
}));

app.use(express.cookieParser());

app.set('view engine', 'jade');

models = require('./models');

require('./routes').call(models, app);

port = process.env.PORT || process.env.VMC_APP_PORT || 3009;

app.listen(port, function() {
  return console.log("Listening on " + port + "\nPress CTRL-C to stop server.");
});
