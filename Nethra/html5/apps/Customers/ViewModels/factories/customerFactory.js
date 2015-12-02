define(['require', 'app'], function (require, app) {
   'use strict';

   app.register.factory('customerFactory', function () {

      function function1() {

         return 2;

      }

      return {
         function1: function1
      }
   });

});