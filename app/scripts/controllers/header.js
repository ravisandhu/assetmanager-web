'use strict';

/**
 * @ngdoc function
 * @name assetmanagerWebApp.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the assetmanagerWebApp
 */
angular.module('assetmanagerWebApp')
  .controller('HeaderCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
