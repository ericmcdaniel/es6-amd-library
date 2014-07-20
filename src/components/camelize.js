/* jshint esnext: true */

import {trim} from './trim';

export function camelize(str) {
  return trim(str).replace(/[-_\s]+(.)?/g, function(match, c) { return c ? c.toUpperCase() : ''; });
}