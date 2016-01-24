angular.module('scoutingApp').directive('navTabs', ['$http', function($http) {
    return {
        templateUrl: 'scripts/tpls/nav-tabs.tpl.html',
        link: function(scope) {
            scope.tabs = [
                {name: 'Input', value: 'input', active: true},
                {name: 'Output', value: 'output', active: false}
            ];
            
            scope.changeActive = function(tab) {
                console.log(tab);
                if(!tab.active) {
                    
                }
            };
        }
    }
}]);