var util = require('util'),
  bleno = require('bleno'),
  BlenoPrimaryService = bleno.PrimaryService,
  GitHubURLCharacteristics = require('./edison-github-url-characteristic'),
  SSIDCharacteristics = require('./edison-ssid-characteristic'),
  PasswordCharacteristics = require('./edison-password-characteristic'),
  StorageSpaceCharacteristics = require('./edison-storage-space-characteristic'),
  WifiPasswordCharacteristics = require('./edison-wifi-password-characteristic'),
  WifiStatusCharacteristics = require('./edison-wifi-status-characteristic'),
  DeviceStatusCharacteristics = require('./edison-device-status-characteristic');

// Everything we want to be able to read / write about Edison using our paired mobile app.
function EdisonGenericAttributeService() {
  EdisonGenericAttributeService.super_.call(this, {
      uuid: '1801',
      characteristics: [
          new GitHubURLCharacteristics(),
          new SSIDCharacteristics(),
          new PasswordCharacteristics(),
          new StorageSpaceCharacteristics(),
          new WifiPasswordCharacteristics(),
          new WifiStatusCharacteristics(),
          new DeviceStatusCharacteristics()
      ]
  });
}

util.inherits(EdisonGenericAttributeService, BlenoPrimaryService);
module.exports = EdisonGenericAttributeService;
