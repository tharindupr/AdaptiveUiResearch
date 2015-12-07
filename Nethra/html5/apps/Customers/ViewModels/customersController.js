/// <reference path="customersController.js" />
/// <reference path="directives/nethraDirective.js" />
define(['require', 'app', './directives/nethraDirective', './services/customerService', './factories/customerFactory'], function (require, app) {
   'use strict';


    app.register.controller('CustomersController',['$scope','CustomerService','customerFactory',function ($scope,CustomerService,customerFactory){
      
      // console.log(CustomerService.exampleFunction()); //calling a function from CustomerService Service
      // console.log(customerFactory.function1());       //calling a function from customerFactory Factory
       var vm = this;
       vm.buttonClick = function () {
          alert('click');
       };
    
    
    }]);
});
