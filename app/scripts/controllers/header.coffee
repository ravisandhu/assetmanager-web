'use strict'

###*
 # @ngdoc function
 # @name assetmanagerWebApp.controller:HeaderCtrl
 # @description
 # # HeaderCtrl
 # Controller of the assetmanagerWebApp
###
angular.module('assetmanagerWebApp')
  .controller 'HeaderCtrl', ($scope) ->


    $scope.navigationItems = [
      (
        name: 'Home'
        url: 'home'
        active: true
      )
      (
        name: 'About'
        url: 'about'
        active: false
      )
    ]
