
var watchify = require('watchify');
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

var b =  watchify(browserify({
    entries: './src/index.jsx',
    debug: true,
    extensions: ['.jsx'],
    transform: ['babelify']
}));

gulp.task('default', process);
b.on('update', process);


function process(){

     b.bundle()
    .pipe(source('main.min.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(uglify())
    .on('error', gutil.log)
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./public/js/'));

     gulp.src(["./node_modules/bootstrap/dist/css/bootstrap.min.css","./src/style.css"])
    .pipe(concat('style.min.css'))
    .pipe(uglifycss())
    .pipe(gulp.dest('./public/css/'));    

}
