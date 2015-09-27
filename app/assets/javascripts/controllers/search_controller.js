app.controller('SearchController', ['$scope', 'Page', 'Search', '$position', '$location', function ($scope, Page, Search, $position, $location) {
  var ctrl = this;

  // Pace.options.restartOnPushState = false;
  // $scope.$on('$destroy', function () {
  //   Pace.options.restartOnPushState = true;
  // })

  Page.current = 'search';

  Search.all({}, function (res) {
    ctrl.markers = res;
  });

  ctrl.myPositions = $position.query({status: 'opened'});

  $scope.$watch('ctrl.map', function (map) {
    if (map) {
      map.behaviors.events.add('dragstart', function (e) {
        Page.transparent = true;
        $scope.$apply();
      });

      map.behaviors.events.add('dragend', function (e) {
        Page.transparent = false;
        $scope.$apply();
      });

      map.events.add('boundschange', function (e) {
        Search.visible_count = ymaps.geoQuery(map.geoObjects).searchIntersect(map).getLength();
        $scope.$apply();
      });
    }
  });


  $scope.$watch(function () {
    return Search.type
  }, function (type) {
      $location.search('type', type)
  })

  $scope.$watch(function () {
    return $location.search().type
  }, function (type) {
    if (type)
      Search.type = type;
  })
}])