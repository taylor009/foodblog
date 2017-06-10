/**
 * Created by taylor on 6/7/17.
 */
'use strict';

angular.module('app', ['app.controllers', 'ngRoute',  ])
    .config(function ($routeProvider){
        $routeProvider
            .when('/', {
                templateUrl: '../views/components/home.html',
                controller: 'MainCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    })
    .run(function (){

    });