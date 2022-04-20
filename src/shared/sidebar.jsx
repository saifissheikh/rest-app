import React, { Component } from "react";
import "./sidebar.css";

class Sidebar extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <span className="text-heading">Pomo & co</span>
          <button className="btn btn-primary btn-active btn-sidebar">
            Home
          </button>
          <button className="btn btn-primary btn-sidebar">Order</button>
          <button className="btn btn-primary btn-sidebar">Notification</button>
          <button className="btn btn-primary btn-sidebar">
            Help & Support
          </button>
          <button className="btn btn-primary btn-sidebar">Settings</button>
        </div>
      </React.Fragment>
    );
  }
}

export default Sidebar;
