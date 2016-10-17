(function(){
    'use strict';
    angular.module('material').config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'LoginController',
                controllerAs: 'controller',
                templateUrl: 'views/login.html'
            });
    });
})();