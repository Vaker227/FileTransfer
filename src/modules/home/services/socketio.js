const { io } = require("socket.io-client");
const store = require("../../redux/store");
const { getPublicIP } = require("../services/client.service");

let socket;

module.exports.connect = function () {
  socket = io("http://localhost:3000/");
  socket.on("connect", () => {
    getPublicIP()
      .then((res) => {
        store.dispatch({ type: "UPDATE_IP", data: res.data });
        store.dispatch({ type: "UPDATE_SOCKETID", data: socket.id });
        store.dispatch({ type: "CONNECT_TO_SERVER" });
        socket.emit("data-from-client", store.getState().user);
      })
      .catch((err) => console.log(err));
  });
  socket.on("update-clients-list", (clients) => {
    if (clients) {
      store.dispatch({ type: "UPDATE_CLIENTS_LIST", data: clients });
    }
  });
  socket.on("disconnect", (reason) => {
    console.log(reason);
    store.dispatch({ type: "DISCONNECT_FROM_SERVER" });
    store.dispatch({ type: "DISCONNECT_PRIVATE_CONNECTION" });
  });
  // receiver
  socket.on("request-private-connection", (requestedSocketID) => {
    store.dispatch({ type: "RECEIVING_REQUEST", data: requestedSocketID });
  });
  socket.on("target-leave-private-connection", () => {
    store.dispatch({ type: "DISCONNECT_PRIVATE_CONNECTION" });
  });
};

module.exports.acceptPrivateConnection = (requestedSocketID) => {
  // accept
  socket.emit(
    "response-private-connection",
    requestedSocketID,
    socket.id,
    (response) => {
      // response type: 'timeout' 'accept: ${}'
      if (response == "timeout") {
        console.log("timeout");
        return;
      }
      const roomID = response.split(" ")[1];
      console.log(response);
      console.log(roomID);
      store.dispatch({
        type: "CONNECT_PRIVATE_CONNECTION",
        data: { roomID, targetID: requestedSocketID },
      });
    }
  );
};
module.exports.rejectPrivateConnection = () => {
  // reject
  socket.emit("response-private-connection");
  console.log("rejected");
};

module.exports.disconnect = function () {
  socket.disconnect();
};
module.exports.reconnect = function () {
  socket.connect();
};

// requester
module.exports.connectPrivate = (targetSocketID) => {
  if (socket.disconnected || targetSocketID == null) {
    return;
  }
  socket.emit("request-private-connection", targetSocketID, (response) => {
    // 4 type response : 'timeout' 'reject' 'accept: ${roomID}' 'already in connection: ${roomID}'
    if (response == "timeout") {
      console.log("timeout");
      return;
    }
    if (response == "reject") {
      console.log("reject");
      return;
    }
    if (response.includes("already in connection")) {
      const alreadyRoomID = response.split(": ")[1];
      console.log(alreadyRoomID);
      return;
    }
    console.log(response);
    const roomID = response.split(": ")[1];
    console.log("Room ID: ", roomID);
    store.dispatch({
      type: "CONNECT_PRIVATE_CONNECTION",
      data: { roomID, targetID: targetSocketID },
    });
  });
};
