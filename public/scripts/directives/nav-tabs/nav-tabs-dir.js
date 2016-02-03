angular.module('scoutingApp').directive('navTabs', ['$http', function($http) {
    return {
        scope: {
            tabs: '=',
            orientation: '@' 
        },
        templateUrl: 'scripts/directives/nav-tabs/nav-tabs.tpl.html',
        link: function(scope) {
            scope.isVertical = false;
            scope.orientation !== undefined ? scope.isVertical = scope.orientation : scope.isVertical = false;
        }
    }
}]);