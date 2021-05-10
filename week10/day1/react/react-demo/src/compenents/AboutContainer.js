import React, { Component } from "react";
import "../App.css";
import AboutMe from "./AboutMe";

export default class AboutContainer extends Component {
  render() {
    return (
      <div className="AboutContainer">
        <p>About Container</p>
        <AboutMe />
      </div>
    );
  }
}
