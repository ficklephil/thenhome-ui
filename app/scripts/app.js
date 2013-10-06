'use strict';

angular.module('thenhomeUiApp', ["google-maps"])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/start.html',
        controller: 'MainCtrl'
      })
      .when('/search', {
            templateUrl: 'views/search.html',
            controller: 'MainCtrl'
      })
      .when('/competitions', {
            templateUrl: 'views/competitions.html',
            controller: 'MainCtrl'
        })
        .when('/blog', {
            templateUrl: 'views/blog.html',
            controller: 'MainCtrl'
        })
      .otherwise({
        redirectTo: '/'
      });
  });
