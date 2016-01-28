angular.module('scoutingApp').directive('outputTeams', ['$http', function($http) {
    return {
        templateUrl: 'scripts/directives/output-team-list/out-all-teams.tpl.html',
        link: function(scope) {
            /* MOCK TEAMS LIST */
            scope.teams = [
                {
                    number: 1523,
                    rank: 3,
                    played: 10,
                    wins: 7,
                    losses: 2,
                    avgPoints: 15.00,
                    avgPenalties: 1.2,
                    dqs: 1
                },
                {
                    number: 738,
                    rank: 1,
                    played: 10,
                    wins: 10,
                    losses: 0,
                    avgPoints: 23.12,
                    avgPenalties: 0.2,
                    dqs: 0
                },
                {
                    number: 234,
                    rank: 2,
                    played: 10,
                    wins: 9,
                    losses: 1,
                    avgPoints: 20.12,
                    avgPenalties: 0.5,
                    dqs: 0
                }
            ];
        }
    }
}]);