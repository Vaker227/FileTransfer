import React, { useEffect, useState } from "react";

const defaultMessages = ["text1", "text223123", "12313sd"];

function ChatContainer(props) {
  const [messages, setMessages] = useState(defaultMessages);
  const [text, setText] = useState("");
  const handleKeyPress = (e) => {
    if (e.key == "Enter") {
      handleClick(e);
    }
  };
  useEffect(() => {
    const chatContent = document.getElementById("chat-content");
    chatContent.scrollTop = chatContent.scrollHeight;
  }, [messages]);

  const handleClick = () => {
    if (text == "") {
      return;
    }
    setMessages([...messages, text]);
    setText("");
  };
  const handleChange = (e) => {
    setText(e.target.value);
  };
  return (
    <div id="chat-container" className="col-11 bg-white">
      <div id="chat-content" className="">
        <ul>
          {messages.map((message, inx) => (
            <li key={inx}>{message}</li>
          ))}
        </ul>
      </div>
      <div id="chat-input" className="">
        <input
          placeholder="Aa"
          value={text}
          onChange={handleChange}
          id="input-text"
          onKeyPress={handleKeyPress}
        />
        <button
          onClick={handleClick}
          id="input-btn"
          className="btn btn-primary btn-sm"
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default ChatContainer;
