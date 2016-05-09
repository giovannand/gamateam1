var app = angular.module('aprovaapp', ['ui.router', 'angular-loading-bar', 'angulartics', 'angulartics.google.analytics']);

app.controller('MainCtrl', ['$scope', '$http', function ($scope, $http) {
	$scope.lead = function () {
		$http.post('save-lead.php', {
			email: $scope.email,
			age: $scope.age,
			location: $scope.location
		}).success(function(data){
			$('#succesModal').modal('show');
		}).error(function(data){});
	}
}]);