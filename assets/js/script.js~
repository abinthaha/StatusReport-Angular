
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

    // Creating the controller
spaceApp.controller('mainController', function($scope){
    $scope.message = 'Hello WOrld';
});

spaceApp.controller('statusController', function($scope) {

    status = this;
    $scope.message = 4;

    $.getJSON("app/items.json", function(data){
        $scope.historyItems = data.builtItems;
        $scope.projects = data.projects;
        $scope.types = data.types;
    });

    $scope.addItem =  function() {
        $scope.historyItems.push(
            {
                date: $('#dateWork').val(),
                pro_name: $scope.getPro.title,
                act_type: $scope.getType.title,
                time: $scope.gethours +':' +$scope.getMints ,
                description: $scope.getDescription
            }
        );
        $('#ItemForm')[0].reset();
    };
});
