const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electron", {
  sendMessage: (number) => {
    ipcRenderer.send(
      "message",
      new Uint8Array(new ArrayBuffer(1024 * 1024 * number)).fill(1)
    );
  },
});
