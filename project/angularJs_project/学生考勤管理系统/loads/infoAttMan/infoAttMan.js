var app = angular.module("app.infoAttMan",["ngRoute"]);
app.config(function($routeProvider){
	$routeProvider.when("/infoAttMan",{
		templateUrl:"loads/infoAttMan/AttType.html",
		controller:"infoAttManController"
	});
});
app.controller("infoAttManController",function($scope){
	var obj = {};
	var st=  $scope.$parent.Data.infoPlePinNSMan;
	st.forEach(function(item){
		if(obj.hasOwnProperty(item.type)){
			obj[item.type]++;
		}else{
			obj[item.type] = 1;
		}
	});
	var info = [];
	var length = st.length;
	for(key in obj){
		var arr = [];
		arr.push(key+"类型");
		arr.push((obj[key]/length)*100);
		info.push(arr);
	}
	angular.element(document.getElementById("container")).highcharts({
        chart: {
            type: 'pie',
            options3d: {
				enabled: true,
                alpha: 45,
                beta: 0
            }
        },
        title: {
            text: '学生请假类型比例图'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                depth: 35,
                dataLabels: {
                    enabled: true,
                    format: '{point.name}'
                }
            }
        },
        series: [{
            type: 'pie',
            name: '请假类型分布',
            data: info
        }]
    });


});
