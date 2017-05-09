var routes = [
    {
        name: 'root',
        url: '/',
        template: '<div>TEST</div>'
    }
];

angular
    .module('demo')
    .constant('routes', routes);