define(['routeResolver'], function () {
    'use strict';
    var app = angular.module('Nethra', ['ngRoute', 'routeResolverServices']);

   //checing for loged in status



    app.config(['$routeProvider', 'routeResolverProvider', '$controllerProvider',
               '$compileProvider', '$filterProvider', '$provide', '$httpProvider',

       function ($routeProvider, routeResolverProvider, $controllerProvider,
                 $compileProvider, $filterProvider, $provide, $httpProvider) {

                app.register =
                {
                    controller: $controllerProvider.register,
                    directive: $compileProvider.directive,
                    filter: $filterProvider.register,
                    factory: $provide.factory,
                    service: $provide.service
                };

                routeResolverProvider.routeConfig.setBaseDirectory('html5/apps/');
                var route = routeResolverProvider.route;

                $routeProvider
                    .when('/customers', route.resolve('Customers', 'Customers/', 'vm'))
                    .when('/order', route.resolve('Order', 'Order/', 'vm'))
                    .when('/appdesigner', route.resolve('AppDesigner', 'AppDesigner/', 'vm'))
                    .when('/travel', route.resolve('Travel', 'Travel/', 'vm'))
                   .when('/login', route.resolve('Login', 'Login/', 'vm'))
                    .otherwise({ redirectTo: '/login' });
            }
    ]);

    return app;
});


var userid = "";