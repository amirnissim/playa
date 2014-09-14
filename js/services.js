(function() {
  'use strict';

  /**
   * JSON storage backend using Github Gists API
   */
  angular.module('Playa')
  .service('JSONStore', function($http) {
    var URL = 'https://api.github.com/gists';

    this.get = function save(key) {
      return $http.get(URL + '/' + key);
    };

    this.add = function add(obj) {
      var json = JSON.stringify(obj);

      return $http.post(URL, {
        "public": true,
        "files": {
          "data.json": {
            "content": json
          }
        }
      });
    };
  });
})();
