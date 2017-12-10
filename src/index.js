const electron = require("electron");
const url = require("url");
const path = require("path");

const {app, BrowserWindow} = electron;

let gameWindow;

app.on('ready', function() {
    gameWindow = new BrowserWindow({});
    gameWindow.loadURL(url.format({
        pathname: path.join(__dirname, './html/gameWindow.html'),
        protocol: "file:",
        slashes: true
    }));
    gameWindow.on('closed', function() {
        app.quit()
    });
});
