'use strict'

describe 'Controller: HeaderCtrl', ->

  # load the controller's module
  beforeEach module 'assetmanagerWebApp'

  HeaderCtrl = {}
  scope = {}

  # Initialize the controller and a mock scope
  beforeEach inject ($controller, $rootScope) ->
    scope = $rootScope.$new()
    HeaderCtrl = $controller 'HeaderCtrl', {
      $scope: scope
    }
