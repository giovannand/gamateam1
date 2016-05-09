var app = angular.module('aprovaapp', ['ui.router', 'angular-loading-bar', 'angulartics', 'angulartics.google.analytics']);

app.controller('MainCtrl', ['$scope', '$http', function ($scope, $http) {
	$scope.userData = { age: "", email: "", location: "" };

	$scope.lead = function () {
		$http.post('gamateam1/save-lead.php', $scope.userData).success(function(data){
			$('#cadastro').modal('hide');
			$('#successModal').modal('show');
		}).error(function(data){});
	}
}]);