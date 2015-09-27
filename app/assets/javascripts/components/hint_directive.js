app.directive('hint', ['$compile', function ($compile) {
  // Runs during compile
  return {
    // name: '',
    // priority: 1,
    // terminal: true,
    // scope: true, // {} = isolate, true = child, false/undefined = no change
    // controller: function($scope, $element, $attrs, $transclude) {},
    // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
    restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
    // template: '',
    // templateUrl: '',
    // replace: true,
    // transclude: true,
    // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
    link: function($scope, iElm, iAttrs, controller) {
      var hint = $compile('<div ng-show="Page.showHint" class="hint '+iAttrs.place+'"><div class="hint__point"></div><div class="hint__line"></div><div class="hint__text">'+iAttrs.hint+'</div></div>')($scope);

      iElm.after(hint)

      // righttop
      // lefttop
      // rightbottom
      // leftbottom
      // angular.element(iElm[0].querySelector('.hint')).bind('mouseover', function (event) {
      //   event.preventDefault();
      //   event.stopPropagation();
      // })
    }
  };
}]);