'use strict';

/**
 * @ngdoc function
 * @name budgetApp.controller:BudgetsCtrl
 * @description
 * # BudgetsCtrl
 * Controller of the budgetApp
 */
angular.module('budgetApp')
  .controller('BudgetsCtrl', function (service, $scope) {
     service.getBudgets().then(function(response){
		$scope.budgets = response.data;
    });
  });
