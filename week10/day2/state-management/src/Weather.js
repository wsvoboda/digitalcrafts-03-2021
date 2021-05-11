import React, { Component } from "react";

export default class Weather extends Component {
  render() {
    return (
      <div>
        <p>I'm the weather</p>
        <p>
          The weather in Houston is {""}{" "}
          {this.props.itIsRainingInHouston ? "rain" : "sun"}
        </p>
      </div>
    );
  }
}
