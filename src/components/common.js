/* jshint esnext: true */

function escapeRegExp(str) {
  if (str == null) return '';
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

export var common = {
  defaultToWhiteSpace: defaultToWhiteSpace,
  escapeRegExp: escapeRegExp
};