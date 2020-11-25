# electron-launcher

This is a minimal Electron application based on the [Quick Start Guide](https://electronjs.org/docs/tutorial/quick-start) within the Electron documentation.

A basic Electron application needs just these files:

- `package.json` - Points to the app's main file and lists its details and dependencies.
- `main.js` - Starts the app and creates a browser window to render HTML. This is the app's **main process**.
- `index.html` or `url` - A web page to render. This is the app's **renderer process**.

You can learn more about each of these components within the [Quick Start Guide](https://electronjs.org/docs/tutorial/quick-start).

## Setup

To clone and run this repository you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
git clone https://github.com/tomporat247/electron-launcher.git

# Go into the repository
cd electron-launcher

# Install dependencies
npm install

# To verify that the laucnher works
npm run start
```

## Generate .exe/.msi
Based on the following [Guide](https://ourcodeworld.com/articles/read/927/how-to-create-a-msi-installer-in-windows-for-an-electron-framework-application)

```bash
# To create an .exe
change the "configFilePath" value in utils/config.js to the desired path
npm run exe "myAppName"

# To create .msi
1. create .exe
2. install WiX ToolSet from https://github.com/wixtoolset/wix3/releases (.exe file)
    a. if prompted to instal .net 3.5.1 - do so from https://www.microsoft.com/en-us/download/details.aspx?id=22
3. open Wix ToolSet and click on "Install"
4. add to Windows` PATH:
    a. locate the Wix ToolSet bin folder (should be "C:\Program Files (x86)\WiX Toolset v3.11\bin")
    b. open "Edit the system environment varaibles" on Windows
    c. click on "Environment Variables"
    d. add the path found on step 4.a to the Path system variable
    e. close all cmds/terminals (the new path won't be recognized)
    f. to verify it worked - open a new cmd and run "candle"
5. npm run msi -- --appName "myAppName" --appDescription "myAppDescription" --appManufacturer "myTeam" --appVersion "appVersion"
```

## Customize
loader gif - change `assets/loader.gif`

launcher icon - change `assets/launcher.ico`
