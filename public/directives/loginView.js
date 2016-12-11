var app = angular.module("tutableApp").directive('loginView', function() {
  return {
    restrict: 'E',
    templateUrl: 'login.html'
  };
});