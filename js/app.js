'use strict';

var module = angular.module('MonkeySoftApp', [
    'ngRoute',
    'MonkeySoftApp.controllers'
]);
module.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/home', {templateUrl: 'partials/home.html', controller: 'HomeCtrl'});

     
        $routeProvider.otherwise({redirectTo: '/home'});
    }]);
