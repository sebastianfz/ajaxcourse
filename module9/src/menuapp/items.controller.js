(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemsController', ItemsController);

ItemsController.$inject = ['MenuDataService', 'items'];
function ItemsController(MenuDataService, items) {  
  this.props = items.menu_items;
	this.prop2 = items.category.short_name;
	console.log(items.category.short_name);
}
})();
