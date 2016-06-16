var gulp = require('gulp');
var paths = require('../paths');
var webserver = require('gulp-webserver');

module.exports = function () {
    return gulp.src(paths.server)
        .pipe(webserver({
            port: 5050,
            livereload: true,
            open: true
        }));
};
