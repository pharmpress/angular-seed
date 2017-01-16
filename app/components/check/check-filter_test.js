'use strict';

describe('myApp.check module', function() {
  beforeEach(module('myApp.check'));

  describe('interpolate filter', function() {

    it('should convert boolean values', inject(function(checkFilter) {
      expect(checkFilter(true)).toBe('\u2714');
      expect(checkFilter(false)).toBe('\u2718');
    }));
  });
});
