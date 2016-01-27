angular.module('scoutingApp').directive('inputTeamMatch', ['$http', function($http) {
    return {
        templateUrl: 'scripts/directives/input-match/in-match.tpl.html',
        link: function(scope) {
            function initMatch() {
                
            }
            
            initMatch();
            
            scope.submit = function() {
                
            };
        }
    }
}]);