var app = angular.module("app", [
	"ngRoute",
	"app.infoCourseMan",
	"app.infoStuMan",
	"app.infoPlePinNSMan",
	"app.infoAttMan"
	]
)
app.controller("mainController", function($scope, $http) {
		$http.get("json/config.json").success(function(data) {
			$scope.config = data;
		});
		//初始化数据对象
		$scope.data = {};
		
		//定义一级标题模板
		$scope.data.parentCategoryModel = {
			"parentCategory": null
		};
		$scope.data.tabs;
		$scope.data.url;
		$scope.data.changeTabs = function(event, index) {
			angular.element(event.target)
				.addClass("active")
				.siblings()
				.removeClass("active");
			var sons = $scope.config.filter(function(item) {
				return item.parentCategory == index;
			});
			var self = $scope.config.filter(function(item) {
				return item.categoryId == index;
			});
			$scope.data.tabs = sons.length > 0 ? sons : self;
			$scope.data.url=$scope.data.tabs[0].url;
			window.open($scope.data.url,"_self");
		};
		$scope.data.changeTab = function(event) {
			angular.element(event.target)
				.parent()
				.addClass("active")
				.siblings()
				.removeClass("active");
		};
		$scope.couData = {};
		$http.get("json/infoCourseMan.json").success(function(data) {
			$scope.couData.course = data;
		});
		$scope.stuData = {};
		$http.get("json/infoStuMan.json").success(function(data){
			$scope.stuData.student = data;
		});
		$scope.Data = {};
		$http.get("json/infoPlePinNSMan.json").success(function(data){
			$scope.Data.infoPlePinNSMan = data;
		});
	})
	app.factory("modalService",function(){
		
			//modal = angular.element(modal);
			return{
				open:function(id){
					angular.element(document.getElementById(id)).modal("show");
				},
				close:function(id){
					angular.element(document.getElementById(id)).modal("hide");
				}
			}
	})


