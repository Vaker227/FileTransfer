import React, { useEffect, useRef, useState } from "react";
import { Tooltip, Modal } from "bootstrap";
import { connect } from "react-redux";

import UserDropDown from "./user-info.component.jsx";
import socketIO from "../services/socketio";

function NotiRequestPrivateConnection(props) {
  const handleAccept = () => {
    socketIO.acceptPrivateConnection(props.targetID);
    props.endReceivingPhase(true);
  };
  const handleReject = () => {
    console.log("end receiving request");
    socketIO.rejectPrivateConnection();
    props.endReceivingPhase();
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

function CheckNAT(props) {
  const checkNATRef = useRef(null);
  useEffect(() => {
    new Tooltip(document.getElementById("check-nat"));
  }, [props.status.natType]);
  useEffect(() => {
    props.checkingNAT(true);
    // https://webrtchacks.com/symmetric-nat/
    let checkNAT = new RTCPeerConnection({
      iceServers: [
        { urls: "stun:stun1.l.google.com:19302" },
        { urls: "stun:stun2.l.google.com:19302" },
      ],
    });
    checkNAT.createDataChannel("checkNAT");
    const candidates = [];
    checkNAT.onicecandidate = function (e) {
      if (e.candidate && e.candidate.candidate.indexOf("srflx") !== -1) {
        const cand = e.candidate;
        if (!candidates[cand.relatedPort]) candidates[cand.relatedPort] = [];
        candidates[cand.relatedPort].push(cand.port);
      } else if (!e.candidate) {
        // modified from original
        if (Object.keys(candidates).length >= 1) {
          const isNormal = candidates.some((relatedPort) => {
            return relatedPort.length === 1;
          });
          props.setNatType(isNormal ? "normal" : "symmetric");
          props.checkingNAT(false);

          //clear checkNat
          checkNAT.close();
          checkNAT = null;
          URL.revokeObjectURL(URL.createObjectURL(new Blob([1])));
        }
      }
    };
    checkNAT.createOffer().then((data) => {
      checkNAT.setLocalDescription(data);
    });
    return () => {
      props.setNatType("checking");
    };
  }, []);
  return (
    <div
      className={`float-start ms-2 btn btn-primary`}
      data-bs-placement="right"
      title={
        props.status.natType == "checking"
          ? "We're checking your NAT type"
          : props.status.natType == "normal"
          ? "Your NAT type is ready to connect"
          : "Your NAT type is symestic mean you need switch to TURN server (Setting)"
      }
      id="check-nat"
      ref={checkNATRef}
    >
      {props.status.natType == "checking" ? (
        <div
          className="spinner-border text-light"
          style={{ width: "1rem", height: "1rem", borderWidth: "0.2rem" }}
        ></div>
      ) : (
        `${
          props.status.natType[0].toUpperCase() + props.status.natType.slice(1)
        } NAT`
      )}
    </div>
  );
}

const Header = (props) => {
  const [modal, setModal] = useState(null);
  useEffect(() => {
    let ipTooltip = new Tooltip(document.getElementById("publicIp"));
    return () => {
      ipTooltip.dispose();
    };
  }, [props.status.toServer]);
  useEffect(() => {
    setModal(
      new Modal(document.getElementById("requestModal"), { keyboard: false })
    );
    return () => {
      console.log("header unmount");
      if (modal) {
        modal.dispose();
      }
    };
  }, []);
  useEffect(() => {
    if (props.privateConnection.isReceivingRequest) {
      modal.show();
    }
    if (!props.privateConnection.isReceivingRequest) {
      if (modal) {
        modal.hide();
      }
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
    <>
      <div
        className={`float-start ms-4 btn btn-primary`}
        data-bs-placement="right"
        title="Public IP of this device "
        id="publicIp"
      >
        {`${props.user.ip}:${props.user.port}`}
      </div>
      <CheckNATReduxed />
    </>
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

const CheckNATSTP = (state) => {
  return { status: state.status };
};

const CheckNATDTP = (dispatch) => {
  return {
    checkingNAT: function (isChecking) {
      return dispatch({ type: "CHECKING_NAT", data: isChecking });
    },
    setNatType: function (natType) {
      return dispatch({ type: "SET_NAT_TYPE", data: natType });
    },
  };
};
const CheckNATReduxed = connect(CheckNATSTP, CheckNATDTP)(CheckNAT);

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
    endReceivingPhase: function (isAccept = false) {
      return dispatch({ type: "END_RECEIVING_REQUEST", data: isAccept });
    },
  };
};

const HeaderReduxed = connect(HeaderSTP, HeaderDTP)(Header);

export default HeaderReduxed;
