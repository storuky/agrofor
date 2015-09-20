app.directive('ngSelect', [function() {
  // Runs during compile
  return {
    // name: '',
    // priority: 1,
    // terminal: true,
    scope: {
      ngModel: "=ngModel",
      options: "=options",
      placeholder: "=placeholder"
    }, // {} = isolate, true = child, false/undefined = no change
    // controller: function($scope, $element, $attrs, $transclude) {},
    // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
    // restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
    // template: '',
    templateUrl: 'select.html',
    // replace: true,
    // transclude: true,
    // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
    link: function($scope, iElm, iAttrs, controller) {
      $scope.toggle = function ($event) {
        $scope.isShow = !$scope.isShow;
      }

      $scope.setActive = function (id) {
        $scope.ngModel = id;
        if (id)
          $scope.currentOption = findById($scope.options, id).title;
        else
          $scope.currentOption = $scope.placeholder || $scope.options[0].title
        $scope.isShow = false;
      }

      $scope.$watch('ngModel', function (id) {
        $scope.setActive(id);
      })

      $scope.$watch('options', function (options) {
        if (options && !$scope.placeholder) {
          $scope.setActive($scope.ngModel || options[0].id);
        }
      }, true)
    }
  };
}]);