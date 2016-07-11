var gulp = require('gulp');
var paths = require('../paths');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var gutil = require('gulp-util');
var stringify = require('stringify');
var browserify = require('browserify');
var watchify = require('watchify');
var karma = require('karma');
var webServer = require('./server');

function karmify (){
    return new karma.Server({
        configFile: paths.spec + '/karma.conf.js',
        singleRun: true
    }, function () {}).start();
}

function prepWatcher () {
    watcher.bundle()
        .on('error', gutil.log.bind(gutil, 'Browserify Error'))
        .pipe(source('dist.js'))
        .pipe(buffer())
        .pipe(gulp.dest(paths.dist))
        .pipe(gulp.dest(paths.server));
}

function bundle() {
    karmify();
    prepWatcher();
    return watcher;
}

function initialBundle () {
    webServer();
    return bundle();
}

var watcher =  watchify(browserify({
    entries: paths.base + 'app.js',
    debug: true
}));

watcher.transform(stringify, {
    appliesTo: { includeExtensions: ['.html'] },
    minify: true
});
watcher.transform('node-lessify', { textMode: true });
watcher.on('update', bundle);
watcher.on('log', gutil.log);

module.exports = initialBundle;
