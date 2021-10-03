import React, { useEffect, useReducer, useState } from "react";
import { connect } from "react-redux";

import "../style/client-status.css";
import socketIO from "../services/socketio";

function ClientStatus(props) {
  let status;
  switch (props.status) {
    case "connecting":
      status = (
        <div className="client-status connecting">
          <div className="line"></div>
        </div>
      );
      break;
    case "connected":
      status = <div className="client-status connected">Connected</div>;
      break;
    case "timeout":
    case "reject":
    case "busy":
      status = (
        <div className="client-status error">
          <i className="fas fa-exclamation-triangle"></i>
          <span className="text-capitalize">{props.status}</span>
        </div>
      );
      break;
    default:
      status = <div className="client-status online">Online</div>;
      break;
  }
  return <div className="col-2 ">{status}</div>;
}

function ClientView(props) {
  const [isRequestingTarget, setIsRequestingTarget] = useState(false);
  const [status, setStatus] = useState("online");
  const [handleTimeout, setHandleTimeout] = useState(null);

  useEffect(() => {
    if (props.isConnectingTarget) {
      setStatus("connecting");
      setIsRequestingTarget(true);
      return;
    }
    if (!props.isConnectingTarget && isRequestingTarget) {
      switch (props.lastRequestResult) {
        case "success":
          setStatus("connected");
          break;
        case "busy":
        case "reject":
        case "timeout":
          setStatus(props.lastRequestResult);
          handleResult();
          break;
        default:
          setStatus("online");
          break;
      }
      setIsRequestingTarget(false);
      return;
    }
    if (
      !props.isConnected &&
      !props.isConnectingTarget &&
      !isRequestingTarget
    ) {
      setStatus("online");
    }
  }, [props.isConnectingTarget, props.lastRequestResult]);
  const handleResult = () => {
    setHandleTimeout(
      setTimeout(() => {
        setStatus("online");
      }, 3000)
    );
  };
  const handleDoubleClick = (e) => {
    if (props.self) {
      return;
    }
    props.handleDoubleClick(e);
    clearTimeout(handleTimeout);
  };
  return (
    <div
      className={`row`}
      style={{ position: "relative" }}
      onDoubleClick={handleDoubleClick}
    >
      <div className="col-1 text-end">
        {props.self ? <i className="fas fa-user text-primary"></i> : ""}{" "}
        {props.index + 1}
      </div>
      <div className="col-5">{props.client.name}</div>
      <ClientStatus status={props.isConnected ? "connected" : status} />
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

  // useEffect(() => {
  //   console.log(props.privateConnection.targetID);
  // }, [props.privateConnection]);
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
    if (
      (!selectedClient && !targetClient) ||
      props.privateConnection.targetID ||
      props.privateConnection.isRequesting
    ) {
      return;
    }
    socketIO.connectPrivate(selectedClient || targetClient);
  };
  const handleDisconnectPrivateConnection = () => {
    if (props.status.toPeer) {
      socketIO.disconnectPrivate(props.privateConnection.roomID);
    }
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
                      isConnectingTarget={
                        key == props.privateConnection.requestingTarget
                      }
                      isConnected={
                        props.privateConnection.roomID
                          ? props.privateConnection.roomID.includes(key)
                          : false
                      }
                      lastRequestResult={
                        props.privateConnection.lastRequestResult
                      }
                      privateConnection={props.privateConnection}
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
                className="btn btn-sm btn-success"
                onClick={handlePrivateConnection}
              >
                Connect Peer
              </button>
            </li>
            <li>
              <button
                className="btn btn-sm btn-success"
                onClick={handleDisconnectPrivateConnection}
              >
                Disconnect Peer
              </button>
            </li>
            {/* <li>
              <button
                className="btn btn-sm btn-success"
                onClick={() => socketIO.disconnect()}
              >
                Disconnect Server
              </button>
            </li>
            <li>
              <button
                className="btn btn-sm btn-success"
                onClick={() => socketIO.reconnect()}
              >
                Reconnect Sever
              </button>
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
}

const ClientListSTP = (state) => {
  return {
    clients: state.clients.list,
    user: state.user,
    status: state.status,
    privateConnection: state.privateConnection,
  };
};

const ClientListReduxed = connect(ClientListSTP)(ClientList);

export default ClientListReduxed;
