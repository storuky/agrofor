app.directive('widgetPane', [function () {
  return {
    // name: '',
    // priority: 1,
    // terminal: true,
    scope: true, // {} = isolate, true = child, false/undefined = no change
    // controller: function($scope, $element, $attrs, $transclude) {},
    // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
    restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
    // template: '<div class="tabset"></div>',
    replace: true,
    // transclude: true,
    // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
    // link: function($scope, iElm, iAttrs, controller) {
    // }
    controller: function ($scope) {
      this.activeTab = ''; 
    }
  };
}]);

app.directive('widget', [function () {
  return {
    // name: '',
    // priority: 1,
    // terminal: true,
    scope: {
      title: '=title',
      isShow: '=isShow',
      tab: '=tab'
    }, // {} = isolate, true = child, false/undefined = no change
    // controller: function($scope, $element, $attrs, $transclude) {},
    require: '^widgetPane', // Array = multiple requires, ? = optional, ^ = check parent elements
    restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
    // template: '',
    templateUrl: 'widget.html',
    replace: true,
    transclude: true,
    // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
    link: function($scope, iElm, iAttrs, PaneCtrl) {
      $scope.PaneCtrl = PaneCtrl;
      
      $scope.setActive = function (tab) {
        PaneCtrl.activeTab = tab;
      }
    }
  };
}]);