'use strict';

angular.module('myApp.check.check-filter', [])

.filter('check', function() {
  return function(input) {
    return input ? '\u2714' : '\u2718';
  };
});
