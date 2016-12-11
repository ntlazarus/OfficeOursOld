var app = angular.module("tutableApp", []); 
app.controller("MainCtrl", function($scope) {
    $scope.username = "nikhil.rabindra";
  
  
  $scope.users = [{"name": "Nahum", "city": "Atlanta", "college": "Tech"},
                 {"name": "Addison", "city": "Ninety Six", "college": "Tech"},
                 {"name": "Nikhil", "city": "Bangalore", "college": "Tech"}]
    
  
  $scope.login = function(){
      
      if($scope.password.length < 8){
       
        $scope.invalidFlag = true;
      }
     
    }
});