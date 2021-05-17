import React, { Component } from "react";

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  render() {
    return (
      <div
        style={{
          marginRight: "20px",
          marginLeft: "20px",
          backgroundColor: "#F8AFA6",
          height: "90%",
          width: "90%",
        }}
      >
        <h1>Counter.js</h1>
        <p>This is the count {this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Add
        </button>
        <button onClick={() => this.setState({ count: this.state.count - 1 })}>
          Subtract
        </button>
      </div>
    );
  }
}
