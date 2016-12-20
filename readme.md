
# Bstyles

Friendly look and feel for [browsersync.notify](https://www.browsersync.io/)

## Getting Started

    npm i bstyles

### Import the styles in your BrowserSync configuration

Example:

    import gulp from 'gulp';
    import browserSync from 'browser-sync';
    import paths from '../config';
    import bstyles from 'bstyles';
    const reload = browserSync.reload;

    gulp.task('browser-sync', () => {
      browserSync.init([
        paths.css.src,
        paths.scripts.src,
        paths.html.src
      ],
        {
          server: {
            baseDir: "./"
          },
          notify: true,
          notify: {
            styles: bstyles.Simple
          }
        });
    });

    gulp.task('bs-reload', () => {
      browserSync.reload();
    });

## Tools used to build the demo site

+ CSS Next
+ Post CSS
+ Browsersync
+ Gulp with ES6
+ StyleLint
+ Hero patterns
+ Having fun with some responsive type