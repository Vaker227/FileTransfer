import React, { useEffect, useMemo, useReducer, useRef, useState } from "react";
import { connect } from "react-redux";
import { Tooltip } from "bootstrap";

import helper from "../../helper";
import socketIO from "../services/socketio";

function FileDownloadInfo() {
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
  const size = 1231654987;
  const sizeObj = useMemo(() => {
    return helper.changeSizeValue(size);
  }, [size]);
  return (
    <div className="file-download-info row">
      <div className="col-1">
        <i
          className="fas fa-download"
          data-bs-toggle="tooltip"
          data-bs-placement="left"
          title="Download"
          ref={fileProgress}
        ></i>
      </div>
      <div className="col-1">
        <i
          className="far fa-file "
          data-bs-toggle="tooltip"
          data-bs-placement="right"
          title="Tooltip on bottom"
          style={{ fontSize: 20 }}
          ref={fileName}
        ></i>
      </div>
      {/* receiver downloading */}
      <div className="col">
        <div className="progress">
          <div
            className="progress-bar "
            role="progressbar"
            style={{ width: "75%", height: "100%" }}
          >
            25%
          </div>
        </div>
      </div>
      <div className="col-1">
        <div class="spinner-grow text-primary"></div>
      </div>
      {/* receiver Accept of reject */}
      {/* <div className="col">
        {sizeObj.value} {sizeObj.type}
      </div>
      <div className="col-2 btn btn-sm btn-success">
        <i className="far fa-check-circle"></i>
      </div>
      <div className="col-2 btn btn-sm btn-danger">
        <i className="far fa-times-circle"></i>
      </div> */}
    </div>
  );
}

function FileManage(props) {
  const [fileManagerNoti, setFileManagerNoti] = useState(true);
  return (
    <div id="file-manager" className="dropdown">
      <button
        className="btn btn-sm btn-secondary dropdown-toggle"
        data-bs-toggle="dropdown"
        data-bs-auto-close="false"
        onClick={() => {
          setFileManagerNoti(!fileManagerNoti);
        }}
      >
        File Manager
        {fileManagerNoti ? (
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
        <FileDownloadInfo />
        <FileDownloadInfo />
      </ul>
    </div>
  );
}

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
  useEffect(() => {
    window.test = (textTemp) => {
      socketIO.sendMessage(textTemp);
    };
  }, []);
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
      <FileManage />
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
