import React, { Component } from "react";

export default class ForeignMotorcycles extends Component {
  render() {
    return (
      <div>
        <h1>This is the Foreign Motorcycle Section</h1>
        <p>
          There is {this.props.foreignmotos.foreign.length} motorcyle in this
          section
        </p>
        <p>
          The name of the motorcycle is{" "}
          {this.props.foreignmotos.foreign[0].name}
        </p>
      </div>
    );
  }
}
