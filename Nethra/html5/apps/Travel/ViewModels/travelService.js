﻿define(['require', 'app'], function (require, app) {
   'use strict';

   app.register.service('TravelService',['$http','$q', function ($http,$q) {


      this.getLayout = function () {
         var q=$q.defer();
         $http({
            method: 'GET',
            url: 'http://adaptiveui.tk//AdaptiveUiResearch/Nethra/layout.json'
         }).then(function successCallback(response) {
            q.resolve(response);
            
         }, function errorCallback(response) {
            q.resolve(response);
       
         });
         
         return q.promise;
      };



   }]);



});