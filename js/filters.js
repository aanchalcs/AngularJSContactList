'use strict';

angular.module('myApp')
  .filter('startFrom', function () {
    return function(input, start) {
      start = +start; //parse to int
      return (typeof input === 'object' && input.length > 0 ) ? input.slice(start) : [];
    };
  });