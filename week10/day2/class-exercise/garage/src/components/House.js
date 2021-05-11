import React, { Component } from "react";
import Garage from "./Garage";

export default class House extends Component {
  render() {
    return (
      <div className="house">
        <h1>This is the House</h1>
        <p>The house contains the garage</p>
        <Garage />
      </div>
    );
  }
}
