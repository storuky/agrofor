app.controller('PositionsController', ['$scope', 'Page', 'method', '$position', function ($scope, Page, method, $position) {
  var ctrl = this;


  if (method=='new') {
    Page.current = 'new_positions';
    ctrl.position = {
      lat: 55.7,
      lng: 37.6
    }
  }

  if (method=='index') {
    Page.current = 'positions';
    ctrl.positions = $position.query({status: 'opened'});
    ctrl.tab = 'opened';
  }

}])