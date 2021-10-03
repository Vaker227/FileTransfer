import React, { useEffect, useMemo, useRef, useState } from "react";
import { connect } from "react-redux";
import { Tooltip } from "bootstrap";

import socketIO from "../services/socketio";
import helper from "../../helper";
import webRTC from "../services/webrtc.service";
import ChatContainer from "./chat-container.component.jsx";

function WebRTCStatus(props) {
  // state : idle , new , checking , connected , completed, failed
  const currentProgress = useMemo(() => {
    switch (props.webRTC.status) {
      case "new":
        return { color: "#0d6efd", value: 10, text: "Initialize new" };

      case "checking":
        return { color: "#ffc107", value: 60, text: "Checking" };

      case "connected":
        return { color: "#45ab41", value: 80, text: "Connected" };

      case "completed":
        return { color: "#05ab00", value: 100, text: "Ready to use" };

      case "failed":
        return { color: "#dc3545", value: 100, text: "Failed" };

      default:
        return { color: "gray", value: 0, text: "" };
    }
  }, [props.webRTC.status]);

  return (
    <li id="webrtc-progress">
      <div
        className="progress"
        style={{ height: "100%", border: `solid 2px ${currentProgress.color}` }}
      >
        <div
          className="progress-bar progress-bar-striped progress-bar-animated "
          role="progressbar"
          style={{
            width: `${currentProgress.value}%`,
            backgroundColor: currentProgress.color,
          }}
        ></div>
        <span
          id="webrtc-status"
          style={
            currentProgress.text == "new"
              ? { color: currentProgress.color }
              : null
          }
        >
          {currentProgress.text}
        </span>
      </div>
    </li>
  );
}

const WebRTCStatusSTP = (state) => {
  return {
    webRTC: state.webRTC,
  };
};

const WebRTCStatusReduxed = connect(WebRTCStatusSTP)(WebRTCStatus);

function FileInfo(props) {
  const [isDragging, setIsDragging] = useState(false);
  const [currentFile, setCurrentFile] = useState();
  const inputFile = useRef(null);
  const fileName = useRef(null);
  useEffect(() => {
    let fileTooltip;
    if (currentFile) {
      fileTooltip = new Tooltip(fileName.current);
      return () => {
        fileTooltip = fileTooltip.dispose();
      };
    }
  }, [currentFile, fileName]);
  const handleDrop = (e) => {
    setCurrentFile(e.dataTransfer.files[0]);
    setIsDragging(false);
  };
  const handleDragOver = (e) => {
    e.preventDefault();
  };
  const handleDragEnter = () => {
    setIsDragging(true);
  };
  const handleDragLeave = () => {
    setIsDragging(false);
  };
  const handleOnClick = () => {
    if (currentFile) {
      setCurrentFile(null);
      return;
    }
    inputFile.current.click();
    inputFile.current.onchange = (e) => {
      setCurrentFile(e.target.files[0]);
    };
  };
  const handleSendFile = () => {
    if (!props.privateConnection.roomID) {
      props.notiInfo("Haven't connected private room yet!");
      setCurrentFile(null);
      return;
    }
    if(props.webRTC.status !== 'completed'){
      props.notiInfo("Can't make a direct connection!, check your NAT type and Server type");
      setCurrentFile(null);
      return;
    }
    if (!currentFile) {
      props.notiInfo("Please select file!");
      return;
    }
    const fileInfo = {
      name: currentFile.name,
      size: currentFile.size,
      modified: currentFile.lastModified,
      id: "" + currentFile.lastModified + Date.now(),
      origin: props.user.socketID,
      state: "waiting",
    };
    if (!window.arrayFile) {
      window.arrayFile = [];
    }
    window.arrayFile.push({ id: fileInfo.id, data: currentFile });
    props.addFileToList(fileInfo);
    socketIO.exchangeFile(fileInfo, props.privateConnection.roomID);
    setCurrentFile(null);
  };
  const fileSize = currentFile
    ? helper.changeSizeValue(currentFile.size)
    : null;
  return (
    <>
      <div
        id="handle-file"
        className={`my-1 p-1 pt-2 ${isDragging ? "dragging" : ""}`}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onClick={handleOnClick}
      >
        <input
          type="file"
          id="inputFile"
          ref={inputFile}
          style={{ display: "none" }}
        />
        {currentFile ? (
          <div id="file-info">
            <div
              id="file-name"
              ref={fileName}
              data-bs-placement="right"
              title={currentFile.name}
              className="text-truncate"
              style={isDragging ? null : { pointerEvents: "all" }}
            >
              File: {currentFile.name}
            </div>
            <div>
              <i className="fas fa-boxes"></i> {fileSize.value}{" "}
              <b>{fileSize.type}</b>
            </div>
            <div>
              <i className="fas fa-wrench"></i>{" "}
              {helper.getTimeFrom(currentFile.lastModifiedDate)}
            </div>
          </div>
        ) : (
          <div>
            <i
              className={`fas ${isDragging ? "fa-box-open" : "fa-file-import"}`}
            ></i>
          </div>
        )}
      </div>
      <div className={"d-flex"}>
        <div className="btn btn-primary flex-grow-1" onClick={handleSendFile}>
          Send
        </div>
      </div>
    </>
  );
}

const FileInfoSTP = (state) => {
  return {
    user: state.user,
    status: state.status,
    privateConnection: state.privateConnection,
    webRTC: state.webRTC,
  };
};
const FileInfoDTP = (dispatch) => {
  return {
    addFileToList: function (data) {
      return dispatch({ type: "ADD_FILE_LIST", data });
    },
    notiInfo: function (text) {
      return dispatch({
        type: "UPDATE_HISTORY_LOG",
        data: {
          text,
          time: helper.getTime(),
          user: "System",
        },
      });
    },
  };
};

const FileInfoReduxed = connect(FileInfoSTP, FileInfoDTP)(FileInfo);

function InteractingContent() {
  return (
    <div className="row mt-4">
      <ChatContainer />
      <div className="col-3">
        <ul style={{ marginBottom: 0 }}>
          <WebRTCStatusReduxed />
          <FileInfoReduxed />
        </ul>
      </div>
    </div>
  );
}

export default InteractingContent;
