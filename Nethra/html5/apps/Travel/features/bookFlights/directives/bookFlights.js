define(['require', 'app'], function (require, app) {
   'use strict';

   app.register.directive('bookDirective', function () {
      return {
         restrict: 'E',
         templateUrl: './html5/apps/Travel/features/bookFlights/views/bookflights.html',
         controller: ['$scope', function ($scope) {

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