'use strict';

describe('Directive: editCategory', function () {

  // load the directive's module
  beforeEach(module('budgetApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<edit-category></edit-category>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the editCategory directive');
  }));
});
