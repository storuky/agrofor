app.controller('PositionsController', ['$scope', 'Page', 'method', function ($scope, Page, method) {
  var ctrl = this;

  Page.current = 'positions';

  console.log(method)
}])