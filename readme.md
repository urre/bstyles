
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

+ Browsersync
+ Gulp
+ CSS Next
+ Post CSS
+ StyleLint
+ Hero patterns
+ Having fun with some responsive type