module.exports = function (config) {
  config.set({

    basePath: './.src/',

    frameworks: ['systemjs', 'mocha', 'sinon-chai', 'chai'],

    files: [
      // tests
      {pattern: '../spec/**/*.js', included: true}
    ],

    singleRun: true,

    colors: true,
    logLevel: config.LOG_INFO,

    browsers: ['PhantomJS'],
    // browsers: ['Chrome'],

    systemjs: {

      serveFiles: [
        '../../node_modules/systemjs/dist/system-polyfills.js',
        './app/**/*',
        './jspm_packages/**/*'
      ],

      includeFiles: [
        './jspm_packages/github/angular/bower-angular@1.5.3/angular.js',
        './jspm_packages/github/angular/bower-angular-mocks@1.5.3/angular-mocks.js'
      ],

      // Point out where the SystemJS config file is
      configFile: './config.js',

      // Add any additional configuration, such as mappings to modules only used in testing
      config: {
        paths: {

        }
      }
    },

    // coverage reporter generates the coverage
    reporters: ['progress', 'coverage'],

    preprocessors: {
      // source files, that you wanna generate coverage for
      // do not include tests or libraries
      // (these files will be instrumented by Istanbul)
      './app/**/*.js': ['coverage']
    },

    coverageReporter: {
      reporters: [
        {type: 'json', subdir: '../../coverage/', file: 'coverage-final.json'}
      ]
    }
  });
};
