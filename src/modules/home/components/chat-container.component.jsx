import React, { useEffect, useMemo, useReducer, useRef, useState } from "react";
import { connect } from "react-redux";
import { Tooltip } from "bootstrap";

import "../style/waiting.css";
import webRTC from "../services/webrtc.service";
import helper from "../../helper";
import socketIO from "../services/socketio";

function FileDownloadInfo(props) {
  const fileName = useRef();
  const fileProgress = useRef();
  useEffect(() => {
    let fileNameToolTip = new Tooltip(fileName.current);
    let fileProgressToolTip = new Tooltip(fileProgress.current);
    return () => {
      fileNameToolTip.dispose();
      fileProgressToolTip.dispose();
    };
  }, []);
  useEffect(() => {
    if (props.fileInfo.state === "reject" && !props.haveNoti) {
      setTimeout(() => {
        props.removeFile(props.fileInfo.id);
      }, 3000);
    }
  }, [props.fileInfo.state, props.haveNoti]);
  //accept
  const handleAcceptFile = () => {
    if (!window.electron) {
      console.log("electron is null");
      return;
    }
    window.electron.saveFileTo(props.fileInfo.name).then((result) => {
      if (!result) {
        return;
      }
      webRTC.setReceiveInfo(props.fileInfo, result);
      props.acceptFile(props.fileInfo.id);
      socketIO.acceptFile(props.fileInfo.id);
    });
  };
  //reject
  const handleRejectFile = () => {
    props.removeFile(props.fileInfo.id);
    socketIO.rejectFile(props.fileInfo.id);
  };
  //stop
  const handleStopDownload = () => {
    webRTC.stopDownload();
  };
  //remove(completed)
  const handleRemoveFile = () => {
    props.removeFile(props.fileInfo.id);
  };
  //open folder (completed)
  const handleOpenFolder = () => {
    if (!window.electron) {
      return;
    }
    window.electron.openFileInFoler(props.fileInfo.path);
  };

  const sizeObj = useMemo(() => {
    return helper.changeSizeValue(props.fileInfo.size);
  }, [props.fileInfo.size]);
  const myFile = useMemo(() => {
    return props.fileInfo.origin == props.user.socketID;
  }, [props.fileInfo.origin, props.user.socketID]);
  return (
    <div className="file-download-info row">
      <div className="col-1">
        <i
          className={`fas fa-${myFile ? "upload" : "download"}`}
          data-bs-toggle="tooltip"
          data-bs-placement="left"
          title={myFile ? "Send" : "Receive"}
          ref={fileProgress}
        ></i>
      </div>
      <div className="col-1">
        <i
          className="far fa-file "
          data-bs-toggle="tooltip"
          data-bs-placement="right"
          title={props.fileInfo.name}
          style={{ fontSize: 20 }}
          ref={fileName}
        ></i>
      </div>
      {/*completed */}
      {props.fileInfo.state == "completed" && (
        <>
          <div className="col fw-bold text-success">Finished</div>
          {!myFile && (
            <div
              className="col-2 btn btn-sm"
              style={{
                backgroundColor: "#f1b400",
                borderColor: "#f1b400",
                color: "white",
              }}
              onClick={handleOpenFolder}
            >
              <i className="fas fa-folder-open"></i>
            </div>
          )}
          <div
            className="col-2 btn btn-sm btn-secondary"
            onClick={handleRemoveFile}
          >
            <i className="fas fa-trash"></i>
          </div>
        </>
      )}
      {/*stopped */}
      {props.fileInfo.state == "stopped" && (
        <>
          <div className="col">
            <div className="progress">
              <div
                className="progress-bar bg-warning"
                role="progressbar"
                style={{
                  width: `${props.fileInfo.percent || 0}%`,
                  height: "100%",
                }}
              >
                {props.fileInfo.percent}%
              </div>
            </div>
          </div>
          <div
            className="col-2 btn btn-sm btn-secondary"
            onClick={handleRemoveFile}
          >
            <i className="fas fa-trash"></i>
          </div>
        </>
      )}
      {/*downloading */}
      {props.fileInfo.state == "downloading" && (
        <>
          <div className="col">
            <div className="progress">
              <div
                className="progress-bar "
                role="progressbar"
                style={{
                  width: `${props.fileInfo.percent || 0}%`,
                  height: "100%",
                }}
              >
                {props.fileInfo.percent}%
              </div>
            </div>
          </div>
          <div className="col-1">
            <div className="spinner-grow text-primary"></div>
          </div>
          <div
            className="col-2 btn btn-sm btn-danger"
            onClick={handleStopDownload}
          >
            <i className="far fa-stop-circle"></i>
          </div>
        </>
      )}
      {/* sender rejected */}
      {props.fileInfo.state == "reject" && (
        <>
          <div className="col">File was rejected</div>
          <div className="col-1 me-2 text-danger">
            <i className="fas fa-exclamation-triangle"></i>
          </div>
        </>
      )}
      {/* sender waiting */}
      {props.fileInfo.state == "waiting" && myFile && (
        <>
          <div className="col">Waiting</div>
          <div className="col-1 me-3 pt-2 text-danger">
            <div className="dot-elastic"></div>
          </div>
        </>
      )}
      {/* receiver selecting */}
      {props.fileInfo.state == "waiting" && !myFile && (
        <>
          <div className="col">
            {sizeObj.value} {sizeObj.type}
          </div>
          <div
            className="col-2 btn btn-sm btn-success"
            onClick={handleAcceptFile}
          >
            <i className="far fa-check-circle"></i>
          </div>
          <div
            className="col-2 btn btn-sm btn-danger"
            onClick={handleRejectFile}
          >
            <i className="far fa-times-circle"></i>
          </div>
        </>
      )}
    </div>
  );
}

