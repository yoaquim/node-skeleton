module.exports = function(karma) {
    karma.set({

        frameworks: [ 'browserify', 'jasmine'],

        files: ['./**/*.spec.js'],

        logLevel: karma.LOG_INFO,

        preprocessors: {
            './**/*.spec.js': [ 'browserify' ]
        },

        plugins:[
            'karma-jasmine',
            'karma-phantomjs-launcher',
            'karma-browserify',
            'karma-spec-reporter'
        ],

        browsers: [ 'PhantomJS_custom'],

        customLaunchers: {
            'PhantomJS_custom': {
                base: 'PhantomJS',
                options: {
                    windowName: 'perk-bumper',
                    settings: {
                        webSecurityEnabled: false
                    }
                }
            }
        },

        reporters: ['spec'],

        browserify: {
            debug: true,
            transform: [
                ['stringify', {
                    appliesTo: {
                        includeExtensions: ['.html']
                    }
                }
                ]
            ]
        }
    });
};
