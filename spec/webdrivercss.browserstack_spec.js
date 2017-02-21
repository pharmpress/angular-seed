'use strict';

var webdriverio = require('webdriverio');
var webdrivercss = require('webdrivercss');

var options = {
  browser: {
    'browserstack.debug': 'true',
    'browserstack.local': 'true',
    os: 'Windows',
    os_version: '7',
    browser: 'ie',
    browser_version: '9.0'
  },
  test: {
    title: 'Body_win7-ie9',
    name: 'body',
    url: 'http://localhost:8000/index.html', // this needs to be a real URL
    selector: 'body',
  },
  webdrivercss: {
    screenshotRoot: 'visual/reference',
    failedComparisonsRoot: 'visual/failed',
    misMatchTolerance: 0.05,
    screenWidth: [320, 568, 1024]
  }
};

// Configure webdriverio
var client = webdriverio.remote({
  desiredCapabilities: options.browser,
  host: 'hub.browserstack.com',
  port: 80,
  user: process.env.BROWSERSTACK_USER,
  key: process.env.BROWSERSTACK_KEY
});

describe('Win7 / IE9: My Component @ 1024', function() {
  var originalTimeout;
  beforeEach(function() {
    originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 600000;
  });
  afterEach(function() {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
  });

  beforeAll(function() {
     // Initialize webdriverio
    client.init();
    // Initialize webdrivercss
    webdrivercss.init(client, options.webdrivercss);
  });

  it('should look the same',  function (done) {
    client
    .url(options.test.url)
    .webdrivercss(options.test.title, {
      name: options.test.name,
      elem: options.test.selector
    }, function(err, res) {
      expect(err).toBeUndefined();      
      expect(res[options.test.name].every(function(element, index, array){
         return element.isWithinMisMatchTolerance; 
      })).toBe(true);
    })
    .end()
    .call(done);
  });
  
});
