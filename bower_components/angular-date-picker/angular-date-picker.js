(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([ 'module', 'angular' ], function (module, angular) {
            module.exports = factory(angular);
        });
    } else if (typeof module === 'object') {
        module.exports = factory(require('angular'));
    } else {
        if (!root.mp) {
            root.mp = {};
        }

        root.mp.datePicker = factory(root.angular);
    }
}(this, function (angular) {
    'use strict';

    return angular.module('mp.datePicker', []).directive('datePicker', [ '$window', '$locale', function ($window, $locale) {
        // Introduce custom elements for IE8
        $window.document.createElement('date-picker');

        var tmpl = ''
+ '<div class="angular-date-picker">'
+ '    <div class="_month">'
+ '        <button type="button" class="_previous" ng-click="changeMonthBy(-1)">&laquo;</button>'
+ '        <span title="{{ months[month].fullName }}">{{ months[month].shortName }}</span> {{ year }}'
+ '        <button type="button" class="_next" ng-click="changeMonthBy(1)">&raquo;</button>'
+ '    </div>'
+ '    <div class="_days" ng-click="pickDay($event)">'
+ '        <div class="_day-of-week" ng-repeat="dayOfWeek in daysOfWeek" title="{{ dayOfWeek.fullName }}">{{ dayOfWeek.firstLetter }}</div>'
+ '        <div class="_day -padding" ng-repeat="day in leadingDays" data-month-offset="-1">{{ day.name }}</div>'
+ '        <div class="_day" ng-repeat="day in days" ng-class="{ \'-selected\': (day.selected), \'-today\': (day.name === today) }"  ng-click="pickDay1(day)">'
+ '             {{ day.name }}'
+ '        </div>'
+ '        <div class="_day -padding" ng-repeat="day in trailingDays" data-month-offset="1">{{ day.name }}</div>'
+ '    </div>'
+ '</div>'
        ;

        return {
            restrict: 'AE',
            template: tmpl,
            replace: true,
            require: '?ngModel',
            scope: {
                onDateSelected: '&',
                formatDate: '=', // @todo breaking change: change to & to allow use of date filter directly
                parseDate: '=',// @todo change to &,
                selectedDates: '='
            },

            link: function ($scope, $element, $attributes, ngModel) {
                if(!$scope.selectedDates){
                    $scope.selectedDates = [];
                    $scope.$watchCollection('selectedDates', function (newNames, oldNames) {
                        //reset the date selection 
                        for (var i = 0; i <= 30; i++) {                       
                            var currentday = days[i];
                            currentday.selected = false;
                            var currentdayDate = new Date($scope.year, $scope.month,  i+1);
                            for(var j = $scope.selectedDates.length  - 1; j >= 0; j--) {
                                var selectedDate = $scope.selectedDates[j];
                                if(currentdayDate.getFullYear() === selectedDate.getFullYear() && 
                                    currentdayDate.getMonth() === selectedDate.getMonth() && 
                                    currentdayDate.getDate() === selectedDate.getDate()){
                                    currentday.selected = true;
                                }  
                            }                                           
                        }
                    });
                }
                var selectedDate = null,
                    days = [], // Slices of this are used for ngRepeat
                    months = [],
                    daysOfWeek = [],
                    firstDayOfWeek = ($locale.DATETIME_FORMATS.FIRSTDAYOFWEEK || 6) + 1 % 7;

                for (var i = 1; i <= 31; i++) {
                    days.push({name:i, selected: false});
                }

                for (var i = 0; i < 12; i++) {
                    months.push({
                        fullName: $locale.DATETIME_FORMATS.MONTH[i],
                        shortName: $locale.DATETIME_FORMATS.SHORTMONTH[i]
                    });
                }

                for (var i = 0; i < 7; i++) {
                    var day = $locale.DATETIME_FORMATS.DAY[(i + firstDayOfWeek) % 7];

                    daysOfWeek.push({
                        fullName: day,
                        firstLetter: day.substr(0, 1)
                    });
                }

                $scope.months = months;
                $scope.daysOfWeek = daysOfWeek;

                function setYearAndMonth(date) {
                    $scope.year = date.getFullYear();
                    $scope.month = date.getMonth();

                    var now = new Date();


                    //reset the date selection 
                    for (var i = 0; i <= 30; i++) {                       
                        var currentday = days[i];
                        currentday.selected = false;
                        var currentdayDate = new Date($scope.year, $scope.month,  i+1);
                        for(var j = $scope.selectedDates.length  - 1; j >= 0; j--) {
                            var selectedDate = $scope.selectedDates[j];
                            if(currentdayDate.getFullYear() === selectedDate.getFullYear() && 
                                currentdayDate.getMonth() === selectedDate.getMonth() && 
                                currentdayDate.getDate() === selectedDate.getDate()){
                                currentday.selected = true;
                            }  
                        }                                           
                    }


                    $scope.today = now.getFullYear() === $scope.year && now.getMonth() === $scope.month
                        ? now.getDate()
                        : null;

                    $scope.selectedDay = selectedDate
                            && selectedDate.getFullYear() === $scope.year
                            && selectedDate.getMonth() === $scope.month
                        ? selectedDate.getDate()
                        : null;

                    var firstDayOfMonth = new Date($scope.year, $scope.month, 1),
                        lastDayOfMonth = new Date($scope.year, $scope.month + 1, 0),
                        lastDayOfPreviousMonth = new Date($scope.year, $scope.month, 0),
                        daysInMonth = lastDayOfMonth.getDate(),
                        daysInLastMonth = lastDayOfPreviousMonth.getDate(),
                        dayOfWeek = firstDayOfMonth.getDay(),
                        leadingDays = (dayOfWeek - firstDayOfWeek + 7) % 7 || 7; // Ensure there are always leading days to give context

                    $scope.leadingDays = days.slice(- leadingDays - (31 - daysInLastMonth), daysInLastMonth);
                    $scope.days = days.slice(0, daysInMonth);
                    // Ensure a total of 6 rows to maintain height consistency
                    $scope.trailingDays = days.slice(0, 6 * 7 - (leadingDays + daysInMonth));
                }

                // Default to current year and month
                setYearAndMonth(new Date());

                if (ngModel) {
                    ngModel.$render = function () {
                        selectedDate = ngModel.$viewValue
                            ? $scope.parseDate
                                ? $scope.parseDate(ngModel.$viewValue)
                                : new Date(ngModel.$viewValue)
                            : null;

                        if (selectedDate && !isNaN(selectedDate)) {
                            setYearAndMonth(selectedDate);
                        } else {
                            // Bad input, stay on current year and month, but reset selected date
                            $scope.selectedDay = null;
                        }
                    };
                }

                $scope.changeMonthBy = function (amount) {
                    var date = new Date($scope.year, $scope.month + amount, 1);
                    setYearAndMonth(date);
                };

                $scope.pickDay1 = function (day) {
                    if(day.selected){
                        day.selected = false;
                        var index = 0; 

                        for(var i = $scope.selectedDates.length  - 1; i >= 0; i--) {
                            var selectedDate = $scope.selectedDates[i];
                            if($scope.year === selectedDate.getFullYear() && $scope.month === selectedDate.getMonth() && day.name === selectedDate.getDate()){
                                $scope.selectedDates.splice(i, 1);
                                return;
                            }
                        }

                        
                    } else {
                        day.selected = true;
                        var selectedDate = new Date($scope.year, $scope.month,  day.name);
                        $scope.selectedDates.push(selectedDate);
                    }

                    // var target = angular.element(evt.target);

                    // if (target.hasClass('_day')) {
                    //     var monthOffset = target.attr('data-month-offset');

                    //     if (monthOffset) {
                    //         $scope.changeMonthBy(parseInt(monthOffset, 10));
                    //     }

                    //     var day = parseInt(target.text(), 10);

                    //     $scope.selectedDay = day;
                    //     selectedDate = new Date($scope.year, $scope.month, day);
                    //     $scope.selectedDates.push(selectedDate);

                    //     if (ngModel) {
                    //         ngModel.$setViewValue(
                    //             $scope.formatDate
                    //                 ? $scope.formatDate(selectedDate)
                    //                 : selectedDate.toLocaleDateString()
                    //         );
                    //     }

                    //     $scope.onDateSelected();
                    // }
                };
                $scope.pickDay = function (evt) {

                    var target = angular.element(evt.target);

                    if (target.hasClass('_day')) {
                        var monthOffset = target.attr('data-month-offset');

                        if (monthOffset) {
                            $scope.changeMonthBy(parseInt(monthOffset, 10));
                        }

                        var day = parseInt(target.text(), 10);

                        $scope.selectedDay = day;
                        selectedDate = new Date($scope.year, $scope.month, day);
                        // $scope.selectedDates.push(selectedDate);

                        if (ngModel) {
                            ngModel.$setViewValue(
                                $scope.formatDate
                                    ? $scope.formatDate(selectedDate)
                                    : selectedDate.toLocaleDateString()
                            );
                        }

                        $scope.onDateSelected();
                    }
                };
            }
        };
    }]);
}));
