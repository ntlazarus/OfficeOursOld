var app = angular.module("tutableApp").directive('currentRequest', function() {
  return {
    restrict: 'E',
    templateUrl: 'currentRequest.html'
  };
});