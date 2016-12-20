
# Bstyles

[![Build Status](https://travis-ci.org/urre/bstyles.svg?branch=master)](https://travis-ci.org/urre/bstyles)

Friendly look and feel for [browsersync.notify](https://www.browsersync.io/)

## Getting Started

    npm i bstyles

### Import the styles in your BrowserSync configuration

#### Available styles
+ top - 100% width top banner, green background
+ topLeft - Subtle green text, transparent background
+ bottomLeft - Small circular badge. White text with grey background
+ bottomRight - Subtle grey text, transparent background

Example:

```javascript
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
        styles: bstyles.bottomRight
      }
    });
});
```

## Tools used to build the demo site

+ [Basscss](http://basscss.com/)
+ [CSS Next](http://cssnext.io/)
+ [Post CSS](http://postcss.org/)
+ [Browsersync](https://www.browsersync.io)
+ [Gulp](http://gulpjs.com/) with some ES2015
+ [StyleLint](https://github.com/stylelint/stylelint)
+ [Hero patterns](http://www.heropatterns.com/)
+ Having fun with some responsive type