﻿define(['require', 'app'], function (require, app) {
   'use strict';

   app.register.directive('searchDirective', function () {
      return {
         restrict: 'E',
         templateUrl: './html5/apps/Travel/features/reserveHotels/views/reserve.html',
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