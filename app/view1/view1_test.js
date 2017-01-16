'use strict';

describe('myApp.view1 module', function() {
  var scope, httpBackend, createController;

  beforeEach(module('myApp.view1'));

  beforeEach(inject(function($rootScope, $httpBackend, $controller) {
    httpBackend = $httpBackend;
    scope = $rootScope.$new();

    createController = function() {
        return $controller('View1Ctrl', {
            '$scope': scope
        });
    };
  }));

  describe('view1 controller', function(){

    it('should ....', function() {
      var view1Ctrl = createController();

      expect(view1Ctrl).toBeDefined();
      expect(scope.animals).toEqual(['dog', 'cat', 'mouse']);
    });

  });
});
