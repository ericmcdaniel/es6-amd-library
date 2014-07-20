/* jshint esnext: true */
import {camelize} from './components/camelize';
import {capitalize} from './components/capitalize';
import {dasherize} from './components/dasherize';
import {random} from './components/random';
import {slugify} from './components/slugify';
import {trim} from './components/trim';

// Library Container
var mylib = {};

// Properties
mylib.VERSION = '1.0.0';

// Methods
mylib.camelize = camelize;
mylib.capitalize = capitalize;
mylib.dasherize = dasherize;
mylib.random = random;
mylib.slugify = slugify;
mylib.trim = trim;

export var mylib;