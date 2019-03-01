'use strict';

angular.module('insight.faucet').controller('FaucetController',
  function($scope, $routeParams, $location, $timeout, Global, SendTo, GetInfo) {

  $scope.global = Global;
  $scope.canSend = false;
  $scope.laststatus = '';
  $timeout(function() {
    $scope.canSend = true;
  }, 2000);

  $scope.sendto = function(sendToAddr) {
    if($scope.canSend) {
      $scope.canSend = false;
      $timeout(function() {
        $scope.canSend = true;
      }, 2000);
      SendTo.get({
        sendToAddr: sendToAddr
      }, function(result) {
        console.log('scope.sendto ' + result.result);
        $scope.laststatus = result.result;
      });
    }
  };

  $scope.getinfo = function() {
    $scope.info = {};
    GetInfo.get({}
    , function(info) {
        $scope.info = info;
    });
  };

  $scope.reloadInfo = function () {
    $scope.getinfo();

    $timeout(function(){
      $scope.reloadInfo();
    },30000)
  };

  $scope.reloadInfo();
});
