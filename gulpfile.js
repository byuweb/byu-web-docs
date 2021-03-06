'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');


/* ===========================
 * FRACTAL
 * =========================== */


/*
 * Configure a Fractal instance.
 *
 * This configuration could also be done in a separate file, provided that this file
 * then imported the configured fractal instance from it to work with in your Gulp tasks.
 * i.e. const fractal = require('./my-fractal-config-file');
 */

const fractal = require('@frctl/fractal').create();

/* Set the title of the project */
fractal.set('project.title', 'Web Docs');
fractal.set('project.version', 'v1.0');
fractal.set('project.author', 'Nathan Walton');

/* Tell Fractal where the components will live */
fractal.components.set('path', __dirname + '/src/components');

/* Tell Fractal where the documentation pages will live */
fractal.docs.set('path', __dirname + '/src/documentation');

/* Specify a directory of static assets */
fractal.web.set('static.path', __dirname + '/public');

/* Set the static HTML build destination */
fractal.web.set('builder.dest', __dirname + '/docs');

/* Set the default collator (a wrapper for collated component views) */
fractal.components.set('default.collator', function(markup, item) {
  var context = item.context;
  var markupBefore = context && context.markupBefore ? context.markupBefore : "";
  var markupAfter = context && context.markupAfter ? context.markupAfter : "";
  return `<div class="variant"><h2 class="label">${item.label}</h2> <a class="link" target="_blank" href="../preview/${item.handle}">View</a> <section class="content">${markupBefore}${markup}${markupAfter}</section> </div>`;
});


/* Handlebars instance */
const hbs = require('@frctl/handlebars')({
    helpers: {
        uppercase: function(str) {
            return str.toUpperCase();
        },
        cssSafe: function(str) {
            return str.replace(/[^a-z0-9]/g, function(s) {
                var c = s.charCodeAt(0);
                if (c == 32) return '-';
                if (c >= 65 && c <= 90) return s.toLowerCase();
                return '__' + ('000' + c.toString(16)).slice(-4);
            });
        }
    }
    /* other configuration options here */
});

fractal.components.engine(hbs); /* set as the default template engine for components */
fractal.docs.engine(hbs); /* you can also use the same instance for documentation, if you like! */


/* Mandelbrot theme customization */
const byuTheme = require('@frctl/mandelbrot')({
    // theme config here
    skin: "navy",
    panels: ["html", "view", "resources", "context", "info"/*, "notes"*/],
    styles: ["default","/fractal/theme.css"],
    nav: ["docs", "components"]
});

// specify a directory to hold the theme override templates
byuTheme.addLoadPath(__dirname + '/theme-overrides');  

fractal.web.theme(byuTheme);




// any other configuration or customisation here

const logger = fractal.cli.console; // keep a reference to the fractal CLI console utility

/*
 * Start the Fractal server
 *
 * In this example we are passing the option 'sync: true' which means that it will
 * use BrowserSync to watch for changes to the filesystem and refresh the browser automatically.
 * Obviously this is completely optional!
 *
 * This task will also log any errors to the console.
 */

gulp.task('fractal:start', function(){
    const server = fractal.web.server({
        sync: true
    });
    server.on('error', err => logger.error(err.message));
    return server.start().then(() => {
        logger.success(`Fractal server is now running at ${server.url}`);
    });
});

/*
 * Run a static export of the project web UI.
 *
 * This task will report on progress using the 'progress' event emitted by the
 * builder instance, and log any errors to the terminal.
 *
 * The build destination will be the directory specified in the 'builder.dest'
 * configuration option set above.
 */

gulp.task('fractal:build', function(){
    const builder = fractal.web.builder();
    builder.on('progress', (completed, total) => logger.update(`Exported ${completed} of ${total} items`, 'info'));
    builder.on('error', err => logger.error(err.message));
    return builder.build().then(() => {
        logger.success('Fractal build completed!');
    });
});


gulp.task('fractal:post-build', function(){
    return gulp.src( './docs/css/*.css' )
        .pipe(replace('url(/img/','url(/byu-web-docs/img/'))
        .pipe(gulp.dest('docs/css/'))
});





/* ===========================
 * CSS
 * =========================== */

const mainSassLocations = [
    './src/sass/_vars.sass',
    './src/sass/*.sass',
    './src/components/**/*.sass',
    ];

const themeSassLocations = [ './theme-overrides/style/*.sass' ]

gulp.task('sass:main', function () {
    return gulp.src( mainSassLocations )
        .pipe(sourcemaps.init())
        .pipe(concat('style.sass'))
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./public/css'));
});

gulp.task('sass:theme', function () {
    return gulp.src( themeSassLocations )
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./public/fractal/'));
});

gulp.task('sass:watch', function () {
    gulp.watch( mainSassLocations, ['sass:main']);
    gulp.watch( themeSassLocations, ['sass:theme']);
});



/* ===========================
 * JS
 * =========================== */

const mainJsLocations = [
    './src/js/*.js',
    './src/components/**/*.js',
    '!./src/components/**/*.config.js',
    ];

const uglifyConfig = {
    mangle: true,
    };

gulp.task('js:main', function () {
    return gulp.src( mainJsLocations )
        .pipe(sourcemaps.init())
        .pipe(concat('script.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./public/js'));
});

gulp.task('js:watch', function () {
    gulp.watch( mainJsLocations, ['js:main']);
});



/* ===========================
 * Startup
 * =========================== */

gulp.task('default', [ 
    'sass:main',  
    'sass:theme', 
    'js:main', 
    'fractal:start', 
    'sass:watch', 
    'js:watch' 
]);


