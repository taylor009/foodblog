/**
 * Created by taylor on 6/7/17.
 */
'use strict';

angular.module('app', [])
    .controller('PostCtrl', function($scope) {
        $scope.title = '';
        $scope.postBody = '';
        $scope.author = '';
    });