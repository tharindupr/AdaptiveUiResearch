define(['require','app'], function (require, app) {
   'use strict';

   app.register.directive('formDirective', function () {
      return {
         restrict: 'E',
         templateUrl: './html5/apps/Customers/views/directive-templates/nethradirective/nethradirective.html',
         controller:['$scope', function ($scope) {
            
            $scope.submit = function () {
            alert('Form submitted..');
            }

            $scope.cancel = function () {
            alert('Form canceled..');
            }
         }],
        
      }
   });
   
});