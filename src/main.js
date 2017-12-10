const electron = require("electron");
const url = require("url");
const path = require("path");

process.env.NODE_ENV = "development";

const {app, BrowserWindow} = electron;

let menuWindow;
let gameWindow;

app.on("ready", function() {
    menuWindow = new BrowserWindow({
        width: 800,
        height: 600
    });
    menuWindow.loadURL(url.format({
        pathname: path.join(__dirname, "./html/menuWindow.html"),
        protocol: "file:",
        slashes: true
    }));
    menuWindow.on("closed", function() {
        app.quit();
    });
});

function createGameWindow() {
    gameWindow = new BrowserWindow({
        width: 800,
        height: 600,
        title: "Le Game"
    });
    gameWindow.loadURL(url.format({
        pathname: path.join(__dirname, "gameWindow.html"),
        protocol: "file:",
        slashes:true
    }));
}
