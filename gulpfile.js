var gulp = require('gulp');
var gulpPostcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var postcssNestedProps = require('postcss-nested-props');

gulp.task('postcss', function() {
  var processors = [
    postcssNestedProps,
    autoprefixer
  ];
  return gulp.src('./src/*.css')
    .pipe(gulpPostcss(processors))
    .pipe(gulp.dest('./dist/css'))
  ;
});

gulp.task('default', ['postcss']);
