import React, { Component } from "react";

export default class AmericanCars extends Component {
  render() {
    return (
      <div className="americanmuscle">
        <h1>This is the American Muscle Section</h1>
        <p>
          There is {this.props.americanmuscle.american.length} car in this
          section
        </p>
        <p>
          The name of the car is {this.props.americanmuscle.american[0].name}
        </p>
      </div>
    );
  }
}
