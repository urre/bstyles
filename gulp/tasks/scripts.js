import gulp from 'gulp';
import babel from 'gulp-babel';
import concat from 'gulp-concat';
import paths from '../config';

gulp.task('js', () => {
  gulp.src([
    paths.scripts.src
  ])
    .on('error', function(err) {
      console.log(err.message);
    })
    .pipe(concat('main.js'))
    .pipe(babel())
    .pipe(gulp.dest(paths.scripts.dist))
});