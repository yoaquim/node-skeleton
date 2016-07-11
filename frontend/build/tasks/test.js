var paths = require('../paths');
var argv = require('yargs').argv;
var karma = require('karma');

module.exports = function (done) {

    var watch = argv.w;

    var karmaServer = new karma.Server({
        configFile: paths.spec + '/karma.conf.js',
        singleRun: !watch
    }, done);

    karmaServer.start();
};
