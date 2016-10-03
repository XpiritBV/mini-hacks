var isDisabled = true;

function StartButton(robot, startButton){
  this._robot = robot;
  this.button = startButton;
  disableButton(1000);
};

StartButton.prototype.activate = function() {
  var robot = this._robot;
  this.button.on("change", function() {
    if (isDisabled) return;
    if (!robot.isActive) {
      robot.start();
    } else {
      robot.stop();
    }
    disableButton(2000);
  });
};

var disableButton = function(miliseconds) {
  isDisabled = true;
  setTimeout(function() { isDisabled = false; }, miliseconds);
};

module.exports.init = StartButton;
