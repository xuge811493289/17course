var app = angular.module("app.infoPlePinNSMan",["ngRoute"]);
app.config(function($routeProvider){
	$routeProvider.when("/infoPlePinStateMan",{
		templateUrl : "loads/infoPlePinMan/infoPlePinStateMan.html",
		controller : "infoPlePinNSManController"
	});
	$routeProvider.when("/infoPlePinNoteMan",{
		templateUrl : "loads/infoPlePinMan/infoPlePinNoteMan.html",
		controller : "infoPlePinNSManController"
	});
})

app.controller("infoPlePinNSManController",function($scope,modalService){
	$scope.Data = {
		infoPlePinNSMans : $scope.$parent.Data.infoPlePinNSMan,
		detailInfo : {},
		check : function(figer){
			var adc = this.infoPlePinNSMans.filter(function(item){
				return item.checked == true;
			})[0];
			if(adc){
				adc["state"] = figer;
				alert(figer+"成功");
				adc.checked = false;
			}
		},
		showAddModal:function(data){
			$scope.Data.detailInfo = data;
			modalService.open("detail");
		},
		addinfoPlePinNSMan : function(){
			//console.log(2)
			
			var adc = new infoPlePinNSMan(
				$scope.newUser.name,
				$scope.newUser.clazz,
				$scope.newUser.telephone1,
				$scope.newUser.telephone2,
				$scope.newUser.type,
				$scope.newUser.content
			)
			this.infoPlePinNSMans.push(adc);
			alert("执行请假申请");
			$scope.newUser = {};
		},
		delinfoPlePinNSMan : function(){
			
			var ad = this.infoPlePinNSMans.some(function(i){
				return i.checked == true;
			})
			if(ad){
				$scope.$parent.Data.infoPlePinNSMan = this.infoPlePinNSMans = this.infoPlePinNSMans.filter(function(i){
					return i.checked != true;
				})
				ad.checked = false;
			}else{
				alert("请选择删除的数据");
			}
		}
	}

})
var id = 1013;
function infoPlePinNSMan(name,clazz,telephone1,telephone2,type,content){
	this.id = id++;
	this.name = name;
	this.clazz = clazz;
	this.telephone1 = telephone1;
	this.telephone2 = telephone2;
	this.type = type;
	this.content = content;
	this.time = new Date().getTime();
	this.state = "未批准";
}