import React, { useEffect } from "react";
import { Tooltip } from "bootstrap";

import ChatContainer from "./chat-container.component.jsx";

function InteractingContent() {
  useEffect(() => {
    // const tooltips = [1, 2, 3].map((number) => {
    //   return new Tooltip(document.getElementById("file" + number));
    // });
  }, []);
  return (
    <div className="row">
      <ChatContainer />
      <div className="col-1 ">
        <ul>
          <li
            className="mb-2 btn btn-primary"
            data-bs-placement="left"
            data-bs-animation="false"
            title="file info"
            id="file1"
          >
            file
          </li>
          <li
            className="mb-2 btn btn-primary"
            data-bs-placement="left"
            data-bs-animation="false"
            title="file info"
            id="file2"
          >
            file
          </li>
          <li
            className="mb-2 btn btn-primary"
            data-bs-placement="left"
            data-bs-animation="false"
            title="file info"
            id="file3"
          >
            file
          </li>
        </ul>
      </div>
    </div>
  );
}

export default InteractingContent;
