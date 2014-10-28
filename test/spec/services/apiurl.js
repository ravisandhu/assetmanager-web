'use strict';

describe('Service: apiUrl', function () {

  // load the service's module
  beforeEach(module('assetmanagerWebApp'));

  // instantiate service
  var apiUrl;
  beforeEach(inject(function (_apiUrl_) {
    apiUrl = _apiUrl_;
  }));

  it('should do something', function () {

    expect(apiUrl).to.be.equal('http://10.20.30.60:3000');

  });

});
