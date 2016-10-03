const MAX_SPEED = 100;
const MANOUVRE_SPEED_FACTOR = 0.8;
const ACCOUNT_FOR_MIRROR_MOTOR = -1;

function Robot() {
  this.isActive = false;
  this.hasFinished = false;
  this.speed = MAX_SPEED;
}

Robot.prototype.activateWithMotors = function(leftMotor, rightMotor) {
  this.leftMotor = leftMotor;
  this.rightMotor = rightMotor;
};

Robot.prototype.start = function() {
  if (!this.hasFinished) {
    console.log("Start");
    this.isActive = true;
    this.goStraight();
  }
};

Robot.prototype.goStraight = function() {
  if (this.isActive) {
    console.log("Go Straight");
    this.setMotorSpeed(this.speed, this.speed);
  }
};

Robot.prototype.swerveRight = function() {
  if (this.isActive) {
    console.log("Swerve Right");
    var adjustedSpeed = this.speed*MANOUVRE_SPEED_FACTOR;
    this.setMotorSpeed(adjustedSpeed, 0);
  }
};

Robot.prototype.swerveLeft = function() {
  if (this.isActive) {
    console.log("Swerve Left");
    var adjustedSpeed = this.speed*MANOUVRE_SPEED_FACTOR;
    this.setMotorSpeed(0, adjustedSpeed);
  }
};

Robot.prototype.reverseDirection = function() {
  console.log("Go Back");
  if (this.isActive) {
    var adjustedSpeed = this.speed*MANOUVRE_SPEED_FACTOR*-1;
    this.setMotorSpeed(adjustedSpeed, adjustedSpeed);
  }
};

Robot.prototype.stop = function() {
  console.log("Stop");
  this.isActive = false;
  this.setMotorSpeed(0,0);
};

Robot.prototype.setMotorSpeed = function(leftSpeed, rightSpeed) {
  activateMotor(this, "left", leftSpeed * ACCOUNT_FOR_MIRROR_MOTOR);
  activateMotor(this, "right", rightSpeed);
};

var activateMotor = function(self, side, speed) {
  var motor = self[side+"Motor"];
  if (speed == 0) {
    motor.stop();
  } else if (speed > 0) {
    motor.forward(speed);
  } else {
    motor.reverse(speed * -1);
  }
};

module.exports.init = Robot;
