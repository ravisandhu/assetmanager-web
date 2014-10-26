'use strict'

###*
 # @ngdoc function
 # @name assetmanagerWebApp.controller:AboutCtrl
 # @description
 # # AboutCtrl
 # Controller of the assetmanagerWebApp
###
angular.module('assetmanagerWebApp')
  .controller 'AboutCtrl', ($scope) ->
    $scope.awesomeThings = [
      'HTML5 Boilerplate'
      'AngularJS'
      'Karma'
    ]
