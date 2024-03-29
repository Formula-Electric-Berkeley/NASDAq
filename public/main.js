const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')
var serial = require("./serial")

require('../src/IPC-controller/main');

require('@electron/remote/main').initialize()

function createWindow() {
    // Create the browser window.
    const win = new BrowserWindow({
        title: "NASQAq",
        icon: path.join(__dirname, 'favicon.ico'),
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule: true,
            contextIsolation: false,
        }
    })
    
    win.maximize();
    
    require('@electron/remote/main').enable(win.webContents)

    //load the index.html from a url
    win.loadURL('http://localhost:3749');

    // Open the DevTools.
    // win.webContents.openDevTools()
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(createWindow)


ipcMain.on('anything-asynchronous', (event, arg) => {
    // gets triggered by the async button defined in the App component
    console.log("async",arg) // prints "async ping"
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.

    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
    }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
