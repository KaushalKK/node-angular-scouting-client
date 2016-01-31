angular.module('scoutingApp').service('inputMatches', ['$http', function($http) {
    this.submitMatch = function(matchObj) {
        console.log(matchObj);
        return;
    };
}]);