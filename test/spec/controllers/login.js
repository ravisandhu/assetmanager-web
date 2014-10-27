'use strict';

describe('Controller: LoginCtrl', function () {

  // load the controller's module
  beforeEach(module('assetmanagerWebApp'));

  var LoginCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LoginCtrl = $controller('LoginCtrl', {
      $scope: scope
    });
  }));

  describe('Static data', function () {

    it('should define the formData', function () {

      expect(scope.formData).to.be.eql({});

    });

    it('should define the formFields', function () {

      expect(scope.formFields).to.be.eql([{
        key: 'emailAddress',
        type: 'email',
        label: 'Email address'
      }, {
        key: 'password',
        type: 'password',
        label: 'Password'
      }]);

    });

    it('should define the formOptions', function () {

      expect(scope.formOptions).to.be.eql({
        uniqueFormId: 'login'
      });

    });

  });

  describe('Methods', function () {

    describe('login', function () {

      it('should login to the API');

      it('should fail to login to the API');

      it('should handle an API error');

    });

  });

});
