'use strict';

angular.module('thenhomeUiApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplsate',
      'AngularJS',
      'Karma'
    ];

    $scope.center = {
        latitude: 51.460474, // initial map center latitude
        longitude: -0.358880 // initial map center longitude
    }
    $scope.markers = [];
    $scope.zoom = 8;

    $scope.beanLand = function(){
        console.log('ng beanland clicked');

        $scope.center = {
            latitude: 51.461035, // initial map center latitude
            longitude: -0.352957 // initial map center longitude
        }
        $scope.markers = [];
        $scope.zoom = 8;
    }

  });
