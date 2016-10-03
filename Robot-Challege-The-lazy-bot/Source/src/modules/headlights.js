var lightIsDisabled = true;
var ledIsDisabled = false;
var restartRobot = false;

const TURN_LIGHT_ON_VALUE = 700;
const LED_COLOR = "#ffffff";

function HeadLights(robot, lightsensor, leds){
  this.robot = robot;
  this.lightSensor = lightsensor;
  this.leds = leds;
  sensorWait(5000);
};

HeadLights.prototype.activate = function(){
  var self = this;
  this.lightSensor.on("change", function(){
    if (lightIsDisabled) return;
    determineDarkness(self, this.value);
    sensorWait(500);
  })
};

var determineDarkness = function(self, value){
  if (value <= TURN_LIGHT_ON_VALUE && self.robot.isActive) {
    turnLightsOn(self);
  } else if ((ledIsDisabled || restartRobot) && !self.robot.isActive) {
    setTimeout(function() {
      self.robot.start();
      restartRobot = false;
    }, 500);
  }
};

var turnLightsOn = function (self) {
  self.robot.stop();
  console.log("Turn lights on");
  self.leds.color(LED_COLOR);
  self.leds.show();
  ledWait(self, 4000);
}

var turnLightsOff = function (self) {
  self.robot.stop();
  console.log("Turn lights off");
  self.leds.color("#000");
  self.leds.show();
  restartRobot = true;
}

var ledWait = function(self, miliseconds) {
    ledIsDisabled = true;
    setTimeout(function() {
      ledIsDisabled = false;
      turnLightsOff(self);
    }, miliseconds);
};

var sensorWait = function(miliseconds) {
    lightIsDisabled = true;
    setTimeout(function() { lightIsDisabled = false; }, miliseconds);
};

module.exports.init = HeadLights;