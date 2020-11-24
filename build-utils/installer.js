const { getFromConfig, loadConfig } = require('../utils/config');
const { MSICreator } = require('electron-wix-msi');
const path = require('path');

loadConfig();

const appName = getFromConfig('appName');
const appDescription = getFromConfig('appDescription');
const appManufacturer = getFromConfig('appManufacturer');
const appVersion = getFromConfig('appVersion');

if (!appName || !appDescription || !appManufacturer) {
  console.log("ERROR, arguments weren't passed as mentioned in README");
  console.log('msi not created, aborting');
} else {
  console.log('starting app compilation');
  const msiCreator = new MSICreator({
    appDirectory: path.resolve(__dirname, `../${appName}-win32-x64`),
    outputDirectory: path.resolve(__dirname, '../windows_installer'),
    description: appDescription,
    exe: appName,
    name: appName,
    manufacturer: appManufacturer,
    version: appVersion || '1.0.0',
    ui: {
      chooseDirectory: true
    }
  });

  msiCreator.create().then(function () {
    msiCreator
      .compile()
      .then(() => console.log('app compilation completed successfully'))
      .catch(err => console.log(`error during compilation, error: ${JSON.stringify(err)}`));
  });
}
