'use strict';

angular.module('insight.sigmastatus')
  .controller('SigmaStatusController', function ($scope, SigmaStatus) {
    $scope.items = [];

    SigmaStatus.query({}, function (values) {
      for (var i = 0; i < values.length; i++) {
        $scope.items.push({
          denomination: values[i].denomination / 1e+8,
          mint: values[i].mint,
          spent: values[i].spent,
          available: (values[i].mint - values[i].spent)
        });
      }
    });
  })
;
