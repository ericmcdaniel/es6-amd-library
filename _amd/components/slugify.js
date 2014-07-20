define(['./common', './dasherize'], function($__0,$__2) {
  "use strict";
  if (!$__0 || !$__0.__esModule)
    $__0 = {'default': $__0};
  if (!$__2 || !$__2.__esModule)
    $__2 = {'default': $__2};
  var common = $__0.common;
  var dasherize = $__2.dasherize;
  function slugify(str) {
    if (str == null)
      return '';
    var from = 'ąàáäâãåæăćęèéëêìíïîłńòóöôõøśșțùúüûñçżź',
        to = 'aaaaaaaaaceeeeeiiiilnoooooosstuuuunczz',
        regex = new RegExp(common.defaultToWhiteSpace(from), 'g');
    str = String(str).toLowerCase().replace(regex, function(c) {
      var index = from.indexOf(c);
      return to.charAt(index) || '-';
    });
    return dasherize(str.replace(/[^\w\s-]/g, ''));
  }
  return {
    get slugify() {
      return slugify;
    },
    __esModule: true
  };
});
