import React, { Component } from "react";

export default class AmericanExoticCars extends Component {
  render() {
    return (
      <div>
        <h1>This is the American Exotic Section</h1>
        <p>
          There is {this.props.americanexotic.american.length} car in this
          section
        </p>
        <p>
          The name of the car is {this.props.americanexotic.american[0].name}
        </p>
      </div>
    );
  }
}
