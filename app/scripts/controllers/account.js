'use strict';

/**
 * @ngdoc function
 * @name budgetApp.controller:AccountCtrl
 * @description
 * # AccountCtrl
 * Controller of the budgetApp
 */
angular.module('budgetApp')
  .controller('AccountCtrl', function (service, $scope, $routeParams) {
  	service.getAccountDetails($routeParams.accountId).then(function(response){
  		$scope.account = response.data;

  	});
     
  });