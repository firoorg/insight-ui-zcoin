'use strict';

var defaultLanguage = localStorage.getItem('insight-language') || 'en';
var defaultCurrency = localStorage.getItem('insight-currency') || 'FIRO';

angular.module('insight',[
  'ngAnimate',
  'ngResource',
  'ngRoute',
  'ngProgress',
  'ui.bootstrap',
  'ui.route',
  'monospaced.qrcode',
  'gettext',
  'chart.js',
  'angularMoment',
  'insight.system',
  'insight.socket',
  'insight.blocks',
  'insight.transactions',
  'insight.address',
  'insight.search',
  'insight.status',
  'insight.connection',
  'insight.currency',
  'insight.messages',
  'insight.richlist',
  'insight.sparknames',
  'insight.sigmastatus',
  'insight.lelantusstatus'
]);

angular.module('insight.system', []);
angular.module('insight.socket', []);
angular.module('insight.blocks', []);
angular.module('insight.transactions', []);
angular.module('insight.address', []);
angular.module('insight.search', []);
angular.module('insight.status', []);
angular.module('insight.connection', []);
angular.module('insight.currency', []);
angular.module('insight.messages', []);
angular.module('insight.richlist', []);
angular.module('insight.sparknames', []);
angular.module('insight.sigmastatus', []);
angular.module('insight.lelantusstatus', []);
