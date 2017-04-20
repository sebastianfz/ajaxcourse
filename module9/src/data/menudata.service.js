(function () {
'use strict';

angular.module('data')
.service('MenuDataService', MenuDataService);


MenuDataService.$inject = ['$http','$stateParams']
function MenuDataService($http,$stateParams) {
  var service = this;

  service.getAllCategories = function () {
    var response = $http({
      method: "GET",
      url: ('https://davids-restaurant.herokuapp.com/categories.json')
    });
    return response.then(function (response) {
                    return response.data;
                });
  };

  service.getItemsForCategory = function (categoryShortName) {
    var response = $http({
      method: "GET",
      url: ('https://davids-restaurant.herokuapp.com/menu_items.json'),
      params: {
        category: categoryShortName
      }
    });

    return response.then(function (response) {
                    return response.data;
                });
  };

 
}

})();
