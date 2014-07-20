/* jshint esnext: true */

import {common} from './common';

export function trim(str, characters) {
    if (str == null) return '';
    if (!characters && String.prototype.trim) return String.prototype.trim.call(str);
    characters = common.defaultToWhiteSpace(characters);
    return String(str).replace(new RegExp('\^' + characters + '+|' + characters + '+$', 'g'), '');
  }