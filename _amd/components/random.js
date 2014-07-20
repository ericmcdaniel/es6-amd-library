define([], function() {
  "use strict";
  function random(min, max) {
    if (max == null) {
      max = min;
      min = 0;
    }
    return min + Math.floor(Math.random() * (max - min + 1));
  }
  return {
    get random() {
      return random;
    },
    __esModule: true
  };
});
