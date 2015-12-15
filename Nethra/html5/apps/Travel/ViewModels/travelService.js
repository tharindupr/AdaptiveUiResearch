define(['require', 'app'], function (require, app) {
   'use strict';

   app.register.service('TravelService', ['$http', '$q','$window', function ($http, $q,$window) {

      this.getType = function (userid) {
         var q = $q.defer();
         $http({
            method: 'GET',
            url: 'http://adaptiveui.tk:1338/getProfile/1/'+userid
         }).then(function successCallback(response) {
            q.resolve(response);
         }, function errorCallback(response) {
            q.resolve(response);

         });

         return q.promise;

      };



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

      this.getExplorerLayout = function () {

         var q = $q.defer();
         $http({
            method: 'GET',
            url: 'http://adaptiveui.tk//AdaptiveUiResearch/Nethra/explorer.json'
         }).then(function successCallback(response) {
            q.resolve(response);
         }, function errorCallback(response) {
            q.resolve(response);

         });

         return q.promise;
      };

      this.getTravellerLayout = function () {

         var q = $q.defer();
         $http({
            method: 'GET',
            url: 'http://adaptiveui.tk//AdaptiveUiResearch/Nethra/traveller.json'
         }).then(function successCallback(response) {
            q.resolve(response);
         }, function errorCallback(response) {
            q.resolve(response);

         });

         return q.promise;
      };

      this.getBudgeterLayout = function () {

         var q = $q.defer();
         $http({
            method: 'GET',
            url: 'http://adaptiveui.tk//AdaptiveUiResearch/Nethra/budgeter.json'
         }).then(function successCallback(response) {
            q.resolve(response);
         }, function errorCallback(response) {
            q.resolve(response);

         });

         return q.promise;
      };



   }]);



});