const { BrowserWindow } = require("electron");

module.exports = function () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    autoHideMenuBar: true,
  });
  win.loadFile("./src/modules/home/home.html");
};