import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/header.component.jsx";
import ClientList from "./components/client-list.component.jsx";
import InteractingView from "./components/interacting-view.component.jsx";
import "./style/home.css";

function App() {
  return ( 
    <div>
      <Header />
      <ClientList />
      <InteractingView />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
