// Generated by CoffeeScript 1.4.0

module.exports = function(app) {
  var _this = this;
  app.get('/', function(req, resp) {
    return resp.render('index');
  });
  app.put('/jog', function(req, resp, next) {
    var k, opts, _i, _len, _ref;
    opts = {};
    _ref = ['axis', 'distance', 'speed'];
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      k = _ref[_i];
      opts[k] = req.param(k);
    }
    return _this.driver.jog(opts, function() {
      return resp.send(200);
    });
  });
  return app.post('/print_jobs/', function(req, resp, next) {
    return _this.queue.add(req.files.cadFiles, function() {
      return resp.send(200);
    });
  });
};
