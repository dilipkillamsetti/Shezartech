angular.module('drsmith.controllers.sideMenuCtrl', [])
.controller('sideMenuCtrl', function($scope,$rootScope,$state,$ionicHistory) {
  console.log("calling...");
  console.log($rootScope.hideTab)
  $scope.logout=function(){
   $ionicHistory.clearHistory()

    $state.go("login")
  }
  })