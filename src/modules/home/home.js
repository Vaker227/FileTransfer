const { BrowserWindow, ipcMain, dialog, shell, app } = require("electron");
const fspromise = require("fs/promises");
const fs = require("fs");
const path = require("path");

const userDataPath = path.join(app.getPath("userData"), "config.json");

module.exports = function () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    autoHideMenuBar: true,
    show: false,
    webPreferences: {
      preload: path.join(__dirname, "home.preload.js"),
    },
  });
  win.loadFile("./src/modules/home/home.html");
  win.on("ready-to-show", () => {
    win.show();
  });
  win.on("will-resize", (e) => {
    e.preventDefault();
  });

  // exchange data
  ipcMain.on("get-default-data", (event) => {
    fs.readFile(userDataPath, "utf-8", (err, data) => {
      if (err) {
        event.returnValue = {};
        return;
      }
      event.returnValue = JSON.parse(data);
    });
  });
  ipcMain.on("set-default-data", (event, data) => {
    fs.readFile(userDataPath, "utf-8", (err, fileRawData) => {
      let fileData = {};
      if (!err) {
        fileData = JSON.parse(fileRawData);
      }
      fs.writeFileSync(
        userDataPath,
        JSON.stringify(Object.assign(fileData, JSON.parse(data)))
      );
    });
  });

  ipcMain.handle("create-file", async (event, name) => {
    result = await dialog.showSaveDialog(win, {
      title: "Save file to",
      defaultPath: name,
    });
    if (!result.canceled) {
      try {
        await fspromise.rm(result.filePath);
      } catch (error) {}
    }
    return result;
  });
  ipcMain.handle("append-file", (event, fileName, data) => {
    return fspromise.appendFile(fileName, data, { encoding: "binary" });
  });
  ipcMain.on("open-file-in-folder", (event, filePath) => {
    shell.showItemInFolder(filePath);
  });
  ipcMain.on("remove-stopped-file", (event, filePath) => {
    fspromise.rm(filePath).catch((error) => {
      console.log(error);
    });
  });
  ipcMain.on("quit-app", () => {
    app.quit();
  });
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
