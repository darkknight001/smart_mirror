const core = require('./core');
const electron = require('electron');

const { app, BrowserWindow } = electron;


const createWindow = ()=>{
    app.commandLine.appendSwitch("autoplay-policy", "no-user-gesture-required");
    let electronOptions = {
        width: 800,
		height: 600,
		x: 0,
		y: 0,
		darkTheme: true,
		webPreferences: {
			nodeIntegration: false,
		},
		backgroundColor: "#000000",
        fullscreen : true,
		autoHideMenuBar : true
    };


    let mainWindow = new BrowserWindow(electronOptions);
    mainWindow.loadURL("http://localhost:5999");

    mainWindow.on("closed",()=>{
        mainWindow=null;
    });
}

core.start();

app.on('ready',()=>{
    console.log("starting electron app");
    createWindow();
})

app.on("before-quit", (event) => {
	console.log("Shutting down server...");
	event.preventDefault();
	setTimeout(() => {
		process.exit(0);
	}, 3000); // Force-quit after 3 seconds.
	core.stop();
	process.exit(0);
});
