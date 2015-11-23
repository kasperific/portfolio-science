var gulp = require('gulp');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var precss = require('precss');
var lost = require('lost');
var bem = require('postcss-bem');
var verticalRhythm = require('postcss-vertical-rhythm');
var modularScale = require('postcss-modular-scale');
var csswring = require('csswring');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

gulp.task('css', function () {
    var processors = [
        precss,
        lost,
        bem({style: 'bem'}),
        verticalRhythm,
        modularScale,
        autoprefixer({browsers: ['last 2 versions']}),
        csswring
    ];
    return gulp.src('./src/**/*.css')
	    .pipe(postcss(processors))
	    .pipe(gulp.dest('./dest'));
});

gulp.task('js', function() {
  gulp.src('./src/**/*.js')
    .pipe( concat('output.min.js') ) // concat pulls all our files together before minifying them
    .pipe(uglify())
    .pipe(gulp.dest('dest/js'));
});

gulp.task('watch', function () {
	gulp.watch('./src/**/*.css', ['css']);
	gulp.watch('./src/**/*.js', ['js']);
});

gulp.task('default', ['watch']);