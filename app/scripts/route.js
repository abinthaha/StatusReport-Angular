//Configuring our routes
spaceApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider

        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            templateUrl: 'app/views/home.html'
        })

        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('status', {
        url: '/status',
        views: {

            // the main template will be placed here (relatively named)
             '': { templateUrl: 'app/views/dailyStatus.html' ,
                controller: 'statusController'
            },

            // the child views will be defined here (absolutely named)
            'columnOne@status': {
                templateUrl: 'app/views/status.html',
                parent: 'status'
            },

            // for column two, we'll define a separate controller
            'columnTwo@status': {
                templateUrl: 'app/views/history.html',
                parent: 'status'
            }
        }
    });
});
