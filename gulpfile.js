const { src, dest, series, parallel } = require("gulp");
const postcss = require("gulp-postcss");
const concat = require("gulp-concat");
const sourcemaps = require("gulp-sourcemaps");
const autoprefixer = require("autoprefixer");
const terser = require("gulp-terser");
const htmlmin = require("gulp-htmlmin");
const del = require("del");
const ghpages = require("gh-pages")

function cleanTask() {
  return(del("./dist"));
}

function fontsTask() {
  return(src("./src/fonts/*"))
    .pipe(dest("./dist/fonts/"));
}

function stylesTask() {
  return(src("./src/css/*.css"))
    .pipe(sourcemaps.init())
    .pipe(postcss([autoprefixer()]))
    .pipe(sourcemaps.write())
    .pipe(concat("all.css"))
    .pipe(dest("./dist/css/"));
}

function htmlTask() {
  return(src("./src/*.html"))
    .pipe(sourcemaps.init())
    .pipe(htmlmin())
    .pipe(sourcemaps.write())
    .pipe(dest("./dist/"));

}

function scriptsTask() {
  return(src("./src/js/*.js"))
    .pipe(sourcemaps.init())
    .pipe(terser())
    .pipe(concat("all.js"))
    .pipe(sourcemaps.write())
    .pipe(dest("./dist/js/"));
}

function deployTask (){
  return ghpages.publish(`dist`)
}


exports.clean = cleanTask;
exports.html = htmlTask;
exports.fonts = fontsTask;
exports.styles = stylesTask;
exports.scripts = scriptsTask;

exports.default = series(cleanTask, htmlTask, parallel(fontsTask, stylesTask, scriptsTask));
exports.deploy = series(cleanTask, htmlTask, parallel(fontsTask, stylesTask, scriptsTask), deployTask); 