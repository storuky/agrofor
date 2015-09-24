app.directive('tabset', [function () {
  return {
    // name: '',
    // priority: 1,
    // terminal: true,
    scope: {
      ngModel: "=ngModel"
    }, // {} = isolate, true = child, false/undefined = no change
    // controller: function($scope, $element, $attrs, $transclude) {},
    // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
    restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
    template: '<div class="tabset"><ng-transclude></ng-transclude></div>',
    replace: true,
    transclude: true,
    // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
    // link: function($scope, iElm, iAttrs, controller) {
    // }
    controller: ['$scope', function ($scope) {
      var TabsetCtrl = this;

      $scope.$watch(function () {
        return TabsetCtrl.activeTab
      }, function (activeTab) {
        if (activeTab)
          $scope.ngModel = activeTab;        
      })

      $scope.$watch('ngModel', function (ngModel) {
        TabsetCtrl.activeTab = ngModel;
      })
    }]
  };
}]);

app.directive('tab', [function () {
  return {
    // name: '',
    // priority: 1,
    // terminal: true,
    scope: true, // {} = isolate, true = child, false/undefined = no change
    // controller: function($scope, $element, $attrs, $transclude) {},
    require: '^tabset', // Array = multiple requires, ? = optional, ^ = check parent elements
    restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
    // template: '',
    templateUrl: 'tab.html',
    replace: true,
    transclude: true,
    // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
    link: function($scope, iElm, iAttrs, TabsetCtrl) {
      $scope.TabsetCtrl = TabsetCtrl;
      $scope.name = iAttrs.name;
      
      $scope.setActive = function (tab) {
        TabsetCtrl.activeTab = tab;
      }
    }
  };
}]);