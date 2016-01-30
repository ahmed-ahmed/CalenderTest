'use strict';

/**
 * @ngdoc overview
 * @name budgetApp
 * @description
 * # budgetApp
 *
 * Main module of the application.
 */
angular
  .module('budgetApp', [
    'ui.mask',
    'ngMessages',
    'ngMaterial',
    'mp.datePicker',
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'angucomplete-alt',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/accounts', {
        templateUrl: 'views/accounts.html',
        controller: 'AccountsCtrl',
        controllerAs: 'accounts'
      })
      .when('/account/:accountId', {
        templateUrl: 'views/account.html',
        controller: 'AccountCtrl',
        controllerAs: 'account'
      })
      .when('/budgets', {
        templateUrl: 'views/budgets.html',
        controller: 'BudgetsCtrl',
        controllerAs: 'budgets'
      })
      .when('/budget/:budgetId', {
        templateUrl: 'views/budget.html',
        controller: 'BudgetCtrl',
        controllerAs: 'budget'
      })
      .when('/categories', {
        templateUrl: 'views/categories.html',
        controller: 'CategoriesCtrl',
        controllerAs: 'categories'
      })
      .when('/bills', {
        templateUrl: 'views/bills.html',
        controller: 'BillsCtrl',
        controllerAs: 'bills'
      })
      .when('/dashboard', {
        templateUrl: 'views/dashboard.html',
        controller: 'DashboardCtrl',
        controllerAs: 'dashboard'
      })
      .when('/dashboard', {
        templateUrl: 'views/dashboard.html',
        controller: 'dashboardCtrl',
        controllerAs: 'dashboard'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
