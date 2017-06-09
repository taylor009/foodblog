/**
 * Created by taylor on 6/7/17.
 */
'use strict';

angular.module('app', ['app.controllers', 'ngRoute' ])
    .config(function ($routeProvider){
        $routeProvider
            .when('/', {
                templateUrl: '/views/partials/home.html',
                controller: 'HomeCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    })
    .run(function (){

    });