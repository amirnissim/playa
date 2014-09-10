angular.module('Playa', [])
  .controller('MainCtrl', function($scope, JSONStore) {

    $scope.appName = 'EverythingMe Launcher';

    $scope.appDescription = 'EverythingMe delivers what you need, when ' +
                            'you need it, right to your homescreen.';
    $scope.developerName = 'EverythingMe';

    // history for saved configurations. an array of object like:
    // {
    //  id: str
    //  href: url
    // }
    $scope.history = [];

    $scope.save = function save() {
      return JSONStore
      .add({
        appName: $scope.appName,
        appDescription: $scope.appDescription,
        appDescription: $scope.appDescription,
        developerName: $scope.developerName
      })
      .success(function(result) {
        $scope.history.push({
          id: result.id,
          href: result.html_url
        });
      });
    };
  })

  /**
   * JSON storage backend using Github Gists API
   */
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
