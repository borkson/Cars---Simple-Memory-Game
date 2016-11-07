var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var livereload = require('gulp-livereload');

gulp.task('zadanie1', function() {
    return gulp.src('scss/*.scss')
        .pipe(gulpPlugin())
        .pipe(gulp.dest('public_html/'))
});

gulp.task('sass', function() {
    return gulp.src('scss/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'expanded'
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('css/'))
        .pipe(livereload())
});

gulp.task('default', ['sass'], function() {
    livereload.listen()
    gulp.watch('scss/**/*.scss', ['sass'])
});
