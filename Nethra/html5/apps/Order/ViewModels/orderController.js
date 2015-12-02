define(['require', 'app','./directives/orderDirective','./factories/orderFactory'], function (require, app) {
   'use strict';

app.register.controller('OrderController', ['$scope', function ($scope) {
      var vm = this;
      vm.buttonClick = function () {
         alert('click');
      };


   }]);
});
