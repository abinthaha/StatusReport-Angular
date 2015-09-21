spaceApp.controller('statusController', function($scope) {

    status = this;
    $scope.message = 4;

    $(document).on({
        ajaxStart: function() { $( 'model' ).addClass("show_model");},
        ajaxStop: function() { $( 'model' ).removeClass("hide_model"); }
    });

    $.getJSON("assets/json/items.json", function(data){
        $scope.historyItems = data.builtItems;
        $scope.projects = data.projects;
        $scope.types = data.types;
        console.log(data);
    });

    $scope.hours = [];
    //Creating hours
    var i =1;
    for(i=1; i<25; i++)
    {
        $scope.hours.push({id: i, value: i});
    }

    $scope.mints = [];
    //Creating hours
    i =1;
    for(i=1; i<4; i++)
    {
        $scope.mints.push({id: i, value: i*15});
    }

    console.log($scope.hours);
    //Creating Minutes

    //Injecting Dates to the date column
    $scope.date = [];

    var curr = new Date(); // get current date
    var first = curr.getDate(); // First day is the day of the month - the day of the week
    // var last = first + 6; // last day is the first day + 6
    var startDate = new Date(curr.setDate(first));
    startDate = "" + startDate.getFullYear() +"-" +(startDate.getMonth() + 1) + "-" + startDate.getDate() ;

    i = 0;

    for(i=0; i<7;i++)
    {
        var last = first-i;
        var endDate = new Date(curr.setDate(last));
        endDate = endDate.getFullYear() +"-" +(endDate.getMonth() + 1) + "-" + endDate.getDate();

        $scope.date.push({
            id: i,
            title: endDate
        });
    }




    $scope.addItem =  function() {

        var flag = validate();

        if(flag) {
            $scope.historyItems.push(
                {
                    date: $scope.getDate.title,
                    pro_name: $scope.getPro.title,
                    act_type: $scope.getType.title,
                    time: $scope.gethours +':' +$scope.getMints ,
                    description: $scope.getDescription
                });
        }
        $('#ItemForm')[0].reset();
        clearfields();
    };

    var clearfields = function() {
        $scope.gethours = '';
        $scope.getMints = '';
        $scope.getDescription  = '';
    };

    var validate = function(){

        console.log($scope.gethours +" : " +$scope.getMints);
        if($scope.getDate === undefined)
        {
            alert('Date field should not be empty');
            return false;
        }
        else if ($scope.getPro === undefined) {
            alert('Select one project from the list');
            return false;
        }
        else if ($scope.getType === undefined) {
            alert('Select one Activity type from the list');
            return false;
        }
        else if (($scope.gethours === undefined) || ($scope.getMints === undefined) || ($scope.gethours === null) || ($scope.getMints === null)) {
            alert('Working hours should not be Zero');
            return false;
        }
        else if (($scope.getDescription === undefined) || ($scope.getDescription === '')) {
            alert('Enter your Activity Description');
            return false;
        }
        return true;
        //  ||
        //     ($scope.getPro === undefined) ||
        //     ($scope.getType === undefined) ||
        //     ($scope.gethours === undefined) ||
        //     ($scope.getMints === undefined) ||
        //     ($scope.getDescription === undefined))
        //     {
        //
        //     }
    };
});
