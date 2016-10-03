var constants = require("node-constants")(exports);

var LineSensor = require("../hardware/linesensor");
var cornerhandler = require("./cornerhandler");

var turnTypes = constants({
  NO_TURN_MADE: 0,
  RIGHT_TURN: 1,
  LEFT_TURN: -1
});

function LineFollower(robot, lineSensor){
  this._robot = robot;
  this.lineSensor = lineSensor;
  this.isOnSharpCorner = false;
  this.mostRecentTurnDirection = turnTypes.NO_TURN_MADE;
};

LineFollower.prototype.activate = function() {
  var self = this;
  this.lineSensor.on("change", function() {
    lineSensorReportsValue(self, self._robot, this.value);
  });
};

var lineSensorReportsValue = function(self, robot, value) {
  switch(value) {
    case LineSensor.LEFT_SENSOR_READS_BLACK:
      self.mostRecentTurnDirection = turnTypes.LEFT_TURN;
      robot.swerveLeft();
      break;

    case LineSensor.RIGHT_SENSOR_READS_BLACK:
      self.mostRecentTurnDirection = turnTypes.RIGHT_TURN;
      robot.swerveRight();
      break;

    case LineSensor.NO_SENSOR_READS_BLACK:
      self.isOnSharpCorner = true;
      cornerhandler.lookBothWays(self, robot);
      break;

    case LineSensor.BOTH_SENSORS_READ_BLACK:
    default:
      if (self.isOnSharpCorner) {
        robot.stop();
        self.isOnSharpCorner = false;
        cornerhandler.foundLine(robot);
      } else {
        robot.goStraight();
      }

  }
};

module.exports.init = LineFollower;
