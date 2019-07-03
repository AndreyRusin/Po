const { src, dest, series, parallel } = require("gulp");
const $ = require("gulp-load-plugins")();

function html() {
  return src("./src/*.html")
    .pipe($.htmlmin({ collapseWhitespace: true }))
    .pipe(dest("./dist/"));
}

function images() {
  return src("./src/img/*")
    .pipe($.imagemin())
    .pipe(dest("./dist/img"));
}

function transpile() {
  return src("./src/**/*.js")
    .pipe($.plumber())
    .pipe($.sourcemaps.init())
    .pipe($.babel())
    .pipe($.sourcemaps.write())
    .pipe($.concat("main.js"))
    .pipe(dest("./dist"));
}

function sass_f() {
  return src("./src/*.scss")
    .pipe($.plumber())
    .pipe($.sass())
    .pipe($.autoprefixer())
    .pipe($.cssnano())
    .pipe(dest("./dist/"));
}

exports.default = series(html, sass_f, images, transpile);
