'use strict';

/**
 * @ngdoc function
 * @name budgetApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the budgetApp
 */
angular.module('budgetApp')
  .controller('MainCtrl', function ($scope) {
  		var vm = this;

  		vm.appointment = {
  			title: ''
  		}
  	
  	vm.deleteDate = function (item){
		var index = vm.dates.indexOf(item);
		vm.dates.splice(index,1);
  	}
    
  });
