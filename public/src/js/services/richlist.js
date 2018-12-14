'use strict';

angular.module('insight.richlist').factory('RichList', function ($resource) {
    return $resource(window.apiPrefix + '/richlist');
});
