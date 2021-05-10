import React, { Component } from "react";
import "../App.css";

export default class Sidebar extends Component {
  render() {
    return (
      <div className="Sidebar">
        <h3>
          <u>Location</u>
        </h3>
        <h5>Dallas, TX</h5>
        <br></br>
        <br></br>
        <h3>
          <u>Skillset</u>
        </h3>
        <h5>React</h5>
        <h5>JavaScript</h5>
        <h5>Python</h5>
        <h5>HTML</h5>
        <h5>CSS</h5>
        <h5>NodeJS</h5>
        <h5>PostgreSQL</h5>
        <br></br>
        <br></br>
        <h3>
          <u>Socials</u>
        </h3>
        <a href="https://github.com/wsvoboda">GitHub</a>
        <br></br>
        <br></br>
        <a href="https://www.linkedin.com/in/whitney-svoboda-03570896/">
          LinkedIn
        </a>
      </div>
    );
  }
}
