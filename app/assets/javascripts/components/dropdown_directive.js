app.directive('dropdown', ['$document', function ($document) {
  // Runs during compile
  return {
    // name: '',
    // priority: 1,
    // terminal: true,
    scope: {
      title: "=title",
      isOpened: "=isOpened"
    }, // {} = isolate, true = child, false/undefined = no change
    // controller: function($scope, $element, $attrs, $transclude) {},
    // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
    restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
    // template: '',
    templateUrl: 'dropdown.html',
    replace: true,
    transclude: true,
    // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
    link: function($scope, iElm, iAttrs, controller) {
      var handler = function (e) {
        if (iElm !== e.target && !iElm[0].contains(e.target)) {
          $scope.isOpened = false;
          $scope.$apply();
        }
      }

      $document.bind('click', handler);

      $scope.$on('$destroy', function () {
        $document.unbind('click', handler)
      })
    }
  };
}]);