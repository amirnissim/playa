(function() {
  'use strict';

  angular.module('Playa')
    .controller('MainCtrl', function($scope, $route, JSONStore) {

      var _headerImg = 'images/header.jpg';

      this.videos = {
        perfectPhone: '//www.youtube.com/embed/9fHOYuzsIZo',
        amazingThings: '//www.youtube.com/embed/xGpxWzs1UCM'
      };

      this.headerImg = _headerImg;

      this.appName = 'EverythingMe Launcher';

      this.appDescription = 'EverythingMe delivers what you need, when ' +
        'you need it, right to your homescreen.';

      this.developerName = 'EverythingMe';

      this.videoSrc = this.videos.perfectPhone;

      this.galleryImg = 'images/gallery.jpg';

      // history for saved configurations. an array of object like:
      // {
      //  id: str
      //  href: url
      // }
      this.history = [{
        id: "1f7dabd3a6449b86a8fd",
        href: "https://gist.github.com/1f7dabd3a6449b86a8fd"
      }];

      this.save = function save() {
        return JSONStore
          .add({
            appName: this.appName,
            appDescription: this.appDescription,
            developerName: this.developerName
          })
          .success(function(result) {
            this.history.push({
              id: result.id,
              href: result.html_url
            });
          }.bind(this));
      };

      this.checkHeaderImg = function checkHeaderImg() {

        this.headerImg = this.customHeaderImg ? this.customHeaderImg : _headerImg;
      };

      $scope.$on('$routeChangeSuccess', function(event, routeData) {
        this.landscape = routeData.landscape;
      }.bind(this));
    })
})();
