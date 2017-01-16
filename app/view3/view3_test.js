'use strict';

describe('myApp.view3 module', function() {
  var scope, httpBackend, createController;

  beforeEach(module('myApp.view3'));

  beforeEach(inject(function($httpBackend, $rootScope, $controller) {
    httpBackend = $httpBackend;
    scope = $rootScope.$new();

    createController = function() {
      return $controller('View3Ctrl', { $scope: scope });
    }
  }));

  afterEach(function() {
      httpBackend.verifyNoOutstandingExpectation();
      httpBackend.verifyNoOutstandingRequest();
  });

  describe('view3 controller', function(){

    it('should succeed', function() {
      var view3Ctrl = createController();

      expect(view3Ctrl).toBeDefined();
      expect(scope.$location).toBeDefined();

      httpBackend.expect('GET', '/api/people/jhon')
      .respond({
        "name": "john doe"
      });
      httpBackend.flush();

      expect(scope.name).toEqual('john doe')
    });

    it('should fail', function() {
      var view3Ctrl = createController();

      expect(view3Ctrl).toBeDefined();
      expect(scope.$location).toBeDefined();

      httpBackend.expect('GET', '/api/people/jhon')
      .respond(404);
      httpBackend.flush();

      expect(scope.name).toMatch(/No connection/)
    });

  });
});
