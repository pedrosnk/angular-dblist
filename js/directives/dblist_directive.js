(function(){
'use strict';

var module = angular.module('dblist');

module.directive('dubleList', function(){

    return {
        link: function(scope, element, attrs){
            var selectElem = $(element.find('select'));
            selectElem.multiSelect({});
            scope.origin.forEach(function(option){
                selectElem.multiSelect('addOption', {value: option[scope.originValue], text: option[scope.originText]});
            });
            scope.$watch('destModel', function(){
                selectElem.multiSelect('refresh');
            });
            scope.$watch('origin', function(){
                scope.origin.forEach(function(option){
                    selectElem.multiSelect('addOption', {value: option[scope.originValue], text: option[scope.originText]});
                });
                scope.destModel = angular.copy(scope.destModel);
            });

        },
        controller: function($scope, $timeout){
            $timeout(function(){
                $('select').multiSelect('refresh');
            });
        },
        scope: {
            'destModel': '=',
            'origin': "=",
            'originValue': '@',
            'originText': '@'
        },
        template: "<select multiple='multiple' ng-model='destModel'></select>",
        restrict: 'E'
    };
});

})();

