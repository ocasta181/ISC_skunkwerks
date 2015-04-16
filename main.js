
var app = angular.module('myApp', [])

app.controller('myController',['$scope', function($scope){
	$scope.sync_list = ["this is default"];

	$scope.product_choices = [{ name:"Cache", value:"Cache"},{name:"Ensemble", value:"Ensemble"},
								{name:"HealthShare", value:"HealthShare"},{name:"EnterpriseManager", value:"EnterpriseManager"}];
		$scope.isc_product = $scope.product_choices[0];
	$scope.machines = [{"machineName":"default machine 1","isChecked":true}, 
						{"machineName":"default machine 2", "isChecked":true}];
	$scope.instance = ["default instance"];
	$scope.comments = "default comments";
	$scope.kit = "default kit";
	$scope.returnJSON = {"Kit": $scope.kit, "Product": $scope.isc_product, 
		"SyncList": $scope.sync_list, "Machines": $scope.machines, 
		"Instance": $scope.instance, "Comments": $scope.comments};

	$scope.submitMachine = function(){
		console.log("submit!");
        $scope.machines.push({"machineName":$scope.machine_to_submit,"isChecked":true});
        $scope.machine_to_submit="";
	};


	$scope.mySubmit = function(){

		
	$scope.returnJSON = {"Kit": $scope.kit, "Product": $scope.isc_product, 
	"SyncList": $scope.sync_list, "Machines": $scope.machines, 
	"Instance": $scope.instance, "Comments": $scope.comments};

	console.log('my val is ', $scope.returnJSON);


	/**gpn .
		SyncList="//dev/latest/internal/testing/unit_tests/Basic/functions/int
		//dev/latest/internal/testing/unit_tests/Basic/operators/e
		//dev/latest/internal/testing/unit_tests/buildRegression
		//dev/latest/internal/testing/unit_tests/ClassCompiler/AssemblyLanguageTokens
		//dev/latest/internal/testing/unit_tests/Classes/Library/Collections
		"
		Product="Cache"
		Machines="wellfleet,qdvmwin7x32c"
		Instance="MMATEST123"
		Unicode="Y"
		Comment="short test"
		Kit="2015.2.0.577.0"
	*/

	/**
		// https://docs.angularjs.org/api/ng/service/$http
		// Simple POST request example (passing data) :
		$http.post('/someUrl', {msg:'hello word!'}).
		  success(function(data, status, headers, config) {
		    // this callback will be called asynchronously
		    // when the response is available
		  }).
		  error(function(data, status, headers, config) {
		    // called asynchronously if an error occurs
		    // or server returns response with an error status.
		  });
	*/
	}



}]);

app.directive('ngEnter', function () {
	return {
		controller: "myController",
		link: function (scope, element, attrs) {
		    element.bind("keydown keypress", function (event) {
		        if(event.which === 13) {
		        	console.log("hit enter!");
		            scope.$apply(function (){
		                scope.$eval(attrs.ngEnter);

		            });

		            event.preventDefault();
		        }
		    });
		}
	};
});