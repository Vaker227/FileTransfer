const path = require("path");

const { app, BrowserWindow } = require("electron");

require("electron-reload")(["./src/modules/home/*.html", "./preload.js" , "./src/dist/**"], {
  hardResetMethod: "exit",
});

app.whenReady().then(() => {
  require("./src/modules/home/home")();
});

app.once("window-all-closed", () => {
  app.quit();
});
