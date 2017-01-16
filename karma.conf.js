//jshint strict: false
module.exports = function(config) {
  config.set({

    basePath: '.',

    files: [
      'app/bower_components/angular/angular.js',
      'app/bower_components/angular-route/angular-route.js',
      'app/bower_components/angular-mocks/angular-mocks.js',
      'app/bower_components/angular-apimock/dist/angular-apimock.js',
      'app/components/**/*.js',
      'app/view*/**/*.js'
    ],

    autoWatch: false,

    singleRun: true,

    frameworks: ['jasmine'],

    browsers: ['Chrome'], //'PhantomJS', 'Firefox'

    plugins: [
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-phantomjs-launcher',
      'karma-jasmine',
      'karma-junit-reporter',
      'karma-coverage'
    ],

    preprocessors: {
      'app/components/**/*.js': 'coverage',
      'app/view*/**/*.js': 'coverage',
      'app/app.js': 'coverage'
    },

    reporters: ['progress', 'junit', 'coverage'], //'spec'

    coverageReporter: {
      type : 'html',
      dir : 'target/coverage'
    },

    junitReporter: {
      outputDir: 'target/unit',
      outputFile: 'junit-report.xml',
      suite: 'unit'
    }

  });
};
