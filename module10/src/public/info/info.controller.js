(function () {
"use strict";

angular.module('public')
.controller('infoController', infoController);

infoController.$inject = ['userService'];
function infoController(userService) {
  var $ctrl = this;
  $ctrl.user = userService.user;
  $ctrl.basePath = 'http://www.davidchuschinabistro.com';
  $ctrl.test = null;
  var menuItem = userService.getmenuItem($ctrl.user.shortname).then(function(response) {
         $ctrl.test = response.data;
     });;
     console.log($ctrl.user.registered); 
}

})();
