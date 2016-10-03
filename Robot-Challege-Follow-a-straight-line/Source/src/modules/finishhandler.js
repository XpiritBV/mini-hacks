const FINISH_OBSTACLE_DISTANCE = 4;
const MEASUREMENT_UNIT = "inches";

function FinishHandler(robot, proximitySensor, leds) {
  this.robot = robot;
  this.leds = leds;
  this.proximitySensor = proximitySensor;
};

FinishHandler.prototype.activate = function() {
  var self = this;
  this.proximitySensor.on("change", function() {
    determineIfFinishReached(self, this.MEASUREMENT_UNIT);
  });
};

var determineIfFinishReached = function(self, value) {
  if (value <= FINISH_OBSTACLE_DISTANCE && self.robot.isActive) {
    self.robot.stop();
    self.robot.hasFinished = true;
    celebrate(self);
  }
};

var celebrate = function(self) {
  var fps = 10;

  console.log("FINISH!");

  var colors = ["red", "green", "blue", "yellow", "cyan", "magenta", "white"];
  var current_colors = [0,1,2,3,4];
  var current_pos = [0,1,2,3,4];
  var blinker = setInterval(function() {

    self.leds.color("#000"); // blanks it out

    for (var i=0; i< current_pos.length; i++) {
      if (++current_pos[i] >= self.leds.stripLength()) {
        current_pos[i] = 0;
        if (++current_colors[i] >= colors.length) current_colors[i] = 0;
      }
      self.leds.pixel(current_pos[i]).color(colors[current_colors[i]]);
    }

    self.leds.show();
  }, 1000/fps);
};

module.exports.init = FinishHandler;