var gulp = require('gulp');
var concat = require('gulp-concat');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');

gulp.task('default', ['build']);

gulp.task('build', function(){
    gulp.src(['./js/modules/*.js', './js/directives/*.js'])
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(jshint.reporter('fail'))
        .pipe(concat('dblist.js'))
        .pipe(gulp.dest('dist'))
        .pipe(concat('dblist.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

