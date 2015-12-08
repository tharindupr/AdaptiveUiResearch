/// <reference path="customersController.js" />
/// <reference path="directives/nethraDirective.js" />
define(['require', 'app'], function (require, app) {
   'use strict';


   app.register.controller('LoginController', ['$scope', '$window', '$location', function ($scope, $window, $location) {
      
      
       $scope.username = "";
       $scope.password = "";
       

       $scope.login = function () {

          $window.userid = $scope.username;

          if ($window.userid != "") {
             $location.path('/travel');

          }

          intializeUser($window.userid);
          
       };
       if ($window.userid != "") {
          $location.path('/travel');

       }
      
    
    
    }]);
});
