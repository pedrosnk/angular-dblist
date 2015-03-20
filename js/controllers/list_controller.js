(function(){
'use strict';

var module = angular.module('dbApp');

module.controller('ListController', function($scope, $http){
    $scope.itemIds = [];
	$scope.listItems = [];

    $scope.reset = function(){
        $http.get('/items.json').success(function(data){
            $scope.listItems = data;
        });
    };

    $scope.reset2 = function(){
        $http.get('/items2.json').success(function(data){
            $scope.listItems = data;
        });
    };

    $scope.reset3 = function(){
        $scope.itemIds = ['1'];
    };
});

})();