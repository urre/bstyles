import gulp from 'gulp';
import paths from '../config';

gulp.task('default', ['css', 'js', 'browsersync'], () => {
  gulp.watch([paths.css.src], ['css'], ['bs-reload']);
  gulp.watch([paths.scripts.src], ['js'], ['bs-reload']);
  gulp.watch([paths.html.src], ['bs-reload']);
});