const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const prefix = require('gulp-autoprefixer');
const minify_scss = require('gulp-clean-css');
const rename = require('gulp-rename');
const minify_js = require('gulp-minify');


// compile css once 
gulp.task('compilescss', function() {
    gulp.src('./src/css/*.scss')
        .pipe(sass())
        .pipe(prefix())
        .pipe(minify_scss())
        .pipe(rename(function (path) {
            return {
            dirname: path.dirname + "",
            basename: path.basename + ".min",
            extname: ".css"
            };
        }))
        .pipe(gulp.dest('./static/css'))
});

// compile js once
gulp.task('compress', function() {
  gulp.src('./src/js/*.js')
    .pipe(minify_js())
    .pipe(gulp.dest('./static/js'))
});

// watch and compile
async function compilescss () {
    gulp.src('./src/css/*.scss')
    .pipe(sass())
    .pipe(prefix())
    .pipe(minify())
    .pipe(rename(function (path) {
        return {
        dirname: path.dirname + "",
        basename: path.basename + ".min",
        extname: ".css"
        };
    }))
    .pipe(gulp.dest('./static/css'))
};

async function compress () {

    gulp.src('./src/js/*.js')
    .pipe(minify_js())
    .pipe(gulp.dest('./static/js'))

}


gulp.task('watch',function(){
    gulp.watch('./src/css/*.scss', compilescss);

    gulp.watch('./src/js/*.js', compress);
});



