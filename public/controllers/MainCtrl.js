var app = angular.module("tutableApp", ['ui.bootstrap']); 
app.controller("MainCtrl", ['$scope', '$uibModal', function($scope, $uibModal) {
    $scope.username = "nikhil.rabindra";
  
  //Data sets (Like databases in the backend)
  $scope.users = [{"name": "Nahum", "city": "Atlanta", "college": "Tech"},
                 {"name": "Addison", "city": "Ninety Six", "college": "Tech"},
                 {"name": "Nikhil", "city": "Bangalore", "college": "Tech"}];



  $scope.tips = ['Tip 1', 'Tip 2', "Tip 3", 'Tip 4', 'Tip 5', "Tip 6", 'Tip 7', 'Tip 8', "Tip 9"];

  $scope.classes = [{name: "CS 1371", viewDetails: false, details: "More info on class"},
  				    {name: "Fluid Mechanics", viewDetails: false, details: "More info on class"}, 
  				    {name: "Welding for Beginners", viewDetails: false, details: "More info on class"}, 
  				    {name: "Intermediate Piano", viewDetails: false, details: "More info on class"},
  				    {name: "Algebra", viewDetails: false, details: "More info on class"},
  				    {name: "Spark Plugs Repair", viewDetails: false, details: "More info on class"}];

  $scope.appointments = [{"user": "nlazarus3", "topic": "Entrepreneurship for South Africans", "type": "tutee"},
  						 {"user": "alazarus3", "topic": "Beer Pong Trash Talk - Advanced", "type": "tutee"},
  						 {"user": "pmohoni3", "topic": "Feel Good Blogging", "type": "tutor"},
  						 {"user": "amurali3", "topic": "Body Boot Camp", "type": "tutor"},
  						 {"user": "nrabindra3", "topic": "Know Your IPA", "type": "tutor"}];




$scope.navigation = {
                      Home: {
                        flag: true
                      },
                      CreateRequest: {
                        flag: false
                      }        
};

$scope.navigate = function(page){

    for(var key in $scope.navigation){
      

      if(key == page){

        $scope.navigation[key].flag = true;
        console.log($scope.navigation[key]);
      }
      else{
        $scope.navigation[key].flag = false;
      }
    }

    
}

  $scope.checkType = function(type){

  	if(type=="tutor"){
  		return "panel-success"
  	}

  	else{
  		return "panel-primary"
  	}
  }
    

  $scope.open = function (classObj) {
    
    var modalInstance = $uibModal.open({
      templateUrl: 'bidView.html',
      controller: 'bidCtrl',
      size: "md",
      resolve: {
        classObj: function () {
          return classObj;
        }
      }
    });

    modalInstance.result.then(function (selectedItem) {
      $scope.selected = selectedItem;
    }, function () {
    
    });
  };
  
  $scope.login = function(){
      
      if($scope.password.length < 8){
       
        $scope.invalidFlag = true;
      }
     
    }
}]);