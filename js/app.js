angular.module('Playa', [])
  .controller('MainCtrl', function($scope) {

    $scope.appName = 'EverythingMe Launcher';

    $scope.appDescription = 'EverythingMe delivers what you need, when ' +
                            'you need it, right to your homescreen.';
    $scope.developerName = 'EverythingMe';

    $scope.installText = 'Install';

  });
