import React from "react";
import { Dropdown } from "bootstrap";

function UserDropDown() {
  return (
    <div className="dropdown">
      <button
        className="btn dropdown-toggle"
        data-bs-toggle="dropdown"
        id="user-info-toggle"
      >
        Link Do
      </button>
      <ul className="dropdown-menu">
        <li>
          <a style={{ cursor: "pointer" }} className="dropdown-item">
            Setting
          </a>
        </li>
        <li>
          <a style={{ cursor: "pointer" }} className="dropdown-item">
            Logout
          </a>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li>
          <a style={{ cursor: "pointer" }} className="dropdown-item">
            Exit
          </a>
        </li>
      </ul>
    </div>
  );
}

export default UserDropDown;
