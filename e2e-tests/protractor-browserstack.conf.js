var browserstack = require('browserstack-local');

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
    'browserstack.user': process.env.BROWSERSTACK_USER,
    'browserstack.key': process.env.BROWSERSTACK_KEY,
    'browserstack.local': true,
    'browserName': 'chrome'
  },

  beforeLaunch: function(){
    console.log("Connecting local");
    return new Promise(function(resolve, reject){
      exports.bs_local = new browserstack.Local();
      exports.bs_local.start({'key': exports.config.capabilities['browserstack.key'] }, function(error) {
        if (error) return reject(error);
        console.log('Connected. Now testing...');

        resolve();
      });
    });
  },

  // Code to stop browserstack local after end of test
  afterLaunch: function(){
    return new Promise(function(resolve, reject){
      exports.bs_local.stop(resolve);
    });
  },

  baseUrl: 'http://localhost:8000/',

  seleniumAddress: 'http://hub-cloud.browserstack.com/wd/hub',

  framework: 'custom',
 
  // path relative to the current config file 
  frameworkPath: require.resolve('protractor-cucumber-framework'),

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }

};
