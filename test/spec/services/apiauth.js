'use strict';

describe('Service: apiauth', function () {

  // load the service's module
  beforeEach(module('assetmanagerWebApp'));

  // instantiate service
  var apiauth;
  beforeEach(inject(function (_apiauth_) {
    apiauth = _apiauth_;
  }));

  it('should do something', function () {
    expect(!!apiauth).to.be.equal(true);
  });

});
