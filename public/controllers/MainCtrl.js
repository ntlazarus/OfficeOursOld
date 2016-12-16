var app = angular.module("tutableApp", []); 
app.controller("MainCtrl", function($scope) {
    $scope.username = "nikhil.rabindra";
  
  //Data sets (Like databases in the backend)
  $scope.users = [{"name": "Nahum", "city": "Atlanta", "college": "Tech"},
                 {"name": "Addison", "city": "Ninety Six", "college": "Tech"},
                 {"name": "Nikhil", "city": "Bangalore", "college": "Tech"}];



  $scope.tips = ['Tip 1', 'Tip 2', "Tip 3", 'Tip 4', 'Tip 5', "Tip 6", 'Tip 7', 'Tip 8', "Tip 9"];

  $scope.classes = ["CS 1371", "Fluid Mechanics", "Welding for Beginners", "Intermediate Piano", "Algebra", "Spark Plugs Repair"];

  $scope.appointments = [{"user": "nlazarus3", "topic": "Entrepreneurship for South Africans", "type": "tutee"},
  						 {"user": "alazarus3", "topic": "Beer Pong Trash Talk - Advanced", "type": "tutee"},
  						 {"user": "pmohoni3", "topic": "Feel Good Blogging", "type": "tutor"},
  						 {"user": "amurali3", "topic": "Body Boot Camp", "type": "tutor"},
  						 {"user": "nrabindra3", "topic": "Know Your IPA", "type": "tutor"}];




  $scope.checkType = function(type){

  	if(type=="tutor"){
  		return "panel-success"
  	}

  	else{
  		return "panel-primary"
  	}
  }
    
  
  $scope.login = function(){
      
      if($scope.password.length < 8){
       
        $scope.invalidFlag = true;
      }
     
    }
});