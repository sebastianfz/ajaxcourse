(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {  
	var tobuy = this;
	tobuy.tobuyitems = ShoppingListCheckOffService.gettobuyItems();

	tobuy.buy = function (itemIndex) {
    	ShoppingListCheckOffService.bought(itemIndex);
  	};

}


AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {  
	var bought = this;
	bought.boughtitems = ShoppingListCheckOffService.getboughtItems();

}


function ShoppingListCheckOffService() { 
	var service = this;
	
  	var tobuyitems = [
	{
	      name: 'cookies',
	      quantity: 10 ,
	      priceperitem: 5
	},
	{
	      name: 'biscuits',
	      quantity: 15 ,
	      priceperitem: 3
	},
	{
	      name: 'candies',
	      quantity: 200 ,
	      priceperitem: 2
	}
	];
	var boughtitems = [];  
	
	service.bought = function (itemIndex) {
 	    var item = tobuyitems[itemIndex]; 	    
	    boughtitems.push(item);
	    tobuyitems.splice(itemIndex, 1);	    
	  };
	
	service.getboughtItems = function () {
	    return boughtitems;
	  };
	
	service.gettobuyItems = function () {
	    return tobuyitems;
	  };
 

}


})();
