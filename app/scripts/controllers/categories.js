'use strict';

/**
 * @ngdoc function
 * @name budgetApp.controller:CategoriesCtrl
 * @description
 * # CategoriesCtrl
 * Controller of the budgetApp
 */
angular.module('budgetApp')
  .controller('CategoriesCtrl', function (service, $scope) {
     service.getCategories().then(function(response){
		$scope.categories = response.data;
  });
});