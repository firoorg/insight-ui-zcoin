'use strict';

angular.module('insight.lelantusstatus')
  .factory('LelantusStatus',
    function($resource) {
      return $resource(window.apiPrefix + '/lelantusstatus');
    })
;