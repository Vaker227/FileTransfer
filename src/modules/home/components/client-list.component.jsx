import React, { useEffect, useReducer, useState } from "react";
import { connect } from "react-redux";

import socketIO from "../services/socketio";

function ClientView(props) {
  return (
    <div
      className={`row`}
      style={{ position: "relative" }}
      onDoubleClick={props.self ? null : props.handleDoubleClick}
    >
      <div className="col-1 text-end">
        {props.self ? <i className="fas fa-user text-primary"></i> : ""}{" "}
        {props.index + 1}
      </div>
      <div className="col-5">{props.client.name}</div>
      <div className="col-2">Connected</div>
      <div className="col-4">{`${props.client.ip}:${props.client.port}`}</div>
    </div>
  );
}

function ClientList(props) {
  const [listClients, setListClients] = useState(null);
  const [selectedClient, setSelectedClient] = useState(null);

  useEffect(() => {
    setListClients(Object.keys(props.clients).map(() => false));
    setSelectedClient(null);
  }, [props.clients]);

  const handleSelectedClient = (e) => {
    const isChecked = e.target.checked;
    const newList = listClients.map((client, inx) =>
      inx == e.target.getAttribute("data-index") ? isChecked : false
    );
    setSelectedClient(isChecked ? e.target.value : null);
    setListClients(newList);
  };
  const handleDoubleClick = (e) => {
    const target = e.target.parentNode.previousSibling;
    const newList = listClients.map((client, inx) =>
      inx == target.getAttribute("data-index") ? true : false
    );
    setSelectedClient(target.value);
    setListClients(newList);
    handlePrivateConnection(target.value);
  };

  const handlePrivateConnection = (targetClient = null) => {
    if (!selectedClient && !targetClient) {
      console.log("invalid selected client");
      return;
    }
    console.log(selectedClient || targetClient);
    socketIO.connectPrivate(selectedClient || targetClient);
  };

  return (
    <div id="clients-list" className="container">
      <div className="row">List</div>
      <div className="row">
        <div className="col-10" id="clients-view">
          <div className="">
            <div id="clients-view-header">
              <div className="row">
                <div className="col-1 text-end">
                  <span>#</span>
                </div>
                <div className="col-5">
                  <span>Name</span>
                </div>
                <div className="col-2">
                  <span>Status</span>
                </div>
                <div className="col-4">
                  <span>IP</span>
                </div>
              </div>
            </div>
            <div id="clients-view-body">
              {Object.keys(props.clients).map((key, index) => {
                return (
                  <label key={index}>
                    <input
                      disabled={key == props.user.socketID}
                      data-index={index}
                      value={key}
                      checked={listClients[index] || false}
                      onChange={handleSelectedClient}
                      onDoubleClick={() => console.log("dbclick")}
                      type="checkbox"
                    ></input>
                    <ClientView
                      index={index}
                      handleDoubleClick={handleDoubleClick}
                      client={props.clients[key]}
                      id={key}
                      self={key == props.user.socketID}
                    />
                  </label>
                );
              })}
            </div>
          </div>
        </div>
        <div className="col-2" id="clients-action">
          <ul>
            <li>
              <button
                className="btn btn-success"
                onClick={handlePrivateConnection}
              >
                Connect
              </button>
            </li>
            <li>
              <button
                className="btn btn-success"
                onClick={() => socketIO.disconnect()}
              >
                Disconnect
              </button>
            </li>
            <li>
              <button
                className="btn btn-success"
                onClick={() => socketIO.reconnect()}
              >
                Reconnect Sever
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

const ClientListSTP = (state) => {
  return { clients: state.clients.list, user: state.user };
};

const ClientListReduxed = connect(ClientListSTP)(ClientList);

export default ClientListReduxed;
