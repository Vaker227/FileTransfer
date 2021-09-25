const { BrowserWindow, ipcMain } = require("electron");
const path = require("path");

module.exports = function () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    autoHideMenuBar: true,
    webPreferences: {
      preload: path.join(__dirname, "home.preload.js"),
    },
  });
  win.loadFile("./src/modules/home/home.html");

  ipcMain.on("message", (event, data1, data2) => {
    if (data1) {
      console.log(data1);
    }
    if (data2) {
      console.log(data2);
    }
  });

  return win;
};
