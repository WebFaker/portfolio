// Loading dependancies -------------------------
const gulp = require('gulp');
const sass = require('gulp-sass');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify-es').default;
const browserSync = require('browser-sync').create();
const webpack = require('webpack-stream');
const rename = require('gulp-rename');

// Build tasks ----------------------------------

// ==> HTML -------------------------------------
    // when I write 'gulp html' in the terminal
gulp.task('html', function() {
    // Take the html file
    return gulp.src('src/index.html')
    // put the file in ./public
    .pipe(gulp.dest('public'))
});

// ==> SCSS -------------------------------------
    // when I write 'gulp scss' in the terminal
gulp.task('scss', function() {
    // Take the main scss file
    return gulp.src('src/scss/master.scss')
    // minify the file
    .pipe(sass({
        outputStyle: 'compressed'
    }).on('error', sass.logError))
    // rename the minified file
    .pipe(rename('master.min.css'))
    // put the file in ./public/css
    .pipe(gulp.dest('public/css'))
    // Update the modification in the hist with BS
    .pipe(browserSync.stream());
});

// ==> Scripts ----------------------------------
    // when I write 'gulp scripts' in the terminal
gulp.task('js', function() {
    // take the main js file
    return gulp.src('src/js/app.js')
    // ??
    .pipe(babel())
    // ??
    .pipe(webpack({
        output: {
            filename: 'app.min.js'
        }
    }))
    // uglify the file ( rename var, etc )
    .pipe(uglify())
    // put the file in ./public/js
    .pipe(gulp.dest('public/js'))
    // Update the modification in the hist with BS
    .pipe(browserSync.stream());
});

// ==> Assets -----------------------------------
    // when I write 'gulp assets' in the terminal
gulp.task('assets', function() {
    // Take the assets folder
    return gulp.src('src/assets/**/*')
    // put the file in ./public
    .pipe(gulp.dest('public/assets'))
});

// ==> Build files ------------------------------
gulp.task('build', ['html','scss','js','assets']);

// ==> Watch files ------------------------------
gulp.task('watch', function() {
    gulp.watch('src/**/*.html', ['html']);
    gulp.watch('src/js/**/*.js', ['js']);
    gulp.watch('src/scss/**/*.scss', ['scss']);
    gulp.watch('src/assets', ['assets']);
});

// ==> browserSync ------------------------------
gulp.task('default', ['build', 'watch'], function() {
    browserSync.init({
        server: {
            baseDir: './public'
        }
    });
    gulp.watch("public/*.html").on('change', browserSync.reload);
});