
var app=angular.module("app.infoStuMan",["ngRoute"]);
	app.config(function($routeProvider){
		$routeProvider.when("/infoStuMan",{
			templateUrl:"loads/infoStuMan/infoStuMan.html",
			controller:"infostudentManController"
		});
	});

	var beginId = 112; 
	function student(name,age,gender,telephone,clazz,dorm){
	this.id = ++beginId;
	this.name = name;
	this.age = age;
	this.gender = gender;
	this.telephone = telephone;
	this.clazz = clazz;
	this.dorm = dorm;
}

	app.controller("infostudentManController",function($scope,modalService){
		$scope.newStu = null;
		//-----------------------分页开始--------------------------
    $scope.pager = {};
	$scope.pager.pageSize =5;	  //页容量
	$scope.pager.currentPage = 1; //当前页
	$scope.pager.totalPage = 1;	  //总页
	$scope.pager.endPage = 1;	  //结束页
	$scope.pager.pages = [];	  //循环页
	
	$scope.pager.load = function(){
			$scope.stuData.student=$scope.$parent.stuData.student,
			
			$scope.pager.totalPage = Math.ceil($scope.stuData.student.length/$scope.pager.pageSize)
			$scope.pager.endPage = $scope.pager.totalPage;
			if($scope.pager.currentPage >1 && $scope.pager.currentPage < $scope.pager.totalPage ){
				$scope.pager.pages = [
					$scope.pager.currentPage-1,
					$scope.pager.currentPage,
					$scope.pager.currentPage+1
				];
			}else if($scope.pager.currentPage == 1 && $scope.pager.totalPage>1 ){
				$scope.pager.pages = [
					$scope.pager.currentPage,
					$scope.pager.currentPage+1
				];
			}else if($scope.pager.currentPage == $scope.pager.totalPage && $scope.pager.totalPage>1){
				$scope.pager.pages = [
					$scope.pager.currentPage-1,
					$scope.pager.currentPage
				];
			}
	}
	$scope.pager.load();

	$scope.pager.loadPage = function(page){
		$scope.pager.currentPage = page;
		$scope.pager.load();
	}
	$scope.pager.next = function(){
		if($scope.pager.currentPage < $scope.pager.totalPage){
			$scope.pager.currentPage++;
			$scope.pager.load();
		}
	}
	$scope.pager.prev = function(){
		if($scope.pager.currentPage>1){
			$scope.pager.currentPage--;
			$scope.pager.load();
		}
	}

	

	//-------------------------分页结束---------------------

		$scope.stuData = {
			option:"",
			criteria:{},
			modal:{}, 
			student:$scope.$parent.stuData.student,
			modalTitle:"",
			addStu : function(){
					this.option = "add";
					this.modalTitle = "添加学生信息";
					modalService.open("stuModal");
				},
			saveStu : function(){
					var stu = new student(
						$scope.newStu.name,
						$scope.newStu.age,
						$scope.newStu.gender,
						$scope.newStu.telephone,
						$scope.newStu.clazz,
						$scope.newStu.drom
					);
					this.student.push(stu);
					modalService.close("stuModal");
				},
			searchStu : function(){
				//当modal中的key和val都有值的情况下，才做筛选
				this.criteria = {};

				if(this.modal.key && this.modal.val){
					this.criteria[this.modal.key] 
							= this.modal.val;
				}else{
					this.criteria = {};
					}
				},
			delStu : function(){
					var c1 = $scope.stuData.student.some(function(item){
						return item.checked == true;
					});
					if(c1){
						if(window.confirm("确定吗？")){
							this.student =this.student.filter(function(item){
								return item.checked != true;
							});
						}
					}
					else{
						alert("请选择要删除信息");
					}
				},
			showUpdStu : function(){
					this.option = "upd";
					var stu = this.student.filter(function(item){
						return item.checked == true;
					})[0];
					if(stu){
						$scope.newStu = stu;
						this.modalTitle = "修改学生信息";
						modalService.open("stuModal");
					}
					else{
						alert("请选中要修改的学生");
					}
				},
			updStu : function(){
				modalService.close("stuModal");
			}
		}
	});

	app.filter("pagerFilter",function(){
	return function(arr,page){
		//2表示是页面容量的大小
		var begin = page*5;
		var end = begin+5;
		return arr.slice(begin,end);
		}
	});

	//服务
	/*app.service("modalService",function(){
		var modal = document.getElementById("stuModal");
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