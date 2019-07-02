const { src, dest, series, parallel } = require("gulp");
const sass = require("gulp-sass");
const cssnano = require("gulp-cssnano");
const htmlmin = require("gulp-htmlmin");

function html() {
  return src("./src/*.html")
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(dest("./dist/"));
}

function sass_f() {
  return src("./src/*.scss")
    .pipe(sass())
    .pipe(cssnano())
    .pipe(dest("./dist/"));
}

exports.default = parallel(html, sass_f);

//I remember that gulp is based on streams and doesn't supports syncronous tasks
