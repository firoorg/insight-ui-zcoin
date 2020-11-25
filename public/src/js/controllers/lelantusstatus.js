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
      $scope.labels = [];
      $scope.series = [];
      $scope.data = [[],[]];
      for (var i = 0; i < values.jsplits.length; i++) {
        stats.jt += values.jsplits[i].tot * 1;
        stats.jc += values.jsplits[i].cnt * 1;
        stats.mt += values.mints[i].tot * 1;
        stats.mc += values.mints[i].cnt * 1;
        values.mints[i].jtot = (values.jsplits[i].tot * 1).toFixed(4);
        values.mints[i].tot = (values.mints[i].tot * 1).toFixed(4)
        $scope.labels.push((values.mints[i].lb * 1 + values.mints[i].ub * 1)/2);
        $scope.data[0].push(values.mints[i].tot);
        $scope.data[1].push(values.jsplits[i].tot);
      }
      $scope.items.stats = stats;
        // $scope.labels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
        // $scope.series = ['Mints', 'Splits'];
        // $scope.data = [
        //   [65, 59, 80, 81, 56, 55, 40],
        //   [28, 48, 40, 19, 86, 27, 90]
        // ];
      $scope.colors = ['#33cc33', '#9b1c2e', '#F0AB05', '#00A39F'];
    });
  })
;
