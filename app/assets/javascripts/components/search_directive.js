app.directive('search', ['Search', '$document', function (Search, $document) {
  return {
    // name: '',
    // priority: 1,
    // terminal: true,
    // scope: {}, // {} = isolate, true = child, false/undefined = no change
    // controller: function($scope, $element, $attrs, $transclude) {},
    // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
    restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
    // template: '',
    templateUrl: 'search.html',
    replace: true,
    // transclude: true,
    // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
    link: function($scope, iElm, iAttrs, controller) {
      $scope.Search = Search;

      $document.on('click', function (e) {
        if (iElm !== e.target && !iElm[0].contains(e.target)) {
          Search.showExtended = false;
          $scope.showFooter = false;
          $scope.$apply();
        }
      });
    }
  };
}]);