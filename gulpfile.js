var gulp = require('gulp');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var precss = require('precss');
var lost = require('lost');
var bem = require('postcss-bem');
var verticalRhythm = require('postcss-vertical-rhythm');
var modularScale = require('postcss-modular-scale');
var csswring = require('csswring');

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

gulp.task('watch', function () {
	gulp.watch('./src/**/*.css', ['css']);
});

gulp.task('default', ['watch']);