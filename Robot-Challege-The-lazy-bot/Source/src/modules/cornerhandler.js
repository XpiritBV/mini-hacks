var LineFollower = require("./linefollower");

const TURN_LEFT_FIRST = ["left", "right"];
const TURN_RIGHT_FIRST = ["right", "left"];

const ROTATION_SPEED_WEIGHT = 700;
const CORNER_SPEED_FACTOR = 0.8;

var lineIsFound = false;
var directions = TURN_LEFT_FIRST;
var turnTimer;

module.exports = {
  lookBothWays: function(lineFollower, robot) {
    lineIsFound = false;
    lineFollower.isOnSharpCorner = true;
    determineTurnDirectionOrder(lineFollower.mostRecentTurnDirection);
    turnSequence(lineFollower, robot, 1);
  },
  foundLine: function(robot) {
    lineIsFound = true;
    clearTimeout(turnTimer);
    restartRobot(robot);
  }
};

var determineTurnDirectionOrder = function(directionPreference) {
  if (directionPreference == LineFollower.LEFT_TURN
      || (directionPreference == LineFollower.NO_TURN_MADE
          && Math.random() < 0.5)) {
    directions = TURN_LEFT_FIRST;
  } else {
    directions = TURN_RIGHT_FIRST;
  }
};

var turnSequence = function(lineFollower, robot, iteration) {
  robot.stop();
  if (!lineIsFound && iteration <= 2) {
    turnToDirection(lineFollower, robot, iteration);
  } else {
    restartRobot(robot);
  }
};

var turnToDirection = function(lineFollower, robot, iteration) {
  var degrees = degreesFromTurnDirection(iteration);
  var direction = (degrees > 0) ? LineFollower.RIGHT_TURN : LineFollower.LEFT_TURN;
  lineFollower.mostRecentTurnDirection = direction;
  performTurn(robot, direction);
  turnTimer = setTimeout(function(){ turnSequence(lineFollower, robot, ++iteration); },
                Math.abs(degrees) * (ROTATION_SPEED_WEIGHT/robot.speed));
};

var degreesFromTurnDirection = function(turnSequenceNumber) {
  var direction = directions[turnSequenceNumber-1];
  console.log("Turn "+ direction);
  var degrees = (direction == "right") ? 90 : -90;
  return degrees * turnSequenceNumber;
};

var performTurn = function(robot, direction) {
  robot.speed = robot.speed*direction*CORNER_SPEED_FACTOR;
  robot.setMotorSpeed(robot.speed, (robot.speed * -1));
};

var restartRobot = function(robot) {
  robot.start();
  if (!lineIsFound) {
    robot.reverseDirection();
  }
};
