var gulp = require('gulp');
var concat = require('gulp-concat');
var jshint = require('gulp-jshint');

gulp.task('default', function(){
    gulp.src(['js/modules/*.js', 'js/directives/*.js'])
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(jshint.reporter('fail'))
        .pipe(concat('dblist.js'))
        .pipe(gulp.dest('dist'));
});
