// 实例一个模块，用来专门管理所有的控制器
var controllerApp = angular.module('controllers',[]);
//模块下定义一个控制器，（'名字'，['依赖'，函数（形参）{}]）
controllerApp.controller('stickController',['$http','$scope',function ($http,$scope) {
    //$http(json{}).success(func(形参){})//success是旧版的方法，已弃置
    $http({
        url:'./api/stick.php',
        method:'get',
    }).then(function successCallback(response) {
        // 请求成功执行代码
        // console.log(response);
        console.log(response.data);
        var type1Arr=[];
        var type2Arr=[];
        var type3Arr=[];
        //遍历放入数组
        for(var i=0;i<response.data.length;i++){
            if(response.data[i].type==1){
                type1Arr.push(response.data[i]);
            }else if(response.data[i].type==2){
                type2Arr.push(response.data[i]);
            }else if(response.data[i].type==3){
                type3Arr.push(response.data[i]);
            }
        }
        $scope.pro=type1Arr;
        $scope.senior=type2Arr;
        $scope.inter=type3Arr;
    }, function errorCallback(response) {
        // 请求失败执行代码
    });
    var some = document.querySelector('.some');
    some.style.display="none";
}]);
controllerApp.controller('bilibiliController',['$scope','$http',function ($scope,$http) {
    $http(
        {
            url:'./api/bilibili.php',
        }
    ).then(function successCallback(response){
        console.log(response);
        $scope.videoList=response.data.result.video;

    });
    $scope.lemon="欢迎来到抓包页面";
    var some = document.querySelector('.some');
    some.style.display="none";
}]);
controllerApp.controller('hhctrl',[function() {
    var some = document.querySelector('.some');
    some.style.display="none";
}]);
controllerApp.controller('skatectrl',[function() {
    var some = document.querySelector('.some');
    some.style.display="none";
}]);
controllerApp.controller('videoctrl',[function() {
    var some = document.querySelector('.some');
    some.style.display="none";
}]);
controllerApp.controller('addressctrl',[function() {
    var some = document.querySelector('.some');
    some.style.display="none";
}]);
controllerApp.controller('helmetctrl',[function() {
    var some = document.querySelector('.some');
    some.style.display="none";
}]);
controllerApp.controller('glovesctrl',[function() {
    var some = document.querySelector('.some');
    some.style.display="none";
}]);
controllerApp.controller('shoulderctrl',[function() {
    var some = document.querySelector('.some');
    some.style.display="none";
}]);
controllerApp.controller('elbowctrl',[function() {
    var some = document.querySelector('.some');
    some.style.display="none";
}]);
controllerApp.controller('shinctrl',[function() {
    var some = document.querySelector('.some');
    some.style.display="none";
}]);
controllerApp.controller('padctrl',[function() {
    var some = document.querySelector('.some');
    some.style.display="none";
}]);