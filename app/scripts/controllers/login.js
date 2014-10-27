'use strict';

/**
 * @ngdoc function
 * @name assetmanagerWebApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the assetmanagerWebApp
 */
angular.module('assetmanagerWebApp')
  .controller('LoginCtrl', function ($scope, api) {

    $scope.formData = {
    };

    $scope.formFields = [{
      key: 'emailAddress',
      type: 'email',
      label: 'Email address'
    }, {
      key: 'password',
      type: 'password',
      label: 'Password'
    }];

    $scope.formOptions = {
      uniqueFormId: 'login'
    };

    $scope.login = function () {

      api.login($scope.formData.emailAddress, $scope.formData.password);

    };

  });
