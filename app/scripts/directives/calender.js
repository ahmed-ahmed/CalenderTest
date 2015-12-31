'use strict';

/**
 * @ngdoc directive
 * @name budgetApp.directive:calender
 * @description
 * # calender
 */
angular.module('budgetApp')
  .directive('calender', function () {
    return {
      templateUrl: 'scripts/directives/calender.html',
      restrict: 'E',
      // link: function postLink(scope, element, attrs) {
      //   element.text('this is the calender directive');
      // }
    };
  });
