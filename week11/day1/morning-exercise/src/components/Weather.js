import React, { Component } from "react";

export default class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = { weather: "sunny" };
  }
  render() {
    return (
      <div>
        <h1>Weather.js</h1>
        <p>The weather is {this.state.weather}</p>
        <button onClick={() => this.setState({ weather: "rainy" })}>
          Change Weather
        </button>
      </div>
    );
  }
}
