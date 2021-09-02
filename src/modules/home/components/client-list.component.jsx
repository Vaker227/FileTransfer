import React from "react";

const users = [
  { name: 1, status: "on", ip: "192.168.1.2" },
  { name: 1, status: "on", ip: "192.168.1.2" },
];

function ClientList() {
  return (
    <div id="clients-list" className="container">
      <div className="row">List</div>
      <div className="row">
        <div className="col-10" id="clients-view">
          <div className="table">
            <div id="clients-view-header">
              <div className="row">
                <div className="col-1">
                  <span>#</span>
                </div>
                <div className="col-5">
                  <span>Name</span>
                </div>
                <div className="col-2">
                  <span>Status</span>
                </div>
                <div className="col-4">
                  <span>IP</span>
                </div>
              </div>
            </div>
            <div id="clients-view-body">
              {users.map((user, index) => {
                return (
                  <div className="row" key={index}>
                    <div className="col-1">{index}</div>
                    <div className="col-5">{user.name}</div>
                    <div className="col-2">{user.status}</div>
                    <div className="col-4">{user.ip}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="col-2" id="clients-action">
          <ul>
            <li>
              <button className="btn btn-success">Connect</button>
            </li>
            <li>
              <button className="btn btn-success">Disconnect</button>
            </li>
            <li>
              <button className="btn btn-success">Exit</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ClientList;
