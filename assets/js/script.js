
// Creating the module.
//Including ngRoute for all our routing needs.
var spaceApp = angular.module('spaceApp', ['ngRoute']);
//Configuring our routes
spaceApp.config(function($routeProvider) {
    $routeProvider
        // route for the home page
        .when('/', {
            templateUrl : 'app/views/home.html'
        })

        // route for the about page
        .when('/status', {
            templateUrl : 'app/views/dailyStatus.html',
            controller : 'statusController'
        });
});
