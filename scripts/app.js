// 定义模块,依赖两个其他模块
var App = angular.module('App', ['ngRoute','controllers']);
//配置块
App.config(['$routeProvider', function ($routeProvider) {

    $routeProvider.when('/skate', {
        templateUrl: './views/skate.html',
        controller:'skatectrl'
    })
        .when('/video', {
            templateUrl: './views/video.html',
            controller:'videoctrl'
        })
        .when('/hh', {
            templateUrl: './views/hh.html',
            controller:'hhctrl'
        })
        .when('/stick', {
            templateUrl: './views/stick.html',
            controller:'stickController'
        })
        .when('/address', {
            templateUrl: './views/address.html',
            controller:'addressctrl'
        })
        .when('/bilibili', {
            templateUrl: './views/bilibili.html',
            controller:'bilibiliController'
        })
        .when('/helmet', {
            templateUrl: './views/helmet.html',
            controller:'helmetctrl'

        })
        .when('/elbow', {
            templateUrl: './views/elbow.html',
            controller:'elbowctrl'
        })
        .when('/gloves', {
            templateUrl: './views/gloves.html',
            controller:'glovesctrl'
        })
        .when('/shin', {
            templateUrl: './views/shin.html',
            controller:'shinctrl'
        })
        .when('/pad', {
            templateUrl: './views/pad.html',
            controller:'padctrl'
        })
        .when('/shoulder', {
            templateUrl: './views/shoulder.html',
            controller:'shoulderctrl'
        })
        .otherwise({
            redirectTo: './views/hh.html'
        });
}]);
//如果前面的a链接写成#skate就要用下面的，写成#!/skate不用，写成其他都没用
// App.config(["$locationProvider","$routeProvider",function($locationProvider,$routeProvider){
//     $locationProvider.hashPrefix('');
// }]);
