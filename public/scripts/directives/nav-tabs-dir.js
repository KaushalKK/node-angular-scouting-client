angular.module('scoutingApp').directive('navTabs', ['$http', function($http) {
    return {
        templateUrl: 'scripts/tpls/nav-tabs.tpl.html',
        link: function(scope) {
            scope.tabs = [
                {name: 'Input', value: 'input'},
                {name: 'Output', value: 'output'}
            ];
        }
    }
}]);