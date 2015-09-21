spaceApp.controller('statusController', function($scope) {

    $scope.Model = $scope.Model ;

    status = this;
    $scope.message = 4;

    $.getJSON("assets/json/items.json", function(data){
        $scope.historyItems = data.builtItems;
        $scope.projects = data.projects;
        $scope.types = data.types;
    });

    //Creating hours

    $scope.hours = [];

    var i =1;
    for(i=1; i<25; i++)
    {
        $scope.hours.push({id: i, value: i});
    }

    //Creating Minutes

    $scope.mints = [];
    i =1;
    for(i=1; i<4; i++)
    {
        $scope.mints.push({id: i, value: i*15});
    }

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

        console.log($scope.historyItems.getDate.title);

        var flag = validate();

        if(flag) {
            $scope.historyItems.push(
                {
                    date: $scope.historyItems.getDate.title,
                    pro_name: $scope.historyItems.getPro.title,
                    act_type: $scope.historyItems.getType.title,
                    time: $scope.historyItems.gethours.value +':' +$scope.historyItems.getMints.value ,
                    description: $scope.historyItems.getDescription
                });
        }
        $('#ItemForm')[0].reset();
        clearfields();
    };

    var clearfields = function() {
        $scope.historyItems.gethours = '';
        $scope.historyItems.getMints = '';
        $scope.historyItems.getDescription  = '';
    };

    var validate = function(){

        // console.log($scope.gethours +" : " +$scope.getMints);
        if($scope.historyItems.getDate === undefined)
        {
            alert('Date field should not be empty');
            return false;
        }
        else if ($scope.historyItems.getPro === undefined) {
            alert('Select one project from the list');
            return false;
        }
        else if ($scope.historyItems.getType === undefined) {
            alert('Select one Activity type from the list');
            return false;
        }
        else if (($scope.historyItems.gethours === undefined) || ($scope.historyItems.getMints === undefined) || ($scope.historyItems.gethours === null) || ($scope.historyItems.getMints === null)) {
            alert('Working hours should not be Zero');
            return false;
        }
        else if (($scope.historyItems.getDescription === undefined) || ($scope.historyItems.getDescription === '')) {
            alert('Enter your Activity Description');
            return false;
        }
        return true;
    };
});
