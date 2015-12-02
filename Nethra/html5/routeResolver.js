define(['angular'], function () {
    'use strict';
    var routeResolver = function () {

        this.$get = function () {
            return this;
        };

        this.routeConfig = function () {
            var viewsDirectory = 'html5/apps/views/',
                controllersDirectory = 'html5/apps/controllers/',
                baseDir = 'html5/apps/',

            setBaseDirectory = function (baseUrl) {
                baseDir = baseUrl;
            },

            getViewsDirectory = function () {
                return viewsDirectory;
            },

            getControllersDirectory = function () {
                return controllersDirectory;
            },
            getBaseDirectory = function () {
                return baseDir;
            };

            return {
                getBaseDirectory: getBaseDirectory,
                setBaseDirectory: setBaseDirectory,
                getControllersDirectory: getControllersDirectory,
                getViewsDirectory: getViewsDirectory
            };
        }();

        this.route = function (routeConfig) {

            var resolve = function (baseName, path, controllerAs, secure) {
                if (!path) {
                    path = '';
                }

                var routeDef = {};
                var baseFileName = baseName.charAt(0).toLowerCase() + baseName.substr(1);
                //routeDef.templateUrl = routeConfig.getViewsDirectory() + '/' + path + baseFileName + '.html';

                routeDef.templateUrl = routeConfig.getBaseDirectory() + '/' + path + '/Views/' +  baseFileName + '.html';

                routeDef.controller = baseName + 'Controller';
                if (controllerAs) {
                    routeDef.controllerAs = controllerAs;
                }
                routeDef.secure = (secure) ? secure : false;
                routeDef.resolve = {
                    load: ['$q', '$rootScope', function ($q, $rootScope) {
                        //var dependencies = [routeConfig.getControllersDirectory() + '/' + path + baseFileName + 'Controller.js'];                
                        var dependencies = [routeConfig.getBaseDirectory() + '/' + path + '/ViewModels/' + baseFileName + 'Controller.js'];
                        return resolveDependencies($q, $rootScope, dependencies);
                    }]
                };

                return routeDef;
            },

            resolveDependencies = function ($q, $rootScope, dependencies) {
                var defer = $q.defer();
                require(dependencies, function () {
                    defer.resolve();
                    $rootScope.$apply();
                });

                return defer.promise;
            };

            return {
                resolve: resolve
            };
        }(this.routeConfig);

    };

    var servicesApp = angular.module('routeResolverServices', []);

    servicesApp.provider('routeResolver', routeResolver);
});
