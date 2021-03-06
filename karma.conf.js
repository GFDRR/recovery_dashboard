// Karma configuration
// Generated on Thu May 14 2015 22:51:33 GMT+0200 (CEST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'chai-jquery', 'jquery-2.1.0', 'chai', 'sinon-chai'],


    // list of files / patterns to load in the browser
    files: [
      'bower_components/angular/angular.js',
      'bower_components/angular-sanitize/angular-sanitize.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'bower_components/angular-openlayers-directive/dist/angular-openlayers-directive.js',
      'source/javascripts/components/dashboard.coffee',
      'bower_components/d3/d3.js',
      'bower_components/colorbrewer/colorbrewer.js',
      'bower_components/openlayers3/build/ol.js',
      'bower_components/underscore/underscore.js',
      'source/javascripts/**/*.coffee',
      'tests/**/*Spec.coffee'
    ],


    // list of files to exclude
    exclude: [
      '**/*.swp'
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'source/javascripts/components/**/*.coffee': ['coverage'],
      'tests/**/*.coffee': ['coffee']
    },

    coverageReporter: {
      instrumenters: { ibrik : require('ibrik') },
      instrumenter: {
        '**/*.coffee': 'ibrik'
      },
      reporters: [
        // reporters not supporting the `file` property
        { type: 'html', subdir: 'report-html' },
        { type: 'lcov', subdir: 'lcov-report' },
        ],
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'coverage'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  });
};
