var app = angular.module('hyundai-dealer', []);
app.controller('MainController', function($scope, $http) {

	/*** Receiving data from API ***/
    var url_campaigns = "./assets/json/list-campaigns.json";
    $http({
        method: 'GET',
        header: {
            'Content-Type': 'application/json;charset=utf-8;'
        },
        url: url_campaigns
    }).then(function (response) {
        $scope.campaigns = response.data;
    }, function (response) {
        console.log(response);
    });

    var url_notifications = "./assets/json/list-notifications.json";
    $http({
        method: 'GET',
        header: {
            'Content-Type': 'application/json;charset=utf-8;'
        },
        url: url_notifications
    }).then(function (response) {
        $scope.notifications = response.data;
    }, function (response) {
        console.log(response);
    });
    /*** Receiving data from API ***/


    /*** Filtering Notifications ***/
    $scope.notificationType = function(type) {
    	$scope.notificationTypeValue = type;
	}

    $scope.notificationTypeFilter = function(notification) {
    	if($scope.notificationTypeValue == undefined){
    		$scope.notificationTypeValue = 0;
    	}

    	if($scope.notificationTypeValue == notification.type || $scope.notificationTypeValue == 0){
    		return true;

    	}else{
    		return false;
    	}
	}
	/*** Filtering Notifications ***/

	/*** Filtering Table ***/
	$scope.sortType     = 'date'; 
	$scope.sortReverse  = true;
	/*** Filtering Notifications ***/

});
