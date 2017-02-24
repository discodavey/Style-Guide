var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	sass = require('gulp-ruby-sass')

// Javascript Task
gulp.task('scripts', function() {
  return gulp.src('assets/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('assets/build/js'));
});

// Sass Task
gulp.task('styles', function() {
    return sass('assets/scss/screen.scss', { style: 'compact' })
        .pipe(gulp.dest('assets/build/css'));
});


gulp.task('watch', function(){
	gulp.watch('assets/js/*.js', ['scripts']);
	gulp.watch('assets/scss/*.scss', ['styles']);
});

gulp.task('default', ['scripts', 'styles', 'watch']);