const nconf = require('nconf');

exports.loadConfig = () => nconf.argv().env().file({ file: 'C://New Folder/electron-launcher.json' });

exports.getFromConfig = propertyName => nconf.get(propertyName);
