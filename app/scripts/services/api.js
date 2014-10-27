'use strict';

/**
 * @ngdoc service
 * @name assetmanagerWebApp.api
 * @description
 * # api
 * Factory in the assetmanagerWebApp.
 */
angular.module('assetmanagerWebApp')
  .factory('api', function ($http) {


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

      console.log(arguments);

    };


    return {

      login: function (emailAddress, password) {

        apiCall('post', '/system/web', null, {
          emailAddress: emailAddress,
          password: password
        });

      }

    };

  });
