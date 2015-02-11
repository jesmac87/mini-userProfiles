var app = angular.module('userProfiles');

app.service('mainService', function($http) {



    this.getUsers = function(page) {
        return $http({
            method: 'GET',
            url: 'http://reqr.es/api/users?page=' + page,
        }).then(function(response) {
            return response.data.data;
        });
    };
});
