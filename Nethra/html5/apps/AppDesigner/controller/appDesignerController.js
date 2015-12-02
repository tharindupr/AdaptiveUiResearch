define(['app'], function (app) {
    'use strict';
    var AppDesignerController = function () {
        var vm = this;
        vm.buttonClick = function () {
            alert('app Desgner');
        };

    };

    app.register.controller('AppDesignerController', AppDesignerController);
});
