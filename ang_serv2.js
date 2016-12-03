var module = angular.module('app', ['myModule']);

module.controller('MyCtrl', function(getTime, $scope) {
    $scope.time = getTime();
});
