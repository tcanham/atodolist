var app = angular.module("toDo", []);

app.controller("toDoList", ["$scope", function($scope) {
	
		/*Create array to hold list items*/
		$scope.listItems = [];
		    /*Fetch current list from local storage*/
		var getData = localStorage.getItem("list");
		/*Parse the retrived string into an array*/
		var checkData = JSON.parse(getData);
		/*Check if the array contains any values */
		if (checkData.length >0) {
        $scope.Msg = "You have a saved list";
    };
		/* Function to add items to listItems array*/
		$scope.addItem = function () {
			if($scope.input){
			$scope.listItems.push({todo_item:$scope.input});
			$scope.input = '';
			$scope.Msg = '';
			}else{
				$scope.Msg = 'No To Do Item Entered';
			};
		};
		/* Function to remove items from listItems array*/
		$scope.remove = function(index) {
			$scope.listItems.splice(index, 1)
		};
		
		 /*Function to load a saved list into scope from local storage*/
		$scope.loadList = function () {
        var retrievedData = localStorage.getItem("list");
        var listData = JSON.parse(retrievedData);
        $scope.listItems = listData;
        $scope.Msg = ' ';
		};
		/*Function to save the array '$scope.listItems' to local storage*/
		$scope.saveList = function () {
        localStorage.setItem("list", JSON.stringify($scope.listItems));
        $scope.Msg = 'List saved ';
		};
}]);
