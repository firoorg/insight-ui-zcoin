angular.module('insight.sparknames')
.controller('SparkNameController', function ($scope, $http) {
  $scope.items = [];

  function sanitizeString(text) {
    return text.replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
               .replace(/</g, "&lt;")
               .replace(/>/g, "&gt;")
               .replace(/"/g, "&quot;")
               .replace(/'/g, "&#39;")
               .replace(/&/g, "&amp;")
               .replace(/\//g, "&#47;");
  }

  $scope.customFilter = function(item) {
    if (!$scope.searchName) return true;

    const query = $scope.searchName.toLowerCase();
    return (
      (item.name && item.name.toLowerCase().includes(query)) ||
      (item.address && item.address.toLowerCase().includes(query)) ||
      (item.validUntil && item.validUntil.toString().includes(query)) ||
      (item.additionalInfo && item.additionalInfo.toLowerCase().includes(query))
    );
  };

  $http.get('/insight-api-zcoin/sparknames')
    .then(function(response) {
      var names = response.data;
      for (var i = 0; i < names.length; i++) {
        $scope.items.push({
          name: names[i].name,
          address: names[i].address,
          validUntil: names[i].validUntil,
          additionalInfo: names[i].additionalInfo ? sanitizeString(names[i].additionalInfo) : null
        });
      }
    });
});
