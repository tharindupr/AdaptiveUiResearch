require.config({
    baseUrl: './',
    paths: {
        routeResolver: 'html5/routeResolver',
        app: 'html5/app',
        text: 'libs/require/text',
        jquery: 'libs/jquery/jquery',
        hoverIntent: 'libs/jquery/jquery.hoverIntent.minified',
        angular: 'libs/angular/angular',
        jqueryui:'libs/jquery-ui/jquery-ui',
        'angular-route': 'libs/angular/angular-route',
        urlArgs: 'v=1.1'
    },
    shim: {
        'jquery': {
            exports: 'jquery'
        },
        'angular': {
            exports: 'angular'
        },
        'angular-route': {
            exports: 'ngRoute',
            deps: ['angular']
        }
    },
    priority: [
        'angular'
    ]

});

require([
    'angular',
    'app',
    'angular-route',
    'text',
    'jquery',
    'hoverIntent',
    'jqueryui'
], function (angular, app, route, text) {
        angular.bootstrap($('#frmMain'), ['Nethra'], { strictDi: true });
    }
);
