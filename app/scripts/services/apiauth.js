'use strict';

/**
 * @ngdoc service
 * @name assetmanagerWebApp.apiauth
 * @description
 * # apiauth
 * Service in the assetmanagerWebApp.
 */
angular.module('assetmanagerWebApp')
  .service('apiauth', function apiauth() {

    this.getAuth = function () {
      return this._auth;
    };

    this.saveAuth = function (auth) {
      this._auth = auth;
    };

  });
