app.directive('search', ['Search', function (Search) {
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

      $scope.$watch(function () {
        return Search.showExtended
      }, function (val) {
        if (!val) {
          Search.resetForm()
        }
      })

      $scope.setActiveTag = function (tag) {
        Search.form = tag;
        Search.showExtended = true;
      }
    }
  };
}]);