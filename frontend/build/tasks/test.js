var gulp = require('gulp');
var paths = require('../paths');
var argv = require('yargs').argv;
var karma = require('karma');
var webserver = require('gulp-webserver');

module.exports = function (done) {

    var serverStream = gulp.src(paths.server)
        .pipe(webserver({
            port: 5050,
            open: false
        }));

    var watch = argv.w;

    var karmaServer = new karma.Server({
        configFile: paths.spec + '/karma.conf.js',
        singleRun: !watch
    }, function() {
        // Cant kill the server with this, doesnt work, using process.exit() instead
        // serverStream.emit('kill');
        done();
        process.exit();
    });

    karmaServer.start();
};
