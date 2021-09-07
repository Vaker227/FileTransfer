import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";

import Header from "./components/header.component.jsx";
import ClientList from "./components/client-list.component.jsx";
import InteractingView from "./components/interacting-view.component.jsx";
import "./style/home.css";
import store from "../redux/store";
import socketIO from "./services/socketio";

function App() {
  useEffect(() => {
    socketIO.connect();
  }, []);
  return (
    <div>
      <Header />
      <ClientList />
      <InteractingView />
    </div>
  );
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
