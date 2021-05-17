import React, { Component } from "react";
import pic from "../images/thumb.png";
import burger from "../images/menu.PNG";
import "../App.css";

export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="left-links">
          <a
            href={`https://about.google/?fg=1&utm_source=google-US&utm_medium=referral&utm_campaign=hp-header`}
          >
            About
          </a>
          <a
            href={`https://store.google.com/US/?utm_source=hp_header&utm_medium=google_ooo&utm_campaign=GS100042&hl=en-US`}
          >
            Store
          </a>
        </div>
        <div className="right-links">
          <a href={`https://mail.google.com/`}>Gmail</a>
          <a href={`https://www.google.com/imghp?hl=en&ogbl`}>Images</a>
          <img src={burger} alt="menu" />
          <img src={pic} alt="thumbnail" />
        </div>
      </div>
    );
  }
}
