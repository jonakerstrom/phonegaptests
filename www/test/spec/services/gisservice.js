'use strict';

describe('Service: gisservice', function () {

  // load the service's module
  beforeEach(module('appApp'));

  // instantiate service
  var gisservice;
  beforeEach(inject(function (_gisservice_) {
    gisservice = _gisservice_;
  }));

  it('should do something', function () {
    expect(!!gisservice).toBe(true);
  });

});
