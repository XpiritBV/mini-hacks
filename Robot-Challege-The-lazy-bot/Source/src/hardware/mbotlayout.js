var components = require("node-constants")(exports);

components({
  RIGHT_MOTOR: { pins: { pwm: 5, dir: 4 } },
  LEFT_MOTOR: { pins: { pwm: 6, dir: 7 } },

  LEFT_LINE_SENSOR: { pin: 9, mode: 0 },
  RIGHT_LINE_SENSOR: { pin: 10, mode: 0 },

  BUTTON: { pin: "A7", mode: 0 },

  LIGHT_SENSOR: {pin: "A6", mode:0},

  LEDS: {
    strips: [{pin: 13, length: 2}],
    controller: "FIRMATA"
  },

  PROXIMITY_SENSOR: {
    controller: "HCSR04",
    pin: "A3"
  }
});
