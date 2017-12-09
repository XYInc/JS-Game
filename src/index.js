const electron = require("electron")
const url = require("url")
const path = require("path")

const {app, chromiumWindow} = electron;

let gameWindow;

app.on("ready", function() {
    gameWindow = new chromiumWindow({});
    gameWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'gameWindow.html'),
        protocol: "file:",
        slashes: true
    }));
});
