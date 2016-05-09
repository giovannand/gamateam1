var app = angular.module('aprovaapp', ['ui.router', 'timer', 'ngSanitize', 'angular-loading-bar', 'angulartics', 'angulartics.google.analytics']);

app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', '$analyticsProvider',
	function($stateProvider, $urlRouterProvider, $locationProvider, $analyticsProvider) {
		$locationProvider.html5Mode(true);
		$urlRouterProvider.otherwise('/');

		$stateProvider.state('inicial', {
			url: '/',
			templateUrl: '/home.html',
			controller: 'PostsCtrl'
		}).state('post', {
			url: '/:postUrl',
			templateUrl: '/post.html',
			controller: 'PostsCtrl'
		});
	}
]);

app.controller('MainCtrl', ['$scope', '$http', function ($scope, $http) {
	$scope.userData = { age: "", email: "", location: "" };

	$scope.lead = function () {
		$http.post('/api/users/new', $scope.userData).success(function(data){
			$('#cadastro').modal('hide');
			if ($scope.userData.email != "") {
				$('#successModal').modal('show');
			}
		}).error(function(data){});
	}
}]);

app.controller('PostsCtrl', ['$scope', '$http', '$stateParams', function($scope, $http, $stateParams) {
	$scope.posts = [];
	$scope.post = {};

	var refreshPosts = function () {
		$http.post('/api/posts/list', { page: 1, limit: 3 }).success(function(data) {
			$scope.posts = data;
		}).error(function(data){});
	}

	var showPost = function(url) {
		$http.post('/api/posts/show', { url: url }).success(function(data) {
			$scope.post = data;
		}).error(function(data){});
	}

	if ($stateParams.postUrl) {
		showPost($stateParams.postUrl);
	}

	refreshPosts();
}]);