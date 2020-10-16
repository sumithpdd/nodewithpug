var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var pug = require('gulp-pug');
// run this task by typing in gulp pug in CLI
// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "build/"
        }
    });
});


// HTML
gulp.task('html', function() {
    gulp.src('src/pug/*.pug')
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest('build/'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

// Watch
gulp.task('watch', function() {
    gulp.watch('src/pug/*.pug', gulp.series('html'));

});


// Default
gulp.task('default', gulp.series('html'));