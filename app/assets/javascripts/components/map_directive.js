app.directive('map', ['Search', function (Search) {
  // Runs during compile
  return {
    // name: '',
    // priority: 1,
    // terminal: true,
    scope: {
      map: "=map",
      coords: "=coords",
      zoom: "=zoom",
      maxZoom: "=maxZoom",
      markers: "=markers",
      short: "=short",
      draggable: "=draggable",
      clickable: "=clickable",
      geocoding: "=geocoding",
      city: "=city",
      address: "=address",
      lat: "=lat",
      lng: "=lng"
    }, // {} = isolate, true = child, false/undefined = no change
    // controller: function($scope, $element, $attrs, $transclude) {},
    // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
    restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
    // template: '',
    // templateUrl: '',
    replace: true,
    // transclude: true,
    // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
    link: function($scope, iElm, iAttrs, controller) {
      var map, geoObjects;

      ymaps.ready(function () {
        map = $scope.map = new ymaps.Map(iElm[0], {
            center: $scope.coords || [55.7, 37.6],
            zoom: $scope.zoom || 10,
            controls: [],
          }, {
            maxZoom: $scope.maxZoom || 15,
            suppressMapOpenBlock: true,
        });

        drawMarkers($scope.markers);

        $scope.$apply();
      })

      $scope.$watch('markers', function (markers) {
        if (map)
          drawMarkers(markers);
      }, true)

      $scope.$watch('coords', function (coords) {
        if (map && coords) {
          map.setCenter(coords);
        }
      })

      function drawMarkers (markers) {
        if (markers!==undefined) {
          geoObjects = map.drawMarkers(markers, {short: $scope.short, draggable: $scope.draggable, clickable: $scope.clickable});
          Search.visible_count = ymaps.geoQuery(map.geoObjects).searchIntersect(map).getLength();

          if ($scope.clickable) {
            map.events.add('click', function (e) {
              geoObjects.geometry.setCoordinates(e.get('coords'));
              fillGeodata(e.get('coords'));
              $scope.$apply();
            });

            geoObjects.events.add('dragend', function(e) {
              var thisPlacemark = e.get('target');
              var coords = thisPlacemark.geometry.getCoordinates();
              fillGeodata(coords);
            });
          }
        }
      }

      function fillGeodata (coords) {
        ymaps.geocode(coords).then(function (res) {
          $scope.city = res.geoObjects.get(0).properties.get('description');
          $scope.address = $scope.city + ", " + res.geoObjects.get(0).properties.get('name');
          $scope.lat = coords[0];
          $scope.lng = coords[1];
          $scope.coords = coords;
          $scope.$apply()
        })
      }

      $scope.$on('$destroy', function () {
        map.destroy();
      })
    }
  };
}]);