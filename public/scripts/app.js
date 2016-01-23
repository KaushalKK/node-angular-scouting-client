angular.module('scoutingApp', [
    'ui.bootstrap',
    'ui.router'
]);

angular.module('scoutingApp').config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
    
    $urlRouterProvider.otherwise('/');
    
    $stateProvider.state('home', {
        url: '/',
        templateUrl: 'scripts/tpls/landing.html'
    });
    
    $stateProvider.state('home.input', {
        url: '/input',
        templateUrl: 'tpls/input.html'
    });
    
    $stateProvider.state('home.output', {
        url: '/output',
        templateUrl: 'tpls/output.html'
    });
    
    $stateProvider.state('home.output.team', {
        url: '/team',
        templateUrl: 'tpls/out-team.html'
    });
    
    $stateProvider.state('home.output.match', {
        url: '/match',
        templateUrl: 'tpls/out-match.html'
    });
    
}]);