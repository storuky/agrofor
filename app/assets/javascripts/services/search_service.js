app.service('Search', ['$http', 'ngNotify', '$rootScope', 'Map', function ($http, ngNotify, $rootScope, Map) {
  var Search = this;

  Search.tags = [];
  Search.circles = [];

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
    

    if (Search.form.id != undefined) {
      Search.circles[Search.form.id-1] = Map.createCircle(tag.coords, tag.radius * 1000);
      Search.circles[Search.form.id-1].updated_at = new Date();
      Search.tags[Search.form.id-1] = tag;
    } else {
      tag.id = Search.tags.length + 1;
      Search.circles.push(Map.createCircle(tag.coords, tag.radius * 1000));
      Search.tags.push(tag);
    }
  }

  Search.resetForm = function () {
    Search.form = {
      currency_id: gon.currency.id
    }
  }
  Search.resetForm();

}])