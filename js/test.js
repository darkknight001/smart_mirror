const electron = require('electron');

const { app, BrowserWindow } = electron;



app.on('ready',()=>{
    console.log("starting electron app");
    let mainWindow = new BrowserWindow({});
    mainWindow.loadURL("https://google.com");
})