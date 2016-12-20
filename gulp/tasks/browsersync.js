import gulp from 'gulp';
import browserSync from 'browser-sync';
import paths from '../config';
import bstyles from '../../src/js/bstyles';
const reload = browserSync.reload;

gulp.task('browsersync', () => {
  browserSync.init([
    paths.css.src,
    paths.scripts.src,
    paths.html.src
  ],
    {
      server: {
        baseDir: "./"
      },
      open: false,
      notify: true,
      notify: {
        styles: bstyles.TopLeft
      }
    });
});

gulp.task('bs-reload', () => {
  browserSync.reload();
});