define(['./trim'], function($__0) {
  "use strict";
  if (!$__0 || !$__0.__esModule)
    $__0 = {'default': $__0};
  var trim = $__0.trim;
  function dasherize(str) {
    return trim(str).replace(/([A-Z])/g, '-$1').replace(/[-_\s]+/g, '-').toLowerCase();
  }
  return {
    get dasherize() {
      return dasherize;
    },
    __esModule: true
  };
});
