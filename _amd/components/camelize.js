define(['./trim'], function($__0) {
  "use strict";
  if (!$__0 || !$__0.__esModule)
    $__0 = {'default': $__0};
  var trim = $__0.trim;
  function camelize(str) {
    return trim(str).replace(/[-_\s]+(.)?/g, function(match, c) {
      return c ? c.toUpperCase() : '';
    });
  }
  return {
    get camelize() {
      return camelize;
    },
    __esModule: true
  };
});
