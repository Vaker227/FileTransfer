const redux = require("redux");

const defaultState = {
  user: {
    name: "Linh",
  },
  clients: {
    list: [],
  },
  privateConnection: {
    roomID: null,
    targetID: null,
    isReceivingRequest: false,
  },
  status: {
    toServer: false,
    toPeer: false,
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
        ip: undefined,
        port: undefined,
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
    case "RECEIVING_REQUEST":
      return Object.assign({}, state, {
        isReceivingRequest: true,
        targetID: action.data,
      });
    case "END_RECEIVING_REQUEST":
      return Object.assign({}, state, {
        isReceivingRequest: false,
        targetID: !action.data ? null : state.targetID,
      });
    case "CONNECT_PRIVATE_CONNECTION":
      return Object.assign({}, state, {
        roomID: action.data.roomID,
        targetID: action.data.targetID,
      });
    case "DISCONNECT_PRIVATE_CONNECTION":
      return Object.assign({}, state, {
        roomID: null,
        targetID: null,
      });
    default:
      return state;
  }
};
const statusReducer = (state = {}, action) => {
  switch (action.type) {
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

const combinedReducer = redux.combineReducers({
  user: userReducer,
  clients: clientsReducer,
  status: statusReducer,
  privateConnection: privateConnectionReducer,
});
const store = redux.createStore(
  combinedReducer,
  defaultState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

module.exports = store;
