const {dest} = require("gulp");

function fontsTask() {
  return("./src/fonts/*")
  .pipe(dest("./dist/fonts/"))
}

function stylesTask() {
  return("./src/css/*.css")
  .pipe(dest("./dist/css/"))
}

function HTMLTask() {
  return("./src/*.html")
  .pipe(dest("./dist/"))
}

function scriptsTask() {
  return("./src/js/*.js")
  .pipe(dest("./dist/js/"))
}

function main() {

}

