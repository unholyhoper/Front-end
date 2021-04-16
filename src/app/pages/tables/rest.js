angular.module('demo', [])
    .controller('Rest', function($scope, $http) {
        $http.get('http://localhost:8181/api/tag/getLastTag').
        then(function(response) {
            $scope.tag = response.data;
        });
    });