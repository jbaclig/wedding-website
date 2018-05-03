var gulp = require('gulp');
var sass = require ('gulp-sass');
var browserSync = require('browser-sync').create();
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var cssnano = require('gulp-cssnano');
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');
var del = require('del');
var runSequence = require('run-sequence');

gulp.task('browserSync', () => {
    browserSync.init({
        server: {
            baseDir: 'src'
        },
    });
});

gulp.task('sass', () => {
    return gulp.src('src/scss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('src/css'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('watch',['browserSync', 'sass'], () => {
    gulp.watch('src/scss/**/*.scss', ['sass']);
    gulp.watch('src/js/**/*.js', browserSync.reload);
    gulp.watch('src/*.html', browserSync.reload);
});

gulp.task('useref', () => {
    return(gulp.src('src/*.html'))
        .pipe(useref())
        .pipe(gulpIf('*.js', uglify()))
        .pipe(gulpIf('*.css', cssnano()))
        .pipe(gulp.dest('.'));
});

gulp.task('images', () => {
    return gulp.src('src/img/**/*.+(png|jpg|gif|svg)')
        .pipe(cache(imagemin({
            interlaced: true
        })))
        .pipe(gulp.dest('dist/img'));
});

gulp.task('fonts', () => {
    return gulp.src('src/fonts/**/*')
        .pipe(gulp.dest('dist/fonts'));
});

gulp.task('clean:dist', () => {
    return del.sync('dist')
});

gulp.task('cache:clear', (callback) => {
    return cache.clearAll(callback);
});

gulp.task('build', (callback) => {
    runSequence('clean:dist',
        ['sass', 'images', 'fonts'],
        'useref',
        callback
    );
});

gulp.task('default', (callback) => {
    runSequence(['sass', 'browserSync', 'watch'],
        callback
    );
});
