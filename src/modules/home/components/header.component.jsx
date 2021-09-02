import React, { useEffect } from "react";
import { Tooltip } from "bootstrap";

import UserDropDown from "./user-info.component.jsx";

const Header = () => {
  useEffect(() => {
    const tooltip = new Tooltip(document.getElementById("publicIp"));
  },[]);
  return (
    <div className="bg-danger">
      <div
        className="float-start ms-4 btn btn-primary"
        data-bs-placement="right"
        title="Public IP of this device "
        id="publicIp"
      >
        192.168.0.1
      </div>
      <div className="float-end me-4 " id="user">
        <UserDropDown />
      </div>
    </div>
  );
};

export default Header;
