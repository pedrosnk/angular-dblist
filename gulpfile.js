var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('default', function(){
    gulp.src(['js/modules/*.js', 'js/directives/*.js'])
        .pipe(concat('dblist.js'))
        .pipe(gulp.dest('dist'));
});
