var app=angular.module("app.infoCourseMan",["ngRoute"]);
	app.config(function($routeProvider){
		$routeProvider.when("/infoCourseMan",{
			templateUrl:"loads/infoCouMan/infoCourseMan.html",
			controller:"infoCourseManController"
		});
	});

	var beginId = 105; 
	function Course(couName,couTime,couTea,couAddress){
	this.id = ++beginId;
	this.couName = couName;
	this.couTime = couTime;
	this.couTea = couTea;
	this.couAddress = couAddress;
}
	app.controller("infoCourseManController",function($scope,modalService){
		$scope.newCou = null;
		$scope.couData = {
			option:"",
			course:$scope.$parent.couData.course,
			modalTitle:"",	
			addcou : function(){
					this.option = "add2";
					this.modalTitle = "添加课程信息";
					modalService.open("couModal");
				
				},
			savecou : function(){
					var cou = new Course(
						$scope.newCou.couName,
						$scope.newCou.couTime,
						$scope.newCou.couTea,
						$scope.newCou.couAddress
					);
					this.course.push(cou);
					modalService.close("couModal");
				},
			delcou : function(){
					var c1 = $scope.couData.course.some(function(item){
						return item.checked == true;
					});
					if(c1){
						if(window.confirm("确定删除该信息吗？")){
							$scope.couData.course = $scope.couData.course.filter(function(item){
								return item.checked != true;
							});
						}
					}
					else{
						alert("请选择要删除信息");
					}
				},
			showUpdcou : function(){
					this.option = "upd1";
					var cou = this.course.filter(function(item){
						return item.checked == true;
					})[0];
					if(cou){
						$scope.newCou = cou;
						this.modalTitle = "修改课程信息";
						modalService.open("couModal");
					}
					else{
						alert("请选中要修改的信息");
					}
				},
			updcou : function(){
				modalService.close("couModal");
			}
		}
	});
	//服务
	/*app.service("modalServices",function(){
		var modal = document.getElementById("couModal");
			modal = angular.element(modal);
			return{
				open:function(){
					modal.modal("show");
				},
				close:function(){
					modal.modal("hide");
				}
			}
	});*/