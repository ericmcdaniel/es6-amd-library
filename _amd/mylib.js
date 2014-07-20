define(['./components/camelize', './components/capitalize', './components/dasherize', './components/random', './components/slugify', './components/trim'], function($__0,$__2,$__4,$__6,$__8,$__10) {
  "use strict";
  if (!$__0 || !$__0.__esModule)
    $__0 = {'default': $__0};
  if (!$__2 || !$__2.__esModule)
    $__2 = {'default': $__2};
  if (!$__4 || !$__4.__esModule)
    $__4 = {'default': $__4};
  if (!$__6 || !$__6.__esModule)
    $__6 = {'default': $__6};
  if (!$__8 || !$__8.__esModule)
    $__8 = {'default': $__8};
  if (!$__10 || !$__10.__esModule)
    $__10 = {'default': $__10};
  var camelize = $__0.camelize;
  var capitalize = $__2.capitalize;
  var dasherize = $__4.dasherize;
  var random = $__6.random;
  var slugify = $__8.slugify;
  var trim = $__10.trim;
  var mylib = {};
  mylib.VERSION = '1.0.0';
  mylib.camelize = camelize;
  mylib.capitalize = capitalize;
  mylib.dasherize = dasherize;
  mylib.random = random;
  mylib.slugify = slugify;
  mylib.trim = trim;
  var mylib;
  return {
    get mylib() {
      return mylib;
    },
    __esModule: true
  };
});
