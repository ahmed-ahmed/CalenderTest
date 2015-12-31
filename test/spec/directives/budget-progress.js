'use strict';

describe('Directive: budgetProgress', function () {

  // load the directive's module
  beforeEach(module('budgetApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<budget-progress></budget-progress>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the budgetProgress directive');
  }));
});
