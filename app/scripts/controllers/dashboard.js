'use strict';

/**
 * @ngdoc function
 * @name budgetApp.controller:DashboardCtrl
 * @description
 * # DashboardCtrl
 * Controller of the budgetApp
 */
angular.module('budgetApp')
  .controller('DashboardCtrl', function (service, $scope) {

  	$scope.transactions = [];
  	$scope.accounts = [];
  	$scope.categories = [];


    $scope.totalItems = 0
    $scope.currentPage = 1
    $scope.pageChanged = function(){
      service.getTransactions($scope.currentPage).then(function(response){
        $scope.transactions = response.data;
        $scope.totalItems = response.total
      });
    }

	  service.getTransactions($scope.currentPage).then(function(response){
		  $scope.transactions = response.data;
      $scope.totalItems = response.total
  	});

  	service.getAccounts().then(function(response){
  		$scope.accounts = response.data;
  	});

  	service.getCategories().then(function(response){
  		$scope.categories = response.data;
  	});
 

	$scope.categorySelected = function(selected) {
		console.log(selected);
    };

  });
