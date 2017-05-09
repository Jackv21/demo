var angular = require('angular');
require('angular-ui-router');
require('ui-select');

angular
    .module('demo', ['ui.router', 'ui.select'])
    .config(config);

require('./routes');

function config(routes, $stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $urlRouterProvider.when('', '/');

        //angular-ui-router for multiple views
    routes.forEach($stateProvider.state);
}