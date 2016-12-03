var module = angular.module('myModule', []);

module.factory('getTime', function() {
    return function() {
        var date = new Date();
        return date.toString();
    }
})
