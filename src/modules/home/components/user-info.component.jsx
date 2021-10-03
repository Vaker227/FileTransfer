import React from "react";
import { connect } from "react-redux";

function UserDropDown(props) {
  const handleExit = () => {
    if (window.electron) {
      window.electron.quitApp();
    }
  };
  return (
    <div className="dropdown">
      <button
        className="btn dropdown-toggle"
        data-bs-toggle="dropdown"
        id="user-info-toggle"
      >
        {props.user.name}
      </button>
      <ul className="dropdown-menu">
        <li>
          <a
            style={{ cursor: "pointer" }}
            className="dropdown-item"
            onClick={props.openSettingModal}
          >
            Setting
          </a>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li>
          <a
            style={{ cursor: "pointer" }}
            className="dropdown-item"
            onClick={handleExit}
          >
            Exit
          </a>
        </li>
      </ul>
    </div>
  );
}

const UserInfoSTP = (state) => {
  return { user: state.user };
};
const UserInfoDTP = (dispatch) => {
  return {
    test: function () {
      return dispatch({ type: "test" });
    },
  };
};
const ReduxedUserDropDown = connect(UserInfoSTP, UserInfoDTP)(UserDropDown);

export default ReduxedUserDropDown;
