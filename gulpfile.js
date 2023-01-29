const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function buildStyles() {
  return src('style/index.sass').pipe(sass()).pipe(dest('dist/style'));
}

function watchTask() {
  watch(['style/index.sass'], buildStyles);
}

exports.default = series(buildStyles, watchTask);
