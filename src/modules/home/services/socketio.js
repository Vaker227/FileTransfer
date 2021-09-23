const { io } = require("socket.io-client");
const store = require("../../redux/store");

const { getPublicIP } = require("../services/client.service");
const helper = require("../../helper");

let socket;

module.exports.connect = function () {
  socket = io("http://localhost:3000/");
  socket.on("connect", () => {
    getPublicIP()
      .then((res) => {
        store.dispatch({ type: "UPDATE_IP", data: res.data });
        store.dispatch({ type: "UPDATE_SOCKETID", data: socket.id });
        store.dispatch({
          type: "CONNECT_TO_SERVER",
          data: helper.notiMessage("Connected to server"),
        });
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
    store.dispatch({
      type: "DISCONNECT_FROM_SERVER",
      data: helper.notiMessage("Disconnected from server"),
    });
    store.dispatch({ type: "DISCONNECT_PRIVATE_CONNECTION" });
  });
  // receiver
  socket.on("request-private-connection", (requestedSocketID) => {
    store.dispatch({ type: "RECEIVING_REQUEST", data: requestedSocketID });
    receiveTimeoutHandle = setTimeout(() => {
      store.dispatch({ type: "END_RECEIVING_REQUEST" });
    }, 6000);
  });
  socket.on("target-leave-private-connection", () => {
    store.dispatch({
      type: "DISCONNECT_PRIVATE_CONNECTION",
      data: helper.notiMessage("Connected user leaved room "),
    });
  });
  // update target data
  socket.on("update-target-user-data", (targetData) => {
    console.log(targetData);
    store.dispatch({ type: "UPDATE_TARGET_DATA", data: targetData });
  });

  // message private connection
  socket.on("private-send-message", (data) => {
    // data :{text:..., time: ..., user:...}
    if (data) {
      store.dispatch({
        type: "UPDATE_HISTORY_LOG",
        data,
      });
    }
  });
};

let receiveTimeoutHandle;
module.exports.acceptPrivateConnection = (requestedSocketID) => {
  // accept
  clearTimeout(receiveTimeoutHandle);
  socket.emit(
    "response-private-connection",
    requestedSocketID,
    socket.id,
    (response) => {
      // response type: 'accept: ${}'
      const roomID = response.split(" ")[1];
      store.dispatch({
        type: "CONNECT_PRIVATE_CONNECTION",
        data: {
          roomID,
          targetID: requestedSocketID,
          message: helper.notiMessage("Connected to private room"),
        },
      });
    }
  );
};
module.exports.rejectPrivateConnection = () => {
  // reject
  clearTimeout(receiveTimeoutHandle);
  socket.emit("response-private-connection");
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
  store.dispatch({
    type: "REQUESTING_PRIVATE_CONNECTION",
    data: targetSocketID,
  });
  socket.emit("request-private-connection", targetSocketID, (response) => {
    // 4 type response : 'timeout' 'reject' 'accept: ${roomID}' 'already in connection: ${roomID}'
    if (response == "timeout" || response == "reject" || response == "busy") {
      store.dispatch({
        type: "END_REQUESTING_PRIVATE_CONNECTION",
        data: response,
      });
      return;
    }
    console.log(response);
    const roomID = response.split(": ")[1];
    console.log("Room ID: ", roomID);
    store.dispatch({
      type: "END_REQUESTING_PRIVATE_CONNECTION",
      data: "success",
    });
    store.dispatch({
      type: "CONNECT_PRIVATE_CONNECTION",
      data: {
        roomID,
        targetID: targetSocketID,
        message: helper.notiMessage("Connected to private room"),
      },
    });
  });
};
module.exports.disconnectPrivate = (roomID) => {
  socket.emit("disconnect-room", roomID, (result) => {
    if (result == "success") {
      store.dispatch({
        type: "DISCONNECT_PRIVATE_CONNECTION",
        data: helper.notiMessage("Leaved private room"),
      });
    }
  });
};

module.exports.sendMessage = (message, roomID) => {
  if (!store.getState().status.toPeer) {
    store.dispatch({
      type: "UPDATE_HISTORY_LOG",
      data: {
        text: "Need connect to a client first!",
        time: helper.getTime(),
        user: "System",
      },
    });
    return;
  }
  socket.emit(
    "private-send-message",
    { text: message, time: helper.getTime(), socketID: socket.id },
    roomID
  );
};
