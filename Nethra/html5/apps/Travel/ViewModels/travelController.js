define(['require', 'app', './travelService','../features/bookFlights/directives/bookFlights' ,'./directives/searchLocation'], function (require, app) {
   'use strict';

   app.register.controller('TravelController', ['$scope', 'TravelService', '$window','$location', function ($scope, ProductService, $window,$location) {

   if ($window.userid == "") {
         $location.path('/login');

   }

   //alert("welcome " + $window.userid);
   var vm = this;
   $scope.layout = "";
   


   if (typeof $window.userid != 'undefined') {

      ProductService.getType($window.userid).then(function (res) {
         if (res.data == 0) {


            ProductService.getLayout().then(function (res) {

               $scope.layout = res.data.rows;
               $scope.baseUrl = "html5/apps/";
               $scope.app = "Travel";

               $scope.getView = function (feature, directive) {

                  return ($scope.baseUrl + $scope.app + "/features/" + feature + "/views/" + directive + ".html");
               }


            });
         }

         else if (res.data == 1) {
            ProductService.getExplorerLayout().then(function (res) {

               $scope.layout = res.data.rows;
               $scope.baseUrl = "html5/apps/";
               $scope.app = "Travel";

               $scope.getView = function (feature, directive) {

                  return ($scope.baseUrl + $scope.app + "/features/" + feature + "/views/" + directive + ".html");
               }


            });


         }

         else if (res.data == 2) {
            ProductService.getTravellerLayout().then(function (res) {

               $scope.layout = res.data.rows;
               $scope.baseUrl = "html5/apps/";
               $scope.app = "Travel";

               $scope.getView = function (feature, directive) {

                  return ($scope.baseUrl + $scope.app + "/features/" + feature + "/views/" + directive + ".html");
               }


            });


         }
         else if (res.data == 3) {
            ProductService.getBudgeterLayout().then(function (res) {

               $scope.layout = res.data.rows;
               $scope.baseUrl = "html5/apps/";
               $scope.app = "Travel";

               $scope.getView = function (feature, directive) {

                  return ($scope.baseUrl + $scope.app + "/features/" + feature + "/views/" + directive + ".html");
               }


            });


         }


      });
      
   };
   

   $scope.init_features = function() {
        trackFeatures();
    }

   }]);


});
