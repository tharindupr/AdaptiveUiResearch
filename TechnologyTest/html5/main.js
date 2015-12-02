'use strict';
require.config({
    baseUrl: 'html5',
    paths: {
        text: '../libs/require/text',
        urlArgs: 'v=1.1'
    },
    shim: {
  
    },
    priority: [
    ]
});

require([
    'app',
    'text'
], function (app, text) {
    

});