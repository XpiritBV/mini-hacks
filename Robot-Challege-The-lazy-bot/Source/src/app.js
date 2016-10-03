var five = require("johnny-five");
var pixel = require("node-pixel");

var mbot = require("./hardware/mbotlayout");

var Robot = require("./robot").init;
var LineSensor = require("./hardware/linesensor").init;

var StartButton = require("./modules/startbutton").init;
var LineFollower = require("./modules/linefollower").init;
var HeadLights = require("./modules/headlights").init;
var FinishHandler = require("./modules/finishhandler").init;

var board = new five.Board({
  port: process.argv[2],
  debug: true,
  repl: true
});

board.on("ready", function() {
  var robot = new Robot();
  var ledStrip = getLedStrip();
  initStartButtonFeature(robot);
  initLineFollowerFeature(robot);
  initLightFeature(robot, ledStrip);
  initFinishHandlerFeature(robot, ledStrip);
  initRobotMotorParts(robot); // To be initiated last, seems like mBot bug
});

board.on("error", function() {
  process.exit(1);
});

var getLedStrip = function() {
  var mbotLedsStrip = mbot.LEDS;
  mbotLedsStrip.board = board;
  var leds = new pixel.Strip(mbotLedsStrip);
  return leds;
};

var initStartButtonFeature = function(robot) {
  var button = new five.Pin(mbot.BUTTON);
  (new StartButton(robot, button)).activate();
};

var initLineFollowerFeature = function(robot) {
  var leftLineSensor = new five.Pin(mbot.LEFT_LINE_SENSOR);
  var rightLineSensor = new five.Pin(mbot.RIGHT_LINE_SENSOR);
  var lineSensor = new LineSensor(leftLineSensor, rightLineSensor);
  (new LineFollower(robot, lineSensor)).activate();
};

var initLightFeature = function(robot, ledStrip){
  var lightSensor = new five.Sensor(mbot.LIGHT_SENSOR);
  (new HeadLights(robot, lightSensor, ledStrip)).activate();
};

var initFinishHandlerFeature = function(robot, ledStrip) {
  var proximitySensor = new five.Proximity(mbot.PROXIMITY_SENSOR);
  (new FinishHandler(robot, proximitySensor, ledStrip)).activate();
};

var initRobotMotorParts = function(robot) {
  var leftMotor = new five.Motor(mbot.LEFT_MOTOR);
  var rightMotor = new five.Motor(mbot.RIGHT_MOTOR);
  robot.activateWithMotors(leftMotor, rightMotor);
};
