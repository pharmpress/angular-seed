'use strict';

angular.module('myApp.view3', ['ngRoute', 'apiMock'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view3', {
    templateUrl: 'view3/view3.html',
    controller: 'View3Ctrl'
  });
}])
.config(function (apiMockProvider) {
	apiMockProvider.config({
		mockDataPath: '/mock_data',
		apiPath: '/api'
	});
})

.controller('View3Ctrl', function($scope, $http, $location) {
	$scope.name = '';
	$scope.$location = $location;
	$http.get('/api/people/jhon').success(function(data) {
		$scope.name = data.name;
	}).error(function(data) {
		$scope.name = 'No connection :( Now add #?apimock=true to the browser addressbar (e.g. http://localhost:8000/#!/view3?apimock=true) and try again ;)';
	});
});
