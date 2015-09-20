app.controller('PositionsController', ['$scope', 'Page', 'method', '$position', function ($scope, Page, method, $position) {
  var ctrl = this;

  Page.current = 'positions';

  if (method=='new') {
    ctrl.position = {
      lat: 55.7,
      lng: 37.6
    }
  }

  if (method=='index') {
    ctrl.positions = $position.query({status: 'opened'});
    ctrl.tab = 'opened';
  }

}])