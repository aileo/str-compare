
var gulp = require('gulp'),
    gjslint = require('gulp-gjslint');
    mocha = require('gulp-mocha'),
    runSequence = require('run-sequence');

var gjslinterOptions = {
    flags: ['--max_line_length 80', '--nojsdoc']
};

var paths = {
  linted: [
    './*.js',
    './src/*.js'
  ]
};

gulp.task('default', function(done) {
  runSequence('lint', 'test', done);
});

// Lint files and output results to the console
gulp.task('lint', function(done) {
  return gulp.src(paths.linted)
    .pipe(gjslint(gjslinterOptions))
    .pipe(gjslint.reporter('console'));
});

gulp.task('test', function(done) {
  gulp.src('./tests/tests.js', {read: false})
    .pipe(mocha({reporter: 'spec'}))
    .once('end', function() {
      done();
    });
});
