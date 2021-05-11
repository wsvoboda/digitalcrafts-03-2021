import React, { Component } from "react";

export default class ForeignExoticCars extends Component {
  render() {
    return (
      <div>
        <h1>This is the Foreign Exotic Section</h1>
        <p>
          There is {this.props.foreignexotic.foreign.length} car in this section
        </p>
        <p>The name of the car is {this.props.foreignexotic.foreign[0].name}</p>
      </div>
    );
  }
}
