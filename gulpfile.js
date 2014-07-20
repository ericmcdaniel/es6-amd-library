var gulp = require('gulp');
var rjs = require('requirejs');
var shell = require('gulp-shell');

gulp.task('amd', shell.task([
  'mkdir -p _amd && ./node_modules/.bin/traceur --dir src _amd --modules=amd'
]));

gulp.task('requirejs', function() {
  setTimeout( function () {
    rjs.optimize({
      // All paths will be relative to this baseUrl.
      baseUrl: '_amd',
      // Tells r.js that you want everything in one file.
      out: 'dist/mylib.js',
      // Set paths for modules (shortcut alias for "include").
      paths: {
        almond: '../bower_components/almond/almond'
      },
      // Include "almond" and "mylib" into the final file
      // specified in "out" property.
      include: ['../node_modules/traceur/bin/traceur-runtime', 'almond', 'mylib'],
      // Wrapper for AMD, CommonJS and Browser compatibility.
      wrap: {
        startFile: 'src/_start.js',
        endFile: 'src/_end.js'
      },
      // Minify the file.
      optimize: 'uglify2',
      // Strip comments.
      preserveLicenseComments: false,
      // Add source maps for the original modules.
      generateSourceMaps: true
    });
  }, 1000);
});

gulp.task('watch', function() {
  gulp.watch('src/**/*.js', ['requirejs']);
});

gulp.task('default', ['amd', 'requirejs']);