const FileDownloadInfoSTP = (state) => {
  return { user: state.user };
};
const FileDownloadInfoDTP = (dispatch) => {
  return {
    removeFile: function (fileId) {
      if (window.arrayFile) {
        window.arrayFile = window.arrayFile.filter((file) => {
          return file.id != fileId;
        });
      }
      return dispatch({ type: "REMOVE_FILE_LIST", data: fileId });
    },
    acceptFile: function (fileId) {
      return dispatch({
        type: "UPDATE_STATE_FILE",
        data: { state: "downloading", id: fileId },
      });
    },
  };
};

const FileDownloadInfoReduxed = connect(
  FileDownloadInfoSTP,
  FileDownloadInfoDTP
)(FileDownloadInfo);

function FileManage(props) {
  return (
    <div id="file-manager" className="dropdown">
      <button
        className="btn btn-sm btn-secondary dropdown-toggle"
        data-bs-toggle="dropdown"
        data-bs-auto-close="false"
        onClick={() => {
          if (props.fileManager.haveNoti) {
            props.removeNoti();
          }
        }}
      >
        File Manager
        {props.fileManager.haveNoti ? (
          <span
            className="position-absolute top-0 start-0 translate-middle bg-danger rounded-circle"
            style={{
              padding: "5px",
              border: "1px solid #c8fabe",
            }}
          ></span>
        ) : (
          ""
        )}
      </button>
      <ul className="dropdown-menu dropdown-menu-end">
        {props.fileManager.list.length == 0 ? (
          <div className={"text-center fst-italic "}>Empty</div>
        ) : (
          props.fileManager.list.map((file, inx) => {
            return (
              <FileDownloadInfoReduxed
                fileInfo={file}
                haveNoti={props.fileManager.haveNoti}
                key={inx}
              />
            );
          })
        )}

        {/* <FileDownloadInfo /> */}
      </ul>
    </div>
  );
}

const FileManageSTP = (state) => {
  return {
    fileManager: state.fileManager,
  };
};
const FileManageDTP = (dispatch) => {
  return {
    removeNoti: function () {
      return dispatch({ type: "REMOVE_NOTI" });
    },
  };
};

const FileManageReduxed = connect(FileManageSTP, FileManageDTP)(FileManage);

function Message(props) {
  const tooltipRef = useRef(null);
  useEffect(() => {
    new Tooltip(tooltipRef.current);
  }, []);
  return (
    <li className="message">
      <span
        ref={tooltipRef}
        data-bs-toggle="tooltip"
        data-bs-placement="right"
        title={props.dataMessage.time}
      >
        <span
          className={
            "fw-bolder " +
            (props.dataMessage.user == "System"
              ? "text-secondary"
              : props.dataMessage.socketID == props.mySocketID
              ? "text-primary"
              : "text-danger")
          }
        >
          {props.dataMessage.user}:{" "}
        </span>
        {props.dataMessage.text}
      </span>
    </li>
  );
}

function ChatContainer(props) {
  const [text, setText] = useState("");
  const handleKeyPress = (e) => {
    if (e.key == "Enter") {
      handleSendClick(e);
    }
  };
  useEffect(() => {
    const chatContent = document.getElementById("chat-content");
    chatContent.scrollTop = chatContent.scrollHeight;
  }, [props.privateConnection.historyLog]);
  const handleSendClick = () => {
    if (text == "") {
      return;
    }
    socketIO.sendMessage(text, props.privateConnection.roomID);
    setText("");
  };
  const handleTextChange = (e) => {
    setText(e.target.value);
  };
  return (
    <div id="chat-container" className="col-9 bg-white">
      <FileManageReduxed />
      <div id="chat-content" className="">
        <ul>
          {props.privateConnection.historyLog.map((dataMessage, inx) => (
            <Message
              dataMessage={dataMessage}
              mySocketID={props.user.socketID}
              key={inx}
            />
          ))}
        </ul>
      </div>
      <div id="chat-input" className="">
        <input
          placeholder="Aa"
          value={text}
          onChange={handleTextChange}
          id="input-text"
          onKeyPress={handleKeyPress}
        />
        <button
          onClick={handleSendClick}
          id="input-btn"
          className="btn btn-primary btn-sm"
        >
          <i className="fas fa-location-arrow"></i>
        </button>
      </div>
    </div>
  );
}

const ChatContainerSTP = (state) => {
  return { privateConnection: state.privateConnection, user: state.user };
};

const ChatContainerReduxed = connect(ChatContainerSTP)(ChatContainer);

export default ChatContainerReduxed;
