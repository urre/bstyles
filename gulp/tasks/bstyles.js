import gulp from 'gulp';
import babel from 'gulp-babel';
import concat from 'gulp-concat';
import rename from 'gulp-rename';
import paths from '../config';

gulp.task('bstyles', () => {
  gulp.src([
    paths.scripts.bstyles
  ])
    .on('error', function(err) {
      console.log(err.message);
    })
    .pipe(babel())
    .pipe(rename('index.js'))
    .pipe(gulp.dest(paths.scripts.dist))
});