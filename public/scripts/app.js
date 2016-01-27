angular.module('scoutingApp', [
    'ui.bootstrap',
    'ui.router'
]);

angular.module('scoutingApp').config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider.state('home', {
        url: '/home',
        views: {
            "main": {
                templateUrl: 'scripts/tpls/landing.html',
                controller: function($scope) {
                    $scope.mainNavTabs = [
                        {name: 'Input', value: 'home.input', active: true},
                        {name: 'Output', value: 'home.output', active: false}
                    ];
                }
            }
        }
    });
    
    $stateProvider.state('home.input', {
        url: '/input',
        views: {
            "content": {
                templateUrl: 'scripts/tpls/input.html',
                controller: function($scope) {
                    $scope.inputTabs = [
                        {name: 'Match', value: 'home.input.match', active: true},
                        {name: 'Team List', value: 'home.input.teams', active: false}
                    ];
                }
            }
        }
    });
    
    $stateProvider.state('home.input.match', {
        url: '/match',
        views: {
            "input": {
                template: '<div input-team-match></div>'
            }
        }
    });
    
    $stateProvider.state('home.input.teams', {
        url: '/teams',
        views: {
            "input": {
                template: '<div input-team-teams></div>'
            }
        }
    });
    
    $stateProvider.state('home.output', {
        url: '/output',
        views: {
            "content": {
                templateUrl: 'scripts/tpls/output.html'
            }
        }
    });
    
    $stateProvider.state('home.output.team', {
        url: '/team',
        templateUrl: 'scripts/tpls/out-team.html',
    });
    
    $stateProvider.state('home.output.match', {
        url: '/match',
        templateUrl: 'scripts/tpls/out-match.html'
    });
    
}]);