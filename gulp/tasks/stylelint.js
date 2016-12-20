import browserSync from 'browser-sync';
import paths from '../config';
import plumber from 'gulp-plumber';
import gulp from 'gulp';
import postcss from 'gulp-postcss';
import gulpStylelint from 'gulp-stylelint';

gulp.task('stylelint', () => {

  return gulp.src(paths.css.main)
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
});