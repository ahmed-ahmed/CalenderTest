'use strict';

describe('Filter: dateRange', function () {

  // load the filter's module
  beforeEach(module('budgetApp'));

  // initialize a new instance of the filter before each test
  var dateRange;
  beforeEach(inject(function ($filter) {
    dateRange = $filter('dateRange');
  }));

  it('should return the input prefixed with "dateRange filter:"', function () {
    var text = 'angularjs';
    expect(dateRange(text)).toBe('dateRange filter: ' + text);
  });

});
