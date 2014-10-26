'use strict'

###*
 # @ngdoc function
 # @name assetmanagerWebApp.controller:MainCtrl
 # @description
 # # MainCtrl
 # Controller of the assetmanagerWebApp
###
angular.module('assetmanagerWebApp')
  .controller 'MainCtrl', ($scope) ->
    $scope.awesomeThings = [
      'HTML5 Boilerplate'
      'AngularJS'
      'Karma'
    ]
