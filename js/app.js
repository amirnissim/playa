(function(){
  'use strict';

  angular.module('Playa', ['ngRoute'])
    .config(function ($routeProvider, $sceProvider) {

      // turn off $sce so we can use ng-src easily (youtube links in video page)
      // this is an internal app, we trust our users.
      $sceProvider.enabled(false);

      $routeProvider.when('/video', {
        templateUrl: 'video.html',
        landscape: true
      });
      $routeProvider.otherwise({
        templateUrl: 'playstore.html'
      });
    });
})();
