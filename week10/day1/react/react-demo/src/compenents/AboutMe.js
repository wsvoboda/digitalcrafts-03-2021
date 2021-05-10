import React, { Component } from "react";
import "../App.css";
import pic from "../images/me.JPG";

export default class AboutMe extends Component {
  render() {
    return (
      <div className="AboutMe">
        <img src={pic} alt="whitney"></img>
        <p>
          My name is Whitney and I am a software developer located in Dallas,
          TX. I am a full-stack software developer and looking for my next
          opportunity!
        </p>
      </div>
    );
  }
}
