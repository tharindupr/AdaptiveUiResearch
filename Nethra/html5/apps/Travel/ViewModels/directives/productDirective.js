define(['require', 'app'], function (require, app) {
   'use strict';

   app.register.directive('gridDirective', function () {
      return {
         restrict: 'E',
         templateUrl: './html5/apps/Order/Views/directive-templates/grid/grid.html',
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