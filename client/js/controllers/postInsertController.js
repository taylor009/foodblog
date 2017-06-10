/**
 * Created by taylor on 6/10/17.
 */
var app = angular.module('app', []);
app.controller('insertCtrl', function($scope,$http) {
    $scope.data = {};
    $scope.submit= function(){
        console.log('clicked submit');
        $http({
            url: '/api/posts',
            method: 'POST',
            data: $scope.data
        }).then(function (httpResponse) {
            console.log('response:', httpResponse);
        })
    }
});