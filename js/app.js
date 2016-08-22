'use strict';

angular.module('myApp', [
  'ngRoute',
  'keepr'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'list.html',
        controller: 'ContactsCtrl'
      })
      .when('/contacts', {
        templateUrl: 'list.html',
        controller: 'ContactsCtrl'
      })
      .when('/contacts/new', {
        templateUrl: 'new.html',
        controller: 'ContactsCtrl'
      })
      .when('/contacts/:id/edit', {
        templateUrl: 'edit.html',
        controller: 'ContactsCtrl',
        method: 'edit'
      })
      .otherwise({
        redirectTo: '/'
      });
  });