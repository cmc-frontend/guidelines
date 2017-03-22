const gulp = require('gulp');
const $ = require('gulp-load-plugins')();
const browserSync = require('browser-sync').create();
const nunjucks = require('nunjucks');

let customEnv = new nunjucks.Environment();
customEnv.addFilter('shorten', function(str, count) {
  return str.slice(0, count || 3);
});

let PATHS = {
  templates: 'templates/',
};
let dev = false;

function errorlog (error) {  
  console.error.bind(error);  
  this.emit('end');  
}  

function requireUncached( $module ) {
  delete require.cache[require.resolve( $module )];
  return require( $module );
}

// scss to njk
gulp.task('scssToNjk', function () {
  return gulp.src(PATHS.templates + 'code/scss/*.scss')
    .pipe($.plumber())
    .pipe($.change(function(content) {
      return content.replace(/(\/\/=>\s+)/g, '');
    }))
    .pipe($.rename({extname: '.njk'}))
    .pipe($.cached('scssToNjk'))
    .pipe(gulp.dest(PATHS.templates + 'code/scss'));
});

// yml to json
gulp.task('ymlToJson', function () {
  return gulp.src(PATHS.templates + 'code/*.yml')
    .pipe($.yaml({space: 2}))
    .pipe(gulp.dest(PATHS.templates + 'code'));
});

// Nunjucks Task
gulp.task('html', function() {
  let data = requireUncached('./' + PATHS.templates + 'code/data.json');

  data.is = function (type, obj) {
    var clas = Object.prototype.toString.call(obj).slice(8, -1);
    return obj !== undefined && obj !== null && clas === type;
  };

  data.keys = function (obj) {
    return Object.keys(obj);
  };

  return gulp.src(PATHS.templates + '*.njk')
    .pipe($.plumber())
    .pipe($.nunjucks.compile(data, {
      watch: true,
      noCache: true,
      // env: customEnv,
    }))
    .pipe($.rename(function (path) { path.extname = ".html"; }))
    .pipe($.if(dev, $.htmltidy({
      doctype: 'html5',
      wrap: 0,
      hideComments: true,
      indent: true,
      'indent-attributes': false,
      'drop-empty-elements': false,
      'force-output': true
    }), $.htmlmin({
      collapseWhitespace: true,
      collapseInlineTagWhitespace: true,
      collapseBooleanAttributes: true,
      decodeEntities: true,
      minifyCSS: true,
      minifyJs: true,
      removeComments: true,
    })))
    .pipe($.cached('nunjucks'))
    .pipe(gulp.dest('.'));
});

// Server Task
gulp.task('server', function() {
  browserSync.init({
    server: {
      baseDir: './'
    },
    open: false,
    notify: false
  });

  gulp.watch([PATHS.templates + 'code/*.yml'], ['ymlToJson']);
  gulp.watch([PATHS.templates + '**/*.scss'], ['scssToNjk']);
  gulp.watch([PATHS.templates + '**/*.njk', PATHS.templates + '**/*.json'], ['html']);
  gulp.watch(['**/*.html', '**/*.css']).on('change', browserSync.reload);
});

gulp.task('default', [
  // 'ymlToJson',
  // 'html',
  'server',
]);