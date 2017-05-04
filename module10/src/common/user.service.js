(function () {
"use strict";

angular.module('common')
.service('userService', userService);


userService.$inject = ['$http', 'ApiPath'];
function userService($http, ApiPath) {
  var service = this;
  service.user = {firstname:'',lastname:'',email:'',phone:'',shortname:'',registered:''}
  service.getmenuItem = function (shortname) {
    return $http.get(ApiPath + '/menu_items/' + shortname + '.json').then(function (response) {
      return response;

    })
      return response;
  };
    //service.user = {firstname:'',lastname:'',email:'',phone:''};


}


})();
