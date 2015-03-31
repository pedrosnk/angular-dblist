describe('the truth', function(){

  var $compile, $rootScope;

  beforeEach(module('dblist'));

  beforeEach(inject(function(_$compile_, _$rootScope_){
    $compile = _$compile_;
    $rootScope = _$rootScope_;
  }));

  var createDbList = function(){
    $rootScope.listItems = [
      {"itemName": "item1", "itemId": "1"},
      {"itemName": "item2", "itemId": "2"},
      {"itemName": "item3", "itemId": "3"}
    ];

    var dbListString = '<double-list origin="listItems" '+
      ' origin-value="itemId" origin-text="itemName" dest-model="itemsId"></double-list';
    var dbList = angular.element(dbListString);
    var dbListElement = $compile(dbList)($rootScope);
    $rootScope.$digest();

    return dbListElement;
  };

	it('displays the double-list', function(){
    var dbListElement = createDbList();
    expect(dbListElement.find('.ms-selectable').length).not.toBe(0);
    expect(dbListElement.find('.ms-selection').length).not.toBe(0);
    expect(dbListElement.find('option').length).toBe(3);
	});

});
