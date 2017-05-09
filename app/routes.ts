var routes = [
    {
        name: 'root',
        url: '/',
        template: '<div>hello ll</div>'
    }
];

angular
    .module('demo')
    .constant('routes', routes);