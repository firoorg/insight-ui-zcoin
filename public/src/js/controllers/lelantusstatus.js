'use strict';

angular.module('insight.lelantusstatus')
  .controller('LelantusStatusController', function ($scope, LelantusStatus) {
    $scope.items = {};

    LelantusStatus.get({}, function (values) {
      $scope.items.jsplits = values.jsplits;
      $scope.items.mints = values.mints;
      var stats = {};
      stats.jt = 0;
      stats.jc=0;
      stats.mt=0;
      stats.mc = 0;
      for (var i = 0; i < values.jsplits.length; i++) {
        stats.jt += values.jsplits[i].tot * 1;
        stats.jc += values.jsplits[i].cnt * 1;
        stats.mt += values.mints[i].tot * 1;
        stats.mc += values.mints[i].cnt * 1;
        values.mints[i].jtot = values.jsplits[i].tot;
      }
      $scope.items.stats = stats;
    });
  })
;
