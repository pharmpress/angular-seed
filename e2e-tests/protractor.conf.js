//jshint strict: false
exports.config = {

  allScriptsTimeout: 11000,

  specs: [
    '*.feature'
  ],

  cucumberOpts: {
    require: [
      '*.steps.js'
    ]
  },

  capabilities: {
    'browserName': 'chrome'
  },

  baseUrl: 'http://localhost:8000/',

  framework: 'custom',

  // path relative to the current config file 
  frameworkPath: require.resolve('protractor-cucumber-framework'),

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }

};
