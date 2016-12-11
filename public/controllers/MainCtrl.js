var app = angular.module("tutableApp", []); 
app.controller("MainCtrl", function($scope) {
    $scope.username = "nikhil.rabindra";
  
  
  $scope.users = [{"name": "Nahum", "city": "Atlanta", "college": "Tech"},
                 {"name": "Addison", "city": "Ninety Six", "college": "Tech"},
                 {"name": "Nikhil", "city": "Bangalore", "college": "Tech"}];



  $scope.tips = ['Tip 1', 'Tip 2', "Tip 3", 'Tip 4', 'Tip 5', "Tip 6", 'Tip 7', 'Tip 8', "Tip 9"];
    
  
  $scope.login = function(){
      
      if($scope.password.length < 8){
       
        $scope.invalidFlag = true;
      }
     
    }
});