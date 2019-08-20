'use strict';

angular.module('insight.sigmastatus')
  .factory('SigmaStatus',
    function($resource) {
      return $resource(window.apiPrefix + '/sigmastatus');
    })
;