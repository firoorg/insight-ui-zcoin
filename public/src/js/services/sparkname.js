'use strict';

angular.module('insight.sparknames').factory('SparkNameList', function ($resource) {
  return {
    names: $resource(window.apiPrefix + '/sparknames')
  };
});

