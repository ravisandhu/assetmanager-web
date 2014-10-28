'use strict';

/**
 * @ngdoc service
 * @name assetmanagerWebApp.api
 * @description
 * # api
 * Factory in the assetmanagerWebApp.
 */
angular.module('assetmanagerWebApp')
  .factory('api', function ($http, $q, apiUrl, apiauth) {


    /**
     * API Call
     *
     * Makes a call to the API
     *
     * @param {string} method
     * @param {string} url
     * @param {object} params
     * @param {object} data
     */
    var apiCall = function (method, url, params, data) {

      return $http({
        method: method.toUpperCase(),
        url: apiUrl + url,
        params: params,
        data: data,
        headers: {
          accept: 'application/json'
        },
        timeout: 30000
      });

    };


    return {

      /**
       * Login
       *
       * Logs into the API
       *
       * @param {string} emailAddress
       * @param {string} password
       */
      login: function (emailAddress, password) {

        var defer = $q.defer();

        apiCall('post', '/system/web', null, {
          emailAddress: emailAddress,
          password: password
        }).then(function (obj) {

          apiauth.saveAuth(obj.data.sessionId);

          defer.resolve(true);

        }).catch(function (obj) {

          /* Failed - is auth or server error? */
          if (obj.status === 401) {
            /* No error - just not valid credentials */
            defer.resolve(false);
          } else {
            defer.reject();
          }

        });

        return defer.promise;

      }

    };

  });
