app.service('Search', ['$http', 'ngNotify', '$rootScope', 'Map', function ($http, ngNotify, $rootScope, Map) {
  var Search = this;

  Search.tags = [];
  Search.circles = [];
  Search.type = Search.type || "map";

  Search.all = function (params, fn) {
    $http.get(Routes.search_path({format: 'json'}), {params: params})
      .success(function (res) {
        Search.positions_count = res.length;
        fn(res);
      })
  }

  Search.suitable = function (params, fn) {
    $http.get(Routes.suitable_path({format: 'json'}), {params: params})
      .success(function (res) {
        Search.positions_count = res.length;
        fn(res);
      })
  }

  Search.addTag = function () {
    if (!Search.form.option_id) {
      ngNotify.set('Укажите категорию', 'error');
      return false;
    }

    var tag = _.clone(Search.form);

    if (tag.id !== undefined) {
      Search.tags[tag.id] = tag;
    } else {
      tag.id = Search.tags.length;
      Search.tags.push(tag);
    }

    Search.showExtended = false;
    Search.resetForm();
  }

  Search.resetForm = function () {
    Search.form = {
      currency_id: gon.currency.id    }
  }
  Search.resetForm();

}])