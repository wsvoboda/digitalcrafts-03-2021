import React, { Component } from "react";
import logo from "../images/logo.png";

export default class Logo extends Component {
  render() {
    return (
      <div className="logo">
        <img src={logo} alt="googlelogo" />
      </div>
    );
  }
}
