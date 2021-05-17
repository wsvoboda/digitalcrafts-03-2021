import React, { Component } from "react";

export default class Day extends Component {
  constructor(props) {
    super(props);
    this.state = { day: "Monday" };
  }
  render() {
    return (
      <div
        style={{
          marginRight: "20px",
          marginLeft: "20px",
          backgroundColor: "#F79489",
          height: "90%",
          width: "90%",
        }}
      >
        <h1>Day.js</h1>
        <p>Today is {this.state.day}</p>
        <button onClick={() => this.setState({ day: "Friday" })}>
          Change Day
        </button>
        <button onClick={() => this.setState({ day: "Monday" })}>Today</button>
      </div>
    );
  }
}
