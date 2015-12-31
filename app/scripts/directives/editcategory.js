'use strict';

/**
 * @ngdoc directive
 * @name budgetApp.directive:editCategory
 * @description
 * # editCategory
 */
angular.module('budgetApp')
  .directive('editCategory', function ($compile) {
    return {
    	scope:{
    		category: '@',
    		categories:'=',
    	 	selectionChanged: '&'
    	},
    	template: '<div ng-click="editInPlace()" ng-hide="editMode" class="edit-box">{{category}}&nbsp;</div>',
	    restrict: 'E',
	    controller: function($scope, $element, $attrs){
	    	var el;
	    	$scope.editInPlace = function(){
	    		$scope.editMode = !$scope.editMode;
	     		var template = '<angucomplete-alt ng-show="editMode" placeholder="Search categories" pause="100" '
				 		+ 'selected-object="categorySelected" '
				 		+ 'local-data="categories" search-fields="name" title-field="name"  minlength="1" '
				 		+ 'match-class="highlight" '
				 		+ 'input-class="form-control form-control-small"/>';

				el = $compile(template)($scope);
				$element.append(el);
	    	};
	    	$scope.categorySelected = function(selected) {
				 if(selected){
		     		$scope.category = selected.originalObject.name;
	     			$scope.selectionChanged(selected);
	     			$scope.editMode = !$scope.editMode;
	     			el.remove();
	     		}
	     	};
	    }
    };
  });
