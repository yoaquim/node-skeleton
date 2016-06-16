var gulp = require('gulp');
var paths = require('../paths');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var uglify = require('gulp-uglify');
var gutil = require('gulp-util');
var stringify = require('stringify');

module.exports = function () {

    var b = browserify({
        entries: paths.base + 'app.js',
        debug: true
    });

    return b
        .transform(stringify, {
            appliesTo: { includeExtensions: ['.html'] }
        })
        .transform('node-lessify')
        .bundle()
        .on('error', gutil.log.bind(gutil, 'Browserify Error'))
        .pipe(source('dist.js'))
        .pipe(buffer())
        .pipe(uglify())
        .pipe(gulp.dest(paths.dist))
        .pipe(gulp.dest(paths.server));
};
