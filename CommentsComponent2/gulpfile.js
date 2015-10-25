 
var browserify = require('browserify');
var babelify = require('babelify');

var gulp = require('gulp');
var concat = require('gulp-concat');
var uglifycss = require('gulp-uglifycss');

var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var gutil = require('gulp-util');

gulp.task('default', function () {
  
  // Arquivos Javascripts
  browserify({
    entries: './src/index.jsx',
    debug: true,
    extensions: ['.jsx'],
    transform: ['babelify']
  }).bundle()
    .pipe(source('main.min.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(uglify())
    .on('error', gutil.log)
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./public/js/'));

    //Arquivo CSSs
    gulp.src(["./node_modules/bootstrap/dist/css/bootstrap.min.css","./src/style.css"])
        .pipe(concat('style.css'))
        .pipe(uglifycss())
        .pipe(gulp.dest('./public/css/'));
     

});