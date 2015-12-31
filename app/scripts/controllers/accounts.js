'use strict';

/**
 * @ngdoc function
 * @name budgetApp.controller:AccountsCtrl
 * @description
 * # AccountsCtrl
 * Controller of the budgetApp
 */
angular.module('budgetApp')
  .controller('AccountsCtrl', function ($scope, service) {
    service.getAccounts().then(function(response){
		$scope.accounts = response.data;
    });
  });
