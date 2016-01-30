'use strict';

/**
 * @ngdoc function
 * @name budgetApp.controller:DashboardCtrl
 * @description
 * # DashboardCtrl
 * Controller of the budgetApp
 */
angular.module('budgetApp')
  .controller('dashboardCtrl', function () {
  	var vm = this;

  	vm.dateFilter = function(range){
  		if(range === 'month'){
  			vm.startDate = moment().startOf('month');
			vm.endDate = moment().endOf('month')
  		} else if(range === 'week') {
  			vm.startDate = moment().startOf('week');
			vm.endDate = moment().endOf('week')
  		} else if(range === 'year') {
  			vm.startDate = moment().startOf('year');
			vm.endDate = moment().endOf('year')
  		} else if(range === 'today') {
  			vm.startDate = moment();
			vm.endDate = moment().add(1, 'days');
  		} else {
  			vm.startDate = vm.endDate = null;
  		}

  	}

  	vm.appointments = [
  		{
  			fromDate: new Date('2016 01 01'), toDate: new Date('2016 01 15'), 
  			fromTime: new Date(), toTime: new Date(),
  			Duration: '00:30:00', participants: 5, status: 'in progress', 
  		}, 
  		{
  			fromDate: new Date('2016 01 25'), toDate: new Date('2016 02 15'), 
  			fromTime: new Date(), toTime: new Date(),
  			Duration: '00:30:00', participants: 5, status: 'in progress'  
  		}, 
  		{
  			fromDate: new Date('2015 02 01'), toDate: new Date('2015 02 01'), 
  			fromTime: new Date(), toTime: new Date(),
  			Duration: '00:30:00', participants: 5, status: 'in progress'  
  		}, 
  		{
  			fromDate: new Date('2015 02 01'), toDate: new Date('2015 02 01'), 
  			fromTime: new Date(), toTime: new Date(),
  			Duration: '00:30:00', participants: 5, status: 'in progress'  
  		}, 
  		{
  			fromDate: new Date('2015 02 01'), toDate: new Date('2015 02 01'), 
  			fromTime: new Date(), toTime: new Date(),
  			Duration: '00:30:00', participants: 5, status: 'in progress'  
  		}, 
  	];

  	vm.participants = [
  		{id: 1, name: 'Ahmed Ahmed'},
  		{id: 2, name: 'Mohamed Ahmed'}
  	]
    
  });
