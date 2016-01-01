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

      vm.participants = [];
  		vm.appointment = {
  			title: ''
  		}
  	
  	vm.deleteDate = function (item){
		var index = vm.dates.indexOf(item);
		vm.dates.splice(index,1);
  	}

    vm.copyFirstRow = function (){
      var firstItem = vm.dates[0];

      for (var i = vm.dates.length - 1; i >= 1; i--) {
        vm.dates[i].fromTime = firstItem.fromTime;
        vm.dates[i].toDate = firstItem.toDate;
      };


    }
    
  });
