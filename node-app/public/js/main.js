var app = angular.module('aprovaapp', ['ui.router', 'ngSanitize', 'angular-loading-bar', 'angulartics', 'angulartics.google.analytics']);

app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', '$analyticsProvider',
	function($stateProvider, $urlRouterProvider, $locationProvider, $analyticsProvider) {
		$locationProvider.html5Mode(true);
		$urlRouterProvider.otherwise('/');

		$stateProvider.state('inicial', {
			url: '/'
		}).state('post', {
			url: '/:postUrl',
			templateUrl: '/post.html',
			controller: 'postsCtrl'
		});
	}
]);

app.controller('MainCtrl', ['$scope', '$http', function ($scope, $http) {
	$scope.userData = { age: "", email: "", location: "" };

	$scope.lead = function () {
		$http.post('/api/users/new', $scope.userData).success(function(data){
			$('#cadastro').modal('hide');
			$('#successModal').modal('show');
		}).error(function(data){});
	}
}]);

app.controller('PostsCtrl', ['$scope', '$http', function($scope, $http) {
	$scope.posts = [];

	var refreshPosts = function () {
		$http.post('/api/posts/list', { page: 1, limit: 2 }).success(function(data) {
			$scope.posts = data;
		}).error(function(data){});
	}

	refreshPosts();
}]);