app.config(['$routeProvider', function ($routeProvider) {  
  $routeProvider
    .when('/', {
      templateUrl: Routes.search_path(),
      controller: 'SearchController as ctrl',
      reloadOnSearch: false
    })
    .when('/positions', {
      templateUrl: Routes.positions_path(),
      controller: 'PositionsController as ctrl',
      reloadOnSearch: false,
      resolve: {
        method: function () {
          return 'index'
        }
      }
    })
    .when('/positions/new', {
      templateUrl: Routes.new_position_path(),
      controller: 'PositionsController as ctrl',
      reloadOnSearch: false,
      resolve: {
        method: function () {
          return 'new'
        }
      }
    })
    .when('/positions/:id/edit', {
      templateUrl: Routes.edit_position_path(0),
      controller: 'PositionsController as ctrl',
      resolve: {
        method: function () {
          return 'edit'
        }
      }
    })
    .when('/messages', {
      templateUrl: Routes.messages_path(),
      controller: 'MessagesController as ctrl',
      reloadOnSearch: false
    })
    .when('/analytics', {
      templateUrl: Routes.analytics_path(),
      controller: 'AnalyticsController as ctrl',
    })
    .when('/help', {
      templateUrl: Routes.help_path(),
      controller: 'HelpController as ctrl',
    })
    .when('/support', {
      templateUrl: Routes.support_path(),
      controller: 'SupportController as ctrl',
    })
    .when('/profile', {
      templateUrl: Routes.profile_index_path(),
      controller: 'ProfileController as ctrl',
      resolve: {
        method: 'index'
      }
    })
    .when('/profile/:id', {
      templateUrl: Routes.profile_index_path(),
      controller: 'ProfileController as ctrl',
      resolve: {
        method: 'show'
      }
    })
    .when('/settings', {
      templateUrl: Routes.settings_path(),
      controller: 'SettingsController as ctrl',
    })
    .when('/offers', {
      templateUrl: Routes.offers_path(),
      controller: 'OffersController as ctrl',
    })
    .otherwise({
      redirectTo: '/search'
    })
}]);