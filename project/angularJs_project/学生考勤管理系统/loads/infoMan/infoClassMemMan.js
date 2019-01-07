angular.module("app.infoClassMenMan",["ngRoute"])
	.config(function($routeProvider){
		$routeProvider.when("/infoClassMenMan",{
			templateUrl:"loads/infoMan/infoClassMenMan.html",
			controller:"infoClassMenManController"
		})
	})
	.controller("infoClassMenManController",function($scope){
			$scope.name = "infoClassMenMan";
		})