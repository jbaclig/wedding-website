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
var path = require('path');
var gulp = require('gulp');
var wrap = require('gulp-wrap');
var declare = require('gulp-declare');
var concat = require('gulp-concat');
var merge = require('merge-stream');
var handlebars = require('gulp-handlebars');
var pump = require('pump');

gulp.task('uglify-error-debugging', function (cb) {
  pump([
    gulp.src('src/**/*.js'),
    uglify(),
    gulp.dest('./dist/')
  ], cb);
});

gulp.task('templates', function() {
  // Assume all partials start with an underscore
  // You could also put them in a folder such as source/templates/partials/*.hbs
  var partials = gulp.src(['src/templates/_*.hbs'])
    .pipe(handlebars())
    .pipe(wrap('Handlebars.registerPartial(<%= processPartialName(file.relative) %>, Handlebars.template(<%= contents %>));', {}, {
      imports: {
        processPartialName: function(fileName) {
          // Strip the extension and the underscore
          // Escape the output with JSON.stringify
          return JSON.stringify(path.basename(fileName, '.js').substr(1));
        }
      }
    }));

  var templates = gulp.src('src/templates/**/[^_]*.hbs')
    .pipe(handlebars())
    .pipe(wrap('Handlebars.template(<%= contents %>)'))
    .pipe(declare({
      namespace: 'MyApp.templates',
      noRedeclare: true // Avoid duplicate declarations
    }));

  // Output both the partials and the templates as build/js/templates.js
  return merge(partials, templates)
    .pipe(concat('templates.js'))
    .pipe(gulp.dest('src/js/'));
});

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

gulp.task('watch',['browserSync', 'sass', 'templates'], () => {
    gulp.watch('src/scss/**/*.scss', ['sass']);
    gulp.watch('src/templates/**/*.hbs', ['templates']);
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
        ['sass', 'templates', 'images', 'fonts'],
        'useref',
        callback
    );
});

gulp.task('default', (callback) => {
    runSequence(['sass', 'templates', 'browserSync', 'watch'],
        callback
    );
});
