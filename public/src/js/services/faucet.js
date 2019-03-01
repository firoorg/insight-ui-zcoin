'use strict';

angular.module('insight.faucet')
  .factory('SendTo',
    function($resource) {
      return $resource(window.apiPrefix + '/faucet/sendto');
    })
  .factory('GetInfo',
    function($resource) {
      return $resource(window.apiPrefix + '/faucet/getinfo');
    });
