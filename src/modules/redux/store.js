const redux = require("redux");

const defaultState = {
  user: {
    name: "Linh",
    ip: null,
    port: null,
    socketID: null,
  },
  clients: {
    list: [],
  },
  privateConnection: {
    roomID: null,
    targetID: null,
    targetData: {},
    isReceivingRequest: false,
    isRequesting: false,
    requestingTarget: null,
    lastRequestResult: null,
    historyLog: [], // message data {text, time, user}
  },
  status: {
    toServer: false,
    toPeer: false,
    checkingNAT: false,
    natType: "checking",
  },
  fileManager: {
    list: [], // file type {name,size,modified(milisecond)}
    haveNoti: false,
  },
  webRTC: {
    status: "idle", //idle, new , checking, connected, completed , fail
    configType: "stun", //stun, turn
  },
};
const userReducer = (state = {}, action) => {
  switch (action.type) {
    case "UPDATE_IP":
      return Object.assign({}, state, {
        ip: action.data.ip,
        port: action.data.port,
      });
    case "DISCONNECT_FROM_SERVER":
      return Object.assign({}, state, {
        ip: null,
        port: null,
        socketID: null,
      });
    case "UPDATE_SOCKETID":
      return Object.assign({}, state, {
        socketID: action.data,
      });
    default:
      return state;
  }
};

const clientsReducer = (state = {}, action) => {
  switch (action.type) {
    case "UPDATE_CLIENTS_LIST":
      return Object.assign({}, state, {
        list: action.data,
      });
    case "DISCONNECT_FROM_SERVER":
      return Object.assign({}, state, {
        list: [],
      });
    default:
      return state;
  }
};

const privateConnectionReducer = (state = {}, action) => {
  switch (action.type) {
    case "REQUESTING_PRIVATE_CONNECTION":
      return Object.assign({}, state, {
        isRequesting: true,
        requestingTarget: action.data,
      });
    case "END_REQUESTING_PRIVATE_CONNECTION":
      return Object.assign({}, state, {
        isRequesting: false,
        requestingTarget: null,
        lastRequestResult: action.data,
      });
    case "RECEIVING_REQUEST":
      return Object.assign({}, state, {
        isReceivingRequest: true,
        targetID: action.data,
      });
    case "END_RECEIVING_REQUEST":
      return Object.assign({}, state, {
        isReceivingRequest: false,
        targetID: action.data ? state.targetID : null,
      });
    case "CONNECT_TO_SERVER":
      return Object.assign({}, state, {
        historyLog: [...state.historyLog, action.data],
      });
    case "DISCONNECT_FROM_SERVER":
      return Object.assign({}, state, {
        historyLog: [...state.historyLog, action.data],
      });
    case "CONNECT_PRIVATE_CONNECTION":
      return Object.assign({}, state, {
        roomID: action.data.roomID,
        targetID: action.data.targetID,
        historyLog: [...state.historyLog, action.data.message],
      });
    case "DISCONNECT_PRIVATE_CONNECTION":
      const newHistoryLog = action.data
        ? [...state.historyLog, action.data]
        : [...state.historyLog];
      return Object.assign({}, state, {
        roomID: null,
        targetID: null,
        targetData: null,
        historyLog: newHistoryLog,
        lastRequestResult: "online",
      });
    case "UPDATE_TARGET_DATA":
      return Object.assign({}, state, {
        targetData: action.data,
      });
    case "UPDATE_HISTORY_LOG":
      return Object.assign({}, state, {
        historyLog: [...state.historyLog, action.data],
      });
    default:
      return state;
  }
};
const statusReducer = (state = {}, action) => {
  switch (action.type) {
    case "CHECKING_NAT":
      return Object.assign({}, state, {
        checkingNAT: action.data,
      });
    case "SET_NAT_TYPE":
      return Object.assign({}, state, {
        natType: action.data,
      });
    case "CONNECT_TO_SERVER":
      return Object.assign({}, state, {
        toServer: true,
      });
    case "DISCONNECT_FROM_SERVER":
      return Object.assign({}, state, {
        toServer: false,
        toPeer: false,
      });
    case "CONNECT_PRIVATE_CONNECTION":
      return Object.assign({}, state, {
        toPeer: true,
      });
    case "DISCONNECT_PRIVATE_CONNECTION":
      return Object.assign({}, state, {
        toPeer: false,
      });
    default:
      return state;
  }
};

const fileManagerReducer = (state = {}, action) => {
  switch (action.type) {
    case "ADD_FILE_LIST":
      return Object.assign({}, state, { list: [...state.list, action.data] });
    case "REMOVE_FILE_LIST":
      const newList = state.list.filter((file) => {
        return file.modified != action.data;
      });
      return Object.assign({}, state, { list: newList });
    default:
      return state;
  }
};
const webRTCReducer = (state = {}, action) => {
  switch (action.type) {
    case "UPDATE_WEBRTC_STATUS":
      return Object.assign({}, state, { status: action.data });
    case "SET_WEBRTC_CONFIG":
      return Object.assign({}, state, { config: action.data });

    default:
      return state;
  }
};

const combinedReducer = redux.combineReducers({
  user: userReducer,
  clients: clientsReducer,
  status: statusReducer,
  privateConnection: privateConnectionReducer,
  fileManager: fileManagerReducer,
  webRTC: webRTCReducer,
});
const store = redux.createStore(
  combinedReducer,
  defaultState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

module.exports = store;