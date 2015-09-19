app.directive('map', [function () {
  // Runs during compile
  return {
    // name: '',
    // priority: 1,
    // terminal: true,
    scope: {
      coords: "=coords",
      zoom: "=zoom",
      maxZoom: "=maxZoom",
      markers: "=markers"
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
      ymaps.ready(function () {
        var map = new ymaps.Map(iElm[0], {
            center: $scope.coords || [55.7, 37.6],
            zoom: $scope.zoom || 10,
            controls: [],
          }, {
            maxZoom: $scope.maxZoom || 15,
            suppressMapOpenBlock: true,
        });

        console.log(111)
      })
    }
  };
}]);