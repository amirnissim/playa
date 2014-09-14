(function() {
  'use strict';

  angular.module('Playa')
    .controller('MainCtrl', function($scope, $route, JSONStore) {

      var _headerImg = 'images/header.jpg';

      $scope.videos = {
        perfectPhone: '//www.youtube.com/embed/9fHOYuzsIZo',
        amazingThings: '//www.youtube.com/embed/xGpxWzs1UCM'
      };

      $scope.headerImg = _headerImg;

      $scope.appName = 'EverythingMe Launcher';

      $scope.appDescription = 'EverythingMe delivers what you need, when ' +
        'you need it, right to your homescreen.';

      $scope.developerName = 'EverythingMe';

      $scope.videoSrc = $scope.videos.perfectPhone;

      $scope.galleryImg = 'images/gallery.jpg';

      // history for saved configurations. an array of object like:
      // {
      //  id: str
      //  href: url
      // }
      $scope.history = [{
        id: "1f7dabd3a6449b86a8fd",
        href: "https://gist.github.com/1f7dabd3a6449b86a8fd"
      }];

      $scope.save = function save() {
        return JSONStore
          .add({
            appName: $scope.appName,
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

      $scope.$watch('customHeaderImg', function(value) {
        $scope.headerImg = value ? value : _headerImg;
      });

      $scope.$on('$routeChangeSuccess', function(event, routeData) {
        $scope.landscape = routeData.landscape;
      });
    })
})();
