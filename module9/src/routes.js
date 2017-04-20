(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/menuapp/templates/home.template.html'
  })

  // Caregories Page
  .state('categories', {
    url: '/categories',
    templateUrl: 'src/menuapp/templates/categories.template/categories.template.html',
    controller: 'CategoriesController as categories',
    resolve: {
      items: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories();
      }]
    }
  })

  // Item detail
  .state('items', {
    url: '/items/:short_name',
    templateUrl: 'src/menuapp/templates/items.template/items.template.html',
    controller: 'ItemsController as items',    
    resolve: {
      items: ['MenuDataService','$stateParams', function (MenuDataService, $stateParams) {
	console.log($stateParams.short_name);
        return MenuDataService.getItemsForCategory($stateParams.short_name);
      }]
    }    
  })

}

})();
