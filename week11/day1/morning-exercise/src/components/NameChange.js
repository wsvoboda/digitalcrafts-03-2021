import React, { Component } from "react";

export default class Name extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "" };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ name: event.target.value });
  }
  render() {
    return (
      <div
        style={{
          marginRight: "20px",
          marginLeft: "20px",
          backgroundColor: "#F9F1F0",
          height: "90%",
          width: "90%",
        }}
      >
        <h1>Name.js</h1>
        <p>Your name is {this.state.name}</p>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}
