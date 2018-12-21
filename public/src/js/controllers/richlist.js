'use strict';

angular.module('insight.richlist').controller('RichListController', function ($scope, RichList) {
  $scope.items = [];

  RichList.query({}, function (addrs) {
    for (var i = 0; i < addrs.length; i++) {
      $scope.items.push({
        rank: i + 1,
        addr: addrs[i].address,
        balance: addrs[i].balance
      });
    }
  });
});
