(function () {
"use strict";

angular.module('public')
.controller('signupController', signupController);

signupController.$inject = ['userService'];
function signupController(userService) {
  var $ctrl = this;
  $ctrl.user = userService.user;
  $ctrl.submit = function () {
    $ctrl.completed = true;
    $ctrl.user.registered = true;
  };
}


})();
