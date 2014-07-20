define(['./common'], function($__0) {
  "use strict";
  if (!$__0 || !$__0.__esModule)
    $__0 = {'default': $__0};
  var common = $__0.common;
  function trim(str, characters) {
    if (str == null)
      return '';
    if (!characters && String.prototype.trim)
      return String.prototype.trim.call(str);
    characters = common.defaultToWhiteSpace(characters);
    return String(str).replace(new RegExp('\^' + characters + '+|' + characters + '+$', 'g'), '');
  }
  return {
    get trim() {
      return trim;
    },
    __esModule: true
  };
});
