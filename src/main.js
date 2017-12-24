const electron = require("electron");
const url = require("url");
const path = require("path");

process.env.NODE_ENV = "development";

const {app, BrowserWindow, Menu} = electron;

let menuWindow;
let gameWindow;

const mainMenuTemplate = [
  {
    Label: "Game",
    submenu: [
      {
        label: "Start game",
        click() {
          createGameWindow();
        }
      },
      {
        label: "quit",
        click() {
          app.quit();
        }
      }
    ]
  }
];

app.on("ready", () => {
  menuWindow = new BrowserWindow({
    width: 800,
    height: 600
  });
  menuWindow.loadURL(url.format({
    pathname: path.join(__dirname, "./html/menuWindow.html"),
    protocol: "file:",
    slashes: true
  }));
  menuWindow.on("closed", () => {
    app.quit();
  });
  const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
  Menu.setApplicationMenu(mainMenu);
});

let createGameWindow;
createGameWindow = () => {
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
  gameWindow.on("closed", () => {
    gameWindow = null;
  });
}

if (process.env.NODE_ENV !== "production") {
  mainMenuTemplate.push({
    label: "Developer Tools",
    submenu: [
      {
        role: "reload"
      },
      {
        label: "Toogle developer tools. Yiay",
        accelerator: process.platform === "darwin" ? "Command+I" : "Ctrl+I",
        click(item, focusedWindow) {
          focusedWindow.toggleDevTools();
        }
      }
    ]
  });
}
