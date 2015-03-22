(function(){
'use strict';

var app = angular.module('dbApp', ['dblist']);

app.controller('ListController', function($scope, $http){
    $scope.itemIds = [];
	$scope.listItems = [];

    $scope.reset = function(){
        $scope.listItems = [
            {"itemName": "item1", "itemId": "1"},
            {"itemName": "item2", "itemId": "2"},
            {"itemName": "item3", "itemId": "3"}
        ];
    };

    $scope.reset2 = function(){
        $scope.listItems = [
            {"itemName": "item4", "itemId": "4"},
            {"itemName": "item5", "itemId": "5"},
            {"itemName": "item6", "itemId": "6"}
        ];
    };

    $scope.reset3 = function(){
        $scope.itemIds = ['1'];
    };
});

})();
