'use strict';

/**
 * @ngdoc directive
 * @name budgetApp.directive:progress
 * @description
 * # progress
 */
angular.module('budgetApp')
  .directive('progress', function () {
    return {
      template: '<div>This is the progress</div>',
      restrict: 'E',
      link: function postLink(scope, element) {
        element.text('this is the progress directive');
      }
    };
  });
