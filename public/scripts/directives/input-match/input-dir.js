/* global fillStyle */
angular.module('scoutingApp').directive('inputTeamMatch', ['inputMatches', function(inputMatches) {
    return {
        templateUrl: 'scripts/directives/input-match/in-match.tpl.html',
        link: function(scope) {
            function initMatch() {
                /* General */
                scope.matchNum = null;
                scope.teamNum = null;
                scope.alliance = null;
                scope.startPosition = 0;
                /* Defences */
                scope.toggleA = false;
                scope.aAutoReach = false;
                scope.aAutoBreach = false;
                scope.aTeleBreach = 0;
                scope.toggleB = false;
                scope.bAutoReach = false;
                scope.bAutoBreach = false;
                scope.bTeleBreach = 0;
                scope.toggleC = false;
                scope.cAutoReach = false;
                scope.cAutoBreach = false;
                scope.cTeleBreach = 0;
                scope.toggleD = false;
                scope.dAutoReach = false;
                scope.dAutoBreach = false;
                scope.dTeleBreach = 0;
                scope.toggleE = false;
                scope.eAutoReach = false;
                scope.eAutoBreach = false;
                scope.eTeleBreach = 0;
                /* Boulder Scoring */
                scope.autoHigh = 0;
                scope.autoLow = 0;
                scope.teleHigh = 0;
                scope.teleLow = 0;
                scope.telePickup = 0;
                scope.teleAttempt = 0;
                /* End Game */
                scope.batterPark = false;
                scope.scale = false;
                scope.challengeBonus = false;
                scope.defenseBonus = false;
                /* Penalties */
                scope.fouls = 0;
                scope.techFouls = 0;
                scope.dq = false;
                /* Comments */
                scope.comments = '';
                
                scope.startPosition = scope.startingPositions[0];
            }
            
            scope.startingPositions = [
                { name: 'A Defense', value: '' },
                { name: 'E Defense', value: '' },
                { name: 'B Defense', value: '' },
                { name: 'C Defense', value: '' },
                { name: 'D Defense', value: '' },
                { name: 'Spy', value: '' }
            ];
            
            initMatch();
            
            var shots = [];
            var canvas = document.getElementById("fieldImage");
            var ctx = canvas.getContext("2d");
            var imageObj = new Image();
            var shotCircleRadius = 5;
            
            imageObj.onload = function() {
                ctx.drawImage(imageObj, 0, 0);
            };
            imageObj.src = "../../../../styles/images/field.jpg";
            
            scope.addOnClick = function(event) {
                var shotX = event.offsetX,
                    shotY = event.offsetY,
                    oldShot = true;

                oldShot = shots.some(function (obj) {
                    return (shotX > (obj.x - shotCircleRadius) && shotX < (obj.x + shotCircleRadius)) && (shotY > (obj.y - shotCircleRadius) && shotY < (obj.y + shotCircleRadius));
                });

                if(!oldShot) {
                    shots.push({
                        x: shotX,
                        y: shotY
                    });

                    ctx.beginPath();
                    ctx.arc(shotX, shotY, shotCircleRadius, 0, 2*Math.PI, false);
                    ctx.closePath();
                    ctx.fillStyle = 'red';
                    ctx.fill();
                }
            };
            
            scope.submit = function() {
                var submitObj = {
                    matchNum: scope.matchNum
                };
                
                inputMatches.submitMatch(submitObj).then(function(resp) {
                    console.log('successful submission');
                });
            };
        }
    }
}]);