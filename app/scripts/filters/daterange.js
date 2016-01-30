'use strict';

/**
 * @ngdoc filter
 * @name budgetApp.filter:dateRange
 * @function
 * @description
 * # dateRange
 * Filter in the budgetApp.
 */
angular.module('budgetApp')
  .filter('dateRange', function () {
	return function(input, startDate, endDate) {
		var retArray = [];
		if(! startDate) {
			return input;
		}
		angular.forEach(input, function(obj){
			if(obj.fromDate >= startDate && obj.fromDate <= endDate) {
				retArray.push(obj);			
			}
		}); 
		
		return retArray; 
	}
  });
