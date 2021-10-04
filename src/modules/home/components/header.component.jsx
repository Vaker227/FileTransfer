import React, { useEffect, useRef, useState } from "react";
import { Tooltip, Modal } from "bootstrap";
import { connect } from "react-redux";

import UserDropDown from "./user-info.component.jsx";
import socketIO from "../services/socketio";
import { testTURN } from "../services/webrtc.service";
import helper from "../../helper";

function SettingModal(props) {
  const [edittingName, setEdittingName] = useState(false);
  const [nameText, setNameText] = useState(props.user.name);
  const [testingServer, setTestingServer] = useState(false);
  const [configServer, setConfigServer] = useState(props.webRTC.configType);
  const [haveChecked, setHaveChecked] = useState(false);
  const [resultCheck, setResultCheck] = useState(false);
  const nameElement = useRef();
  const changeNameText = () => {
    setNameText(nameElement.current.value);
    setEdittingName(false);
  };
  const resetValue = () => {
    setEdittingName(false);
    setNameText(props.user.name);
    setHaveChecked(false);
    setConfigServer(props.webRTC.configType);
  };
  const handleNameKeyDown = (e) => {
    if (e.code == "Enter" || e.code == "NumpadEnter") {
      changeNameText();
      return;
    }
    if (e.code == "Escape") {
      setNameText(props.user.name);
      setEdittingName(false);
    }
  };
  const handleConfigChange = (e) => {
    setTestingServer(true);
    if (e.target.value == "turn") {
      testTURN((result) => {
        setHaveChecked(true);
        setTestingServer(false);
        setResultCheck(result);
        if (result) {
          setConfigServer("turn");
        }
      });
      return;
    }
    setConfigServer("stun");
  };
  const saveChanges = () => {
    let isChanged = false;
    if (nameText != props.user.name) {
      props.changeName(nameText);
      isChanged = true;
    }
    if (configServer != props.webRTC.configType) {
      props.changeConfigServer(configServer);
      isChanged = true;
    }
    if (!isChanged) {
      props.closeSettingModal();
      resetValue();
      return;
    }
    socketIO.disconnect();
    socketIO.reconnect();
    props.closeSettingModal();
    resetValue();
  };

  return (
    <div className="modal" id="setting-modal" tabIndex="-1">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Setting</h5>
            <button
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={resetValue}
            ></button>
          </div>
          <div className="modal-body">
            <div className="mb-3">
              <span className="fw-bold">Your name: </span>
              {edittingName ? (
                <div
                  className="input-group input-group-sm"
                  style={{
                    width: "auto",
                    display: "inline-flex",
                  }}
                >
                  <input
                    type="text"
                    className="form-control"
                    onKeyDown={handleNameKeyDown}
                    ref={nameElement}
                  />
                  <span className="input-group-text">
                    <i
                      className="fas fa-undo"
                      style={{ cursor: "pointer" }}
                      onClick={resetValue}
                    ></i>
                  </span>
                  <span className="input-group-text">
                    <i
                      className="fas fa-check"
                      style={{ cursor: "pointer" }}
                      onClick={changeNameText}
                    ></i>
                  </span>
                </div>
              ) : (
                <>
                  {nameText}
                  <i
                    className="ps-2 fas fa-edit"
                    style={{ cursor: "pointer" }}
                    onClick={() => setEdittingName(true)}
                  ></i>
                </>
              )}
            </div>
            <div>
              <span className="fw-bold">Config Server: </span>
              <select
                className="form-select mb-3"
                style={{ width: "auto", display: "inline-block" }}
                onChange={handleConfigChange}
                value={configServer}
              >
                <option value="stun">STUN</option>
                <option value="turn">TURN</option>
              </select>
              {testingServer ? (
                <div
                  className="spinner-border text-primary"
                  style={{
                    width: 30,
                    height: 30,
                    position: "relative",
                    top: 6,
                    left: 10,
                  }}
                ></div>
              ) : haveChecked ? (
                <>
                  {resultCheck ? (
                    <i className="fas fa-check ms-2 fs-1 text-success align-middle"></i>
                  ) : (
                    <i className="fas fa-times ms-2 fs-1 text-danger align-middle"></i>
                  )}
                </>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="modal-footer">
            <button
              className="btn btn-secondary"
              data-bs-dismiss="modal"
              style={{ fontSize: "1rem", padding: ".375rem .75rem" }}
              onClick={resetValue}
            >
              Close
            </button>
            <button
              className="btn btn-primary"
              style={{ fontSize: "1rem", padding: ".375rem .75rem" }}
              onClick={saveChanges}
            >
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
const SettingModalSTP = (state) => {
  return {
    user: state.user,
    webRTC: state.webRTC,
  };
};
const SettingModalDTP = (dispatch) => {
  return {
    changeName: function (name) {
      return dispatch({ type: "CHANGE_NAME", data: name });
    },
    changeConfigServer: function (type) {
      return dispatch({ type: "SET_WEBRTC_CONFIG", data: type });
    },
  };
};

const SettingModalReduxed = connect(
  SettingModalSTP,
  SettingModalDTP
)(SettingModal);

function NotiRequestPrivateConnection(props) {
  const handleAccept = () => {
    socketIO.acceptPrivateConnection(props.targetID);
    props.endReceivingPhase(true);
  };
  const handleReject = () => {
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
              className="btn btn-danger"
              data-bs-dismiss="modal"
              onClick={handleReject}
            >
              <i className="far fa-times-circle"></i>
            </button>
            <button
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
          helper.collectGarbage();
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
          : "Your NAT type is symmetric mean you need use TURN server (Setting)"
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
        <span className="text-capitalize">{props.status.natType} NAT</span>
      )}
    </div>
  );
}

const Header = (props) => {
  const [requestModal, setRequestModal] = useState(null);
  const [settingModal, setSettingModal] = useState(null);
  // tooltip
  useEffect(() => {
    let ipTooltip = new Tooltip(document.getElementById("publicIp"));
    return () => {
      ipTooltip.dispose();
    };
  }, [props.status.toServer]);
  // modal
  useEffect(() => {
    setSettingModal(
      new Modal(document.getElementById("setting-modal"), { keyboard: false })
    );
    setRequestModal(
      new Modal(document.getElementById("requestModal"), { keyboard: false })
    );
    return () => {
      if (settingModal) {
        settingModal.dispose();
      }
      if (requestModal) {
        requestModal.dispose();
      }
    };
  }, []);
  useEffect(() => {
    if (props.privateConnection.isReceivingRequest) {
      requestModal.show();
    }
    if (!props.privateConnection.isReceivingRequest) {
      if (requestModal) {
        requestModal.hide();
      }
    }
  }, [props.privateConnection.isReceivingRequest]);

  const openSettingModal = () => {
    settingModal.show();
  };
  const closeSettingModal = () => {
    settingModal.hide();
  };

  // noti template
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
        <UserDropDown openSettingModal={openSettingModal} />
      </div>
      <NotiRequestPrivateConnection
        targetID={props.privateConnection.targetID}
        endReceivingPhase={props.endReceivingPhase}
      />
      <SettingModalReduxed closeSettingModal={closeSettingModal} />
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
