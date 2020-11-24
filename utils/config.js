const nconf = require('nconf');
const configFilePath = 'C://New Folder/electron-launcher.json';

exports.loadConfig = () => nconf.argv().env().file({ file: configFilePath });

exports.getFromConfig = propertyName => nconf.get(propertyName);
