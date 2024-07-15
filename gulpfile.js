const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();


//compile scss into css

function style(){
    // 1. where is my scss file
    return gulp.src('./styles/**/*.scss')
    // 2. pass that file through sass compiler
        .pipe(sass())
    // 3. where do Isave compiled CSS?
        .pipe(gulp.dest('./styles/css'))
}

exports.style = style;