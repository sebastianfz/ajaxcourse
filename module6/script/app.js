(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.message = "";
  $scope.items = "";
  $scope.Tcolor = {};
  $scope.Bcolor = {};

  $scope.LunchChecker = function () {
    var lunchItems = 0;	
	if (!$scope.items) {
			$scope.message ="Please enter data first";
			$scope.Tcolor = {"color":"red"};
			$scope.Bcolor = {"border":"1px solid red"};
                          }
	else {
  	$scope.message = "";
	var lunchInput = $scope.items.split(',');
  	var index;
  		for(index = 0; index < lunchInput.length; index++){
    			if(lunchInput[index].trim().length > 0)
      				lunchItems++;
	}
		
		$scope.Tcolor = {"color":"green"};
		$scope.Bcolor = {"border":"1px solid green"};

		if (lunchItems <= 3) $scope.message = "Enjoy!";
		else if (lunchItems > 3) $scope.message = "Too much!";
	}
	$scope.lunchItems = lunchItems;
	};


}

})();
