app.directive('category', ['$timeout', function ($timeout) {
  // Runs during compile
  return {
    // name: '',
    // priority: 1,
    // terminal: true,
    scope: {
      ngModel: '=ngModel'
    }, // {} = isolate, true = child, false/undefined = no change
    // controller: function($scope, $element, $attrs, $transclude) {},
    // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
    // restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
    // template: '',
    templateUrl: 'category.html',
    replace: true,
    // transclude: true,
    // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
    link: function($scope, iElm, iAttrs, controller) {
      $scope.gon = gon;

      $scope.setActive = function (option) {
        $scope.ngModel = option.id;
        $scope.optionTitle = option.title;
        $scope.isOpened = false;
      }

      $scope.$watch('ngModel', function (id) {
        if (id) {
          $scope.optionTitle = gon.group.options[id].title
        }
      })

      $scope.$watch('isOpened', function (isOpened) {
        if (isOpened)
          $timeout(function () {
            iElm[0].querySelector('input[type="text"]').focus()
          }, 100)
      })
    }
  };
}]);