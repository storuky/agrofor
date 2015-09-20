app.controller('SearchController', ['$scope', 'Page', 'Search', function ($scope, Page, Search) {
  var ctrl = this;

  Page.current = 'search';

  Search.all({}, function (res) {
    ctrl.markers = res;
  });

  $scope.$watch('ctrl.map', function (map) {
    if (map) {
      console.log(map)
      map.events.add('click', function (e) {
        console.log(e.get('coords'))
      });

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
}])