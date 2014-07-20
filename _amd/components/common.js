define([], function() {
  "use strict";
  function escapeRegExp(str) {
    if (str == null)
      return '';
    return String(str).replace(/([.*+?^=!:${}()|[\]\/\\])/g, '\\$1');
  }
  function defaultToWhiteSpace(characters) {
    if (characters == null)
      return '\\s';
    else if (characters.source)
      return characters.source;
    else
      return '[' + escapeRegExp(characters) + ']';
  }
  var common = {
    defaultToWhiteSpace: defaultToWhiteSpace,
    escapeRegExp: escapeRegExp
  };
  return {
    get common() {
      return common;
    },
    __esModule: true
  };
});
