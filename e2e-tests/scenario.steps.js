var chai = require('chai');
//var chaiAsPromised = require('chai-as-promised');
//chai.use(chaiAsPromised);

var expect = chai.expect;


module.exports = function() {
  this.Given(/^I am on the "([^"]*)" page$/, function (arg1, next) {
    browser.get(arg1);
    next();
  });

  this.When(/^I click on "([^"]*)"$/, function (arg1, next) {
    browser.get('index.html#!/' + arg1);
    next();
    //next(null, 'pending');
  });

  this.Then(/^I should see "([^"]*)"$/, function (arg1, next) {
    element.all(by.css('[ng-view] p')).first().getText().then(function (result) {
      expect(result).to.match(new RegExp(arg1, "g"));
      next();
    });
  });

  this.Then(/^I should see name "([^"]*)"$/, function (arg1, next) {
    element.all(by.css('[ng-view] div h2')).first().getText().then(function (result) {
      expect(result).to.match(new RegExp(arg1, "g"));
      next();
    });
  });

  this.Then(/^I should be redirected to "([^"]*)"$/, function (arg1, next) {
    browser.getLocationAbsUrl().then(function (result) {
      expect(result).to.match(new RegExp(arg1, "g"));
      next();
    });
  });

}
