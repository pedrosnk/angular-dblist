(function(){
'use strict';
angular.module('dblist', []);
})();


(function(){
'use strict';
var module = angular.module('dblist');
module.directive('dubleList', function(){
    /**
     * Loads options into the select list
     */
    var loadingOptions = function(scope, element){
        var selectElem = $(element.find('select'));
        scope.origin.forEach(function(option){
            selectElem.multiSelect('addOption', {value: option[scope.originValue], text: option[scope.originText]});
        });
    };

    return {
        link: function(scope, element, attrs){
            var selectElem = $(element.find('select'));
            selectElem.multiSelect({});
            loadingOptions(scope, element);
            scope.$watch('destModel', function(){
                selectElem.multiSelect('refresh');
            });
            scope.$watch('origin', function(newValue, oldValue){
                selectElem.find('option').remove();
                selectElem.multiSelect('refresh');
                loadingOptions(scope, element);
                // to trigger the refresh
                scope.destModel = angular.copy(scope.destModel);
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

