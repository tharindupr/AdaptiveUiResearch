define(['require', 'app', './travelService', './directives/searchLocation'], function (require, app) {
   'use strict';

app.register.controller('TravelController', ['$scope','TravelService', function ($scope,ProductService) {
   var vm = this;
   $scope.layout = "";
   ProductService.getLayout().then(function (res) {
      
      $scope.layout = res.data.rows;
      


    

   });



   }]);
});
