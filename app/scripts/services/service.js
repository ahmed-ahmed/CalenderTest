'use strict';

/**
 * @ngdoc service
 * @name budgetApp.service
 * @description
 * # service
 * Service in the budgetApp.
 */
angular.module('budgetApp')
  .service('service', function ($q, data) {
    var pageSize = 20;
    var service = {};
    var transactions = data.transactions;
    // var transactions= [{
    //         id: 32542,
    //         description: 'visa payment for card no #####9823',
    //         value: 500.00,
    //         date: '08/12/2015',
    //         category: {id: 1, name: 'education'}
    //     },
    //     {
    //         id: 32542,
    //         description: 'visa payment for card no #####9823',
    //         value: 851.42,
    //         date: '08/12/2015',
    //         category: {id: 1, name: 'education'}
    //     }
    //     ];
    var categories = [
        {id: 1, name: 'Auto', type: 'Expense'},
        {id: 2, name: 'Dining', type: 'Expense'},
        {id: 3, name: 'Education', type: 'Expense'},
        {id: 4, name: 'Entertainment', type: 'Expense'},
        {id: 5, name: 'Gerocery', type: 'Expense'},
        {id: 6, name: 'Health & Fitness', type: 'Expense'},
        {id: 7, name: 'Paycheck', type: 'Income'},
        {id: 8, name: 'Interest', type: 'Income'},
        {id: 9, name: 'Misc Income', type: 'Income'},
        {id: 10, name: 'Rent', type: 'Expense'},
        {id: 11, name: 'Kids', type: 'Expense'},
        {id: 12, name: 'Pets', type: 'Expense'}
    ];

    var accounts = [
    	{id: 1, type: 'checking' ,name: 'DCU', description: 'This is an account at DCU', balance: 35425.12},
    	{id: 2, type: 'saving' ,name: 'Midwest One', description: 'This is an account at DCU', balance: 35425.12},
    	{id: 2, type: 'checking' ,name: 'Midwest One', description: 'This is an account at DCU', balance: 35425.12},
    ];

    var account = {id: 1, type: 'checking' ,name: 'DCU', description: 'This is an account at DCU', balance: 35425.12, 
    	transactions: [{
    		id: 32542,
    		description: 'visa payment for card no #####9823',
    		value: 500.00,
    		date: '08/12/2015',
    		category: {id: 1, name: 'education'}
    	},
		{
    		id: 32542,
    		description: 'visa payment for card no #####9823',
    		value: 500.00,
    		date: '08/12/2015',
    		category: {id: 1, name: 'education'}
    	}
    	]

	};

    var budgets = [
        {id: 1, name: 'Augest 2015'},
        {id: 2, name: 'Sept 2015'}
    ];

    var budget = 
        {
            id: 1, 
            name: 'Augest 2015',
            startDate: '2015-08-01',
            endDate: '2015-08-31',
            goals: [
                {
                    category: {id: 1, name: 'Dining'},
                    spent: 300,
                    remaining: 200,
                    goal: 500,
                    avarage: 250
                },
                {
                    category: {id: 2, name: 'education'},
                    spent: 300,
                    remaining: 200,
                    goal: 500,
                    avarage: 250
                },
                {
                    category: {id: 3, name: 'Gerocery'},
                    spent: 1300,
                    remaining: -200,
                    goal: 1100,
                    avarage: 1000
                }
            ]
    };

    var bills = [
        {
            category: {id: 3, name: 'Electricity'},
            every: 'month',
            nextPayment: 30,
            value: 36.90
        }
    
    ];

    service.getAccounts = function(){
		var deferred = $q.defer();
        deferred.resolve({data: accounts});
        return deferred.promise;
    };

    service.getBudgets = function(){
        var deferred = $q.defer();
        deferred.resolve({data: budgets});
        return deferred.promise;
    };

    service.getCategories = function(){
        var deferred = $q.defer();
        deferred.resolve({data: categories});
        return deferred.promise;
    };

    service.getBudgetDetails = function(id){
        var deferred = $q.defer();
        deferred.resolve({data: budget});
        return deferred.promise;
    };

    service.getAccountDetails = function(id){
		var deferred = $q.defer();
        deferred.resolve({data: account});
        return deferred.promise;
    };

    service.getTransactions = function(pageNo){
        var deferred = $q.defer();
        deferred.resolve({
            total:transactions.length,
            nextPage: pageNo++,
            data: transactions.slice((pageNo - 1) * pageSize, pageNo * pageSize )
        });
        return deferred.promise;
    };


    return service;
  });
