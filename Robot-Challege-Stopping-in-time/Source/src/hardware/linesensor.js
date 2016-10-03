var util         = require("util");
var EventEmitter = require("events").EventEmitter;

var constants = require("node-constants")(exports);

constants({
  BOTH_SENSORS_READ_BLACK: 0,
  RIGHT_SENSOR_READS_BLACK: 1,
  LEFT_SENSOR_READS_BLACK: 2,
  NO_SENSOR_READS_BLACK: 3,
  BLACK_VALUE: 0,
  WHITE_VALUE: 1
});

function LineSensor(leftLineSensor, rightLineSensor) {
  EventEmitter.call(this);

  this.leftSensor = leftLineSensor;
  this.rightSensor = rightLineSensor;

  monitorSensor(this, this.leftSensor);
  monitorSensor(this, this.rightSensor);
}
util.inherits(LineSensor, EventEmitter);

Object.defineProperty(LineSensor.prototype, 'value', {
  get: function() { return this.leftSensor.value + this.rightSensor.value*2; }
});

var monitorSensor = function(self, sensor) {
  sensor.on("change", function() {
    self.emit("change");
  });
}

module.exports.init = LineSensor;
