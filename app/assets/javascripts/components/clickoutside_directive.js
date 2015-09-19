app.directive('clickOutside', ['$document', function ($document) {
  return {
    restrict: 'A',
    scope: {
      clickOutside: '&'
    },
    link: function (scope, el, attr) {
      $document.on('click', function (e) {
        if (el !== e.target && !el[0].contains(e.target)) {
          scope.$apply(function () {
              scope.$eval(scope.clickOutside);
          });
        }
      });
    }
  }
}]);