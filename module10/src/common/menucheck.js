(function () {
"use strict";

angular.module('common')
.directive('menucheck', menucheck);

menucheck.$inject = ['$http','$q','ApiPath'];
function menucheck($http, $q, ApiPath) {
  return {
    require: 'ngModel',
    link: function(scope, elm, attrs, ctrl) {


      ctrl.$asyncValidators.menucheck = function(modelValue, viewValue) {

        if (ctrl.$isEmpty(modelValue)) {
          // consider empty model valid
          return def.resolve();
        }

          var def = $q.defer();

        $http.get('https://ajaxcourse-module10.herokuapp.com/menu_items/' + modelValue + '.json')
       .then(function successCallback(response) {
           def.resolve();
         }, function errorCallback(response) {
           def.reject();
         });
         return def.promise;

      };
    }
  };
}
})();
