var app = angular.module('groceryListApp', ["ngRoute"]);

app.config(function($routeProvider) {
	$routeProvider
        .when('/',{
            templateUrl: 'views/groceryList.html',
            controller: "GroceryListItemsController"

        })
        .when('/addItem',{
            templateUrl: 'views/addItem.html',
            controller: "GroceryListItemsController"

        })
        .when('/addItem/:id',{
            templateUrl: 'views/addItem.html',
            controller: "GroceryListItemsController"

        })
        .otherwise({
            redirect: '/'
        })

});

app.controller("HomeController", ["$scope", "GroceryService", function($scope, GroceryService) {
	// body...
	$scope.appTitle = "Grocery List";

}]);


app.service("GroceryService", function(){
    var groceryService = [];
    groceryService.groceryItems = [
        {id: 1, completed: true, itemName: 'milk', date: '2016-10-01'},
        {id: 2, completed: true, itemName: 'cookies', date: '2014-10-01'},
        {id: 3, completed: true, itemName: 'ice cream', date: '2014-10-02'},
        {id: 4, completed: true, itemName: 'potatoes', date: '2014-10-02'},
        {id: 5, completed: true, itemName: 'cereal', date: '2014-10-03'},
        {id: 6, completed: true, itemName: 'bread', date: '2014-10-03'},
        {id: 7, completed: true, itemName: 'eggs', date: '2014-10-04'},
        {id: 8, completed: true, itemName: 'tortillas', date: '2014-10-04'}
    ];

    groceryService.save = function(entry) {
        groceryService.groceryItems.push(entry);
    };

    return groceryService;


})

app.controller("GroceryListItemsController", ["$scope", "$routeParams", "$location", "GroceryService", function($scope, $routeParams, $location, GroceryService){

        $scope.groceryItems = GroceryService.groceryItems;
        //$scope.rp ="Route Params Value: " + $routeParams.id;

         //to display the ng-model itemName in the field by default
        $scope.save = function(form){

		$scope.groceryItem = { id: 7, completed: true, itemName: $scope.itemName1, date: new Date() }	
			
			//alert(groceryItems.itemName);
        GroceryService.save($scope.groceryItem); // save a perticular item
        $location.path("/"); //location of the page after saving the item
    }
}]);