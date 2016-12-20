import browserSync from 'browser-sync';
import paths from '../config';
import plumber from 'gulp-plumber';
import gulp from 'gulp';
const reload = browserSync.reload;
import postcss from 'gulp-postcss';
import gulpStylelint from 'gulp-stylelint';

gulp.task('css', () => {

  return gulp.src(paths.css.main)
    .pipe(plumber())
    .pipe(gulpStylelint({
      failAfterError: true,
      reportOutputDir: 'reports/lint',
      reporters: [
        {
          formatter: 'verbose',
          console: true
        },
        {
          formatter: 'json',
          save: 'report.json'
        }
      ],
      debug: true
    }))
    .pipe(postcss([
      require("postcss-import")(),
      require("postcss-url")(),
      require("postcss-cssnext")(),
      require("cssnano")({
        autoprefixer: false
      }),
      require("postcss-browser-reporter")(),
      require("postcss-reporter")(),
    ]))
    .pipe(gulp.dest(paths.css.dist))
    .pipe(reload({
      stream: true,
      once: true
    }))
});