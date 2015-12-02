define(['require', 'app','./productService'], function (require, app) {
   'use strict';

app.register.controller('ProductController', ['$scope','ProductService', function ($scope,ProductService) {
   var vm = this;
   $scope.layout = "";
   ProductService.getLayout().then(function (res) {
      
      $scope.layout = res.data.rows;
      


    

   });



   }]);
});
