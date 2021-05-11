import React, { Component } from "react";

export default class AmericanMotorcycles extends Component {
  render() {
    return (
      <div className="americanmotos">
        <h1>This is the American Motorcycle Section</h1>
        <p>
          There is {this.props.americanmotos.american.length} motorcyle in this
          section
        </p>
        <p>
          The name of the motorcycle is{" "}
          {this.props.americanmotos.american[0].name}
        </p>
      </div>
    );
  }
}
