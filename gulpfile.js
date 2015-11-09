var gulp = require('gulp');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
//var csswring = require('csswring');
var precss = require('precss')({ bubble: ['portfolio'] });


gulp.task('css', function () {
    var processors = [
        autoprefixer({browsers: ['last 2 versions']}),
        precss
        //csswring
    ];
    return gulp.src('./src/**/*.css')
	    .pipe(postcss(processors))
	    .pipe(gulp.dest('./dest'));
});

gulp.task('watch', function () {
	gulp.watch('./src/**/*.css', ['css']);
});

gulp.task('default', ['watch']);