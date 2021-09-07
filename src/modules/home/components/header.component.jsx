import React, { useEffect, useState } from "react";
import { Tooltip, Modal } from "bootstrap";
import { connect } from "react-redux";

import UserDropDown from "./user-info.component.jsx";
import socketIO from "../services/socketio";

function NotiRequestPrivateConnection(props) {
  const handleAccept = () => {
    socketIO.acceptPrivateConnection(props.targetID);
    props.endReceivingPhase();
  };
  const handleReject = () => {
    socketIO.rejectPrivateConnection();
    props.endReceivingPhase(false);
  };

  return (
    <div
      className="modal fade"
      id="requestModal"
      data-bs-backdrop="static"
      tabIndex="-1"
    >
      <div className="modal-dialog modal-sm">
        <div className="modal-content">
          <div className="modal-header">
            <button className="btn btn-primary me-3" disabled>
              <i className="far fa-bell" style={{ fontSize: "1.5rem" }}></i>
            </button>
            Someone request a private connection
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-danger"
              data-bs-dismiss="modal"
              onClick={handleReject}
            >
              <i className="far fa-times-circle"></i>
            </button>
            <button
              type="button"
              className="btn btn-success-custom"
              data-bs-dismiss="modal"
              onClick={handleAccept}
            >
              <i className="far fa-check-circle"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const Header = (props) => {
  const [modal, setModal] = useState(null);
  useEffect(() => {
    const tooltip = new Tooltip(document.getElementById("publicIp"));
    setModal(
      new Modal(document.getElementById("requestModal"), { keyboard: false })
    );
  }, []);
  useEffect(() => {
    if (props.privateConnection.isReceivingRequest) {
      modal.show();
    }
  }, [props.privateConnection.isReceivingRequest]);
  const notiLostConnection = (
    <div
      className={`float-start ms-4 btn btn-danger`}
      data-bs-placement="right"
      title="Can't get public IP due to connection"
      id="publicIp"
    >
      <div
        className="spinner-border text-light"
        style={{ width: "1rem", height: "1rem", borderWidth: "0.2rem" }}
      ></div>{" "}
      Lost connection
    </div>
  );
  const notiPublicIP = (
    <div
      className={`float-start ms-4 btn btn-primary`}
      data-bs-placement="right"
      title="Public IP of this device "
      id="publicIp"
    >
      {`${props.user.ip}:${props.user.port}`}
    </div>
  );
  return (
    <div>
      {props.status.toServer ? notiPublicIP : notiLostConnection}
      <div className="float-end me-4 " id="user">
        <UserDropDown />
      </div>
      <NotiRequestPrivateConnection
        targetID={props.privateConnection.targetID}
        endReceivingPhase={props.endReceivingPhase}
      />
    </div>
  );
};

const HeaderSTP = (state) => {
  return {
    user: state.user,
    status: state.status,
    privateConnection: state.privateConnection,
  };
};
const HeaderDTP = (dispatch) => {
  return {
    updatePublicIP: function (data) {
      return dispatch({ type: "UPDATE_IP", data });
    },
    endReceivingPhase: function (isAccept) {
      return dispatch({ type: "END_RECEIVING_REQUEST", data: isAccept });
    },
  };
};

const HeaderReduxed = connect(HeaderSTP, HeaderDTP)(Header);

export default HeaderReduxed;
