import React, { useEffect, useRef, useState } from "react";
import { Tooltip } from "bootstrap";

import helper from "../../helper";
import ChatContainer from "./chat-container.component.jsx";

function WebRTCStatus(props) {
  // state : idle , new , checking , connected , completed, failed
  const [webRTCState, setWebRTCState] = useState("checking");
  let currentProgress = {};
  switch (webRTCState) {
    case "idle":
      currentProgress = { color: "gray", value: 0, text: "" };
      break;
    case "new":
      currentProgress = { color: "#0d6efd", value: 10, text: "Initialize new" };
      break;
    case "checking":
      currentProgress = { color: "#ffc107", value: 60, text: "Checking" };
      break;
    case "connected":
      currentProgress = { color: "#45ab41", value: 80, text: "Connected" };
      break;
    case "completed":
      currentProgress = { color: "#05ab00", value: 100, text: "Ready to use" };
      break;
    case "failed":
      currentProgress = { color: "#dc3545", value: 100, text: "Failed" };
      break;
    default:
      break;
  }
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
          style={webRTCState == "new" ? { color: currentProgress.color } : null}
        >
          {currentProgress.text}
        </span>
      </div>
    </li>
  );
}

function FileInfo() {
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
  const fileSize = currentFile
    ? helper.changeSizeValue(currentFile.size)
    : null;
  return (
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
  );
}

function InteractingContent() {
  return (
    <div className="row">
      <ChatContainer />
      <div className="col-3 ">
        <ul>
          <WebRTCStatus />
          <FileInfo />
          <div className={"d-flex justify-content-around"}>
            <div className="btn btn-primary">Send</div>
            <div className="btn btn-warning">Stop</div>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default InteractingContent;
