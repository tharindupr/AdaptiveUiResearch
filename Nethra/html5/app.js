define(['routeResolver'], function () {
    'use strict';

    var app = angular.module('Nethra', ['ngRoute', 'routeResolverServices']);


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
                    .when('/customers', route.resolve('Customers', 'customers/', 'vm'))
                    .when('/order', route.resolve('Order', 'order/', 'vm'))
                    .when('/appdesigner', route.resolve('AppDesigner', 'appDesigner/', 'vm'))
                    .when('/products',route.resolve('Product','products/','vm'))
                    .otherwise({ redirectTo: '/customers' });
            }
    ]);

    return app;
});


