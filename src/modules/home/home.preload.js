const { contextBridge, ipcRenderer, app } = require("electron");

contextBridge.exposeInMainWorld("electron", {
  // Default data
  getDefaultData: () => {
    return ipcRenderer.sendSync("get-default-data");
  },
  setDefaultData: (data) => {
    ipcRenderer.send("set-default-data", JSON.stringify(data));
  },
  //save download file
  saveFileTo: (name) => {
    return ipcRenderer
      .invoke("create-file", name)
      .then((result) => {
        if (result.canceled) {
          return null;
        }
        return result.filePath;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  appendFile: (path, data) => {
    return ipcRenderer.invoke("append-file", path, data);
  },
  sendMessage: (number) => {
    ipcRenderer.send(
      "message",
      new Uint8Array(new ArrayBuffer(1024 * 1024 * number)).fill(1)
    );
  },
  openFileInFoler: (filePath) => {
    ipcRenderer.send("open-file-in-folder", filePath);
  },
  removeStoppedFile: (filePath) => {
    ipcRenderer.send("remove-stopped-file", filePath);
  },
  quitApp: () => {
    ipcRenderer.send("quit-app");
  },
});
