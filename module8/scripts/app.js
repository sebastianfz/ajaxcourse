(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItemsDirective)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");
    

function FoundItemsDirective() {
        var ddo = {
            templateUrl: 'founditems.html',
            restrict: 'E',
            scope: {
                foundItems: '<',
                onRemove: '&'
            }
        };
        return ddo;
}

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {  
	var menu = this;	
	menu.found = [];
	menu.narrowdown = function () {
	    menu.found = MenuSearchService.getMatchedMenuItems(menu.searchTerm);	
	  };
}

MenuSearchService.$inject = ['$http', 'ApiBasePath', '$filter'];
function MenuSearchService($http, ApiBasePath, $filter) { 
	var service = this;
	
  	service.getMatchedMenuItems = function (searchTerm) {
	    var result = $http({
	      method: "GET",
	      url: (ApiBasePath + "/menu_items.json")
	    }).then(function (result){
		    // process result and only keep items that match
		    var items = [];
			items = result.data.menu_items;						
		    var foundItems = $filter('filter')(items, {description:searchTerm});
		    console.log(foundItems);
		    // return processed items
		    return foundItems;
		});
	  };
}

})();
