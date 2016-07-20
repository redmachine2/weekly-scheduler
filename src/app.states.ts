/**
 * Created by Jason on 7/19/2016.
 */
module App{
    "use strict";

    function states($stateProvider, $urlRouterProvider){
        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'app/components/home/home.html',
                controller: 'HomeComponent',
                controllerAs: 'vm'
            });

        $urlRouterProvider.otherwise("/home")
    }

    states.$inject = ["$stateProvider", "$urlRouterProvider"];
    angular.module("app").config(states);
}