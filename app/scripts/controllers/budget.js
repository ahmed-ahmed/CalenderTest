'use strict';

/**
 * @ngdoc function
 * @name budgetApp.controller:BudgetCtrl
 * @description
 * # BudgetCtrl
 * Controller of the budgetApp
 */
angular.module('budgetApp')
  .controller('BudgetCtrl', function (service, $scope, $routeParams) {
    service.getBudgetDetails($routeParams.budgetId).then(function(response){
  		$scope.budget = response.data;

  	});
  });
