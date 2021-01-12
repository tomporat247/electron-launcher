const { app, BrowserWindow } = require('electron');
const { loadConfig, getFromConfig } = require('./utils/config.js');

loadConfig();

async function createWindow() {
  const mainWindow = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true,
      nodeIntegrationInWorker: true,
      nodeIntegrationInSubFrames: true,
      enableRemoteModule: true
    }
  });

  if (!getFromConfig('keepMenu')) {
    mainWindow.setMenu(null);
  }
  if (getFromConfig('openDevTools')) {
    mainWindow.webContents.openDevTools();
  }

  mainWindow.maximize();

  await mainWindow.loadFile('loader.html');
  await mainWindow.loadURL(getFromConfig('url'));
  return mainWindow;
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow();

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
