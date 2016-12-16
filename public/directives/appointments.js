var app = angular.module("tutableApp").directive('appointments', function() {
  return {
    restrict: 'E',
    templateUrl: 'appointments.html'
  };
});