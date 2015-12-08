define(['require', 'app', './travelService','../features/bookFlights/directives/bookFlights' ,'./directives/searchLocation'], function (require, app) {
   'use strict';

   app.register.controller('TravelController', ['$scope', 'TravelService', '$window','$location', function ($scope, ProductService, $window,$location) {

   if ($window.userid == "") {
         $location.path('/login');

   }

   alert("welcome " + $window.userid);
   var vm = this;
   $scope.layout = "";
   ProductService.getLayout().then(function (res) {
      
      $scope.layout = res.data.rows;
      $scope.baseUrl = "html5/apps/";
      $scope.app = "Travel";

      $scope.getView = function (feature,directive) {

         return ($scope.baseUrl + $scope.app +"/features/"+ feature+  "/views/" + directive + ".html");
      }


   });

   $scope.init_features = function() {
        trackFeatures();
    }

   }]);


});
