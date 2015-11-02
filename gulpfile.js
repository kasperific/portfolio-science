var gulp = require('gulp');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var mqpacker = require('css-mqpacker');
var csswring = require('csswring');
var nested = require('postcss-nested');
var scss = require('postcss-scss');

gulp.task('default', function() {
	var processors = [nested];
    return gulp.src('in.css')
        .pipe(postcss(processors, {syntax: scss}))
        .pipe(gulp.dest('out'));
});


gulp.task('css', function () {
    var processors = [
        autoprefixer({browsers: ['last 1 version']}),
        mqpacker,
        csswring
    ];
    return gulp.src('./src/*.css')
	    .pipe(sourcemaps.init())
	    .pipe(postcss(processors))
	    .pipe(sourcemaps.write('.'))
	    .pipe(gulp.dest('./dest'));
});