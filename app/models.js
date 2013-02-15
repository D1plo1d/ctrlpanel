// Generated by CoffeeScript 1.4.0
var PrintDriver, PrintJob, PrintQueue, config, driver, events, exec, fs, loadConfig, path, rest, rootDir, spawn, temp, testingDriver, which, yml, _ref,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

rest = require('../node_modules/restler/lib/restler');

fs = require('fs');

temp = require('temp');

yml = require('js-yaml');

path = require('path');

_ref = require('child_process'), spawn = _ref.spawn, exec = _ref.exec;

events = require('events');

which = require('which');

config = null;

rootDir = "" + __dirname + "/..";

testingDriver = false;

loadConfig = function(callback) {
  var _this = this;
  return fs.readFile("" + __dirname + "/../config/config.yml", "utf8", function(err, data) {
    config = yml.load(data);
    return typeof callback === "function" ? callback() : void 0;
  });
};

PrintDriver = (function() {

  function PrintDriver() {
    this._killChildProc = __bind(this._killChildProc, this);

    this._initChildProc = __bind(this._initChildProc, this);
    loadConfig(this._initChildProc);
  }

  PrintDriver.prototype._initChildProc = function() {
    var e, python, _i, _len, _ref1, _results;
    if (config.driver.spawn) {
      console.log("\nStarting Driver Child Process");
      console.log("--------------------------------------");
      try {
        which.sync(python = "python2");
      } catch (error) {
        which.sync(python = "python");
      }
      this.proc = spawn(python, ["" + rootDir + "/drivers/printrun/pronsole.py", "--web"], {
        cwd: rootDir
      });
      this.proc.stderr.on('data', this._log);
      this.proc.stdout.on('data', this._log);
      _ref1 = ["uncaughtException", "SIGINT", "SIGTERM"];
      _results = [];
      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
        e = _ref1[_i];
        _results.push(process.on(e, this._killChildProc));
      }
      return _results;
    }
  };

  PrintDriver.prototype._killChildProc = function() {
    this.proc.kill();
    return process.exit();
  };

  PrintDriver.prototype._log = function(data) {
    var line, _i, _len, _ref1, _results;
    _ref1 = data.toString().split("\n");
    _results = [];
    for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
      line = _ref1[_i];
      _results.push(console.log('DRIVER > ' + line));
    }
    return _results;
  };

  PrintDriver.prototype.jog = function(opts, callback) {
    var url;
    url = "http://admin:password@localhost:4311/move/axis/" + opts.axis + "/" + opts.distance + "/" + (opts.speed * 60);
    return rest.get(url).on("success", function(data, res) {
      console.log(data);
      return typeof callback === "function" ? callback() : void 0;
    });
  };

  return PrintDriver;

})();

PrintQueue = (function() {

  function PrintQueue(d) {
    this.driver = driver;
    this.printJobs = [];
  }

  PrintQueue.prototype.add = function(files, callback) {
    var job,
      _this = this;
    if (testingDriver) {
      this.print();
    } else {
      this.printJobs.push(job = new PrintJob(files.path, files.filename));
      job.on("success", function() {
        return _this.print();
      });
    }
    return typeof callback === "function" ? callback() : void 0;
  };

  PrintQueue.prototype.print = function(callback) {
    var data, job, url;
    url = "http://admin:password@localhost:4311/printbutton/";
    if (testingDriver) {
      data = {
        filename: "" + __dirname + "/../uploads/68f8e84aee5b44bc39fe6829615a3678.gcode"
      };
    } else {
      job = this.printJobs.pop();
      data = {
        filename: job.gcodePath
      };
      console.log("printing " + job.filename);
    }
    console.log(data);
    return rest.post(url, {
      data: data
    }).on("success", function(data, res) {
      return typeof callback === "function" ? callback() : void 0;
    });
  };

  return PrintQueue;

})();

PrintJob = (function(_super) {

  __extends(PrintJob, _super);

  function PrintJob(cadPath, filename) {
    var _this = this;
    this.cadPath = cadPath;
    this.filename = filename;
    this._onGCodeProcExit = __bind(this._onGCodeProcExit, this);

    this._onConfigLoad = __bind(this._onConfigLoad, this);

    this.status = "slicing";
    loadConfig(function() {
      return _this._onConfigLoad();
    });
  }

  PrintJob.prototype._onConfigLoad = function() {
    var cmd, extIndex;
    extIndex = this.cadPath.lastIndexOf(path.extname(this.cadPath));
    this.gcodePath = "" + this.cadPath.slice(0, +extIndex + 1 || 9e9) + "gcode";
    cmd = "export P3D_CAD_FILE=\"" + this.cadPath + "\";\nexport P3D_GCODE_FILE=\"" + this.gcodePath + "\";\n" + config.slicer;
    this.gcodeProc = exec(cmd, void 0, {
      cwd: rootDir
    });
    this.gcodeProc.on('exit', this._onGCodeProcExit);
    this.gcodeProc.stderr.on('data', this._logSlicer);
    return this.gcodeProc.stdout.on('data', this._logSlicer);
  };

  PrintJob.prototype._logSlicer = function(data) {
    var line, _i, _len, _ref1, _results;
    _ref1 = data.split("\n");
    _results = [];
    for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
      line = _ref1[_i];
      _results.push(console.log('SLICER > ' + line));
    }
    return _results;
  };

  PrintJob.prototype._onGCodeProcExit = function(slicerExitCode, signal) {
    this.slicerExitCode = slicerExitCode;
    if (this.slicerExitCode === 0) {
      console.log("\n\nGCode Generation Complete");
      this.status = "complete";
      this.emit("success");
    } else {
      console.log("\n\nError Generating GCode");
      this.status = "error";
      this.emit("error");
    }
    return this.emit("complete");
  };

  return PrintJob;

})(events.EventEmitter);

module.exports = {
  driver: (driver = new PrintDriver()),
  queue: new PrintQueue(driver)
};
