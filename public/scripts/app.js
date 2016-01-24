angular.module('scoutingApp', [
    'ui.bootstrap',
    'ui.router'
]);

angular.module('scoutingApp').config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider.state('home', {
        url: '/home',
        views: {
            "main-nav": {
                templateUrl: 'scripts/tpls/landing.html'
            }
        }
    });
    
    $stateProvider.state('input', {
        url: '/input',
        views: {
            "main-nav": {
                templateUrl: 'scripts/tpls/landing.html'
            },
            "content": {
                templateUrl: 'scripts/tpls/input.html'
            }
        }
    });
    
    $stateProvider.state('output', {
        url: '/output',
        views: {
            "main-nav": {
                templateUrl: 'scripts/tpls/landing.html'
            },
            "content": {
                templateUrl: 'scripts/tpls/output.html'
            }
        }
    });
    
    $stateProvider.state('output.team', {
        url: '/team',
        views: {
            "main-nav": {
                templateUrl: 'scripts/tpls/landing.html'
            },
            "output-type": {
                templateUrl: 'scripts/tpls/out-team.html',
            }
        }
    });
    
    $stateProvider.state('output.match', {
        url: '/match',
        views: {
            "main-nav": {
                templateUrl: 'scripts/tpls/landing.html'
            },
            "output-type": {
                templateUrl: 'scripts/tpls/out-match.html'
            }
        }
    });
    
}]);