var app = angular.module("tutableApp").directive('pendingRequests', function() {
  return {
    restrict: 'E',
    templateUrl: 'pendingRequests.html'
  };
});