import React, { Component } from "react";
import AmericanExoticCars from "./AmericanExoticCars";
import ForeignExoticCars from "./ForeignExoticCars";

export default class ExoticCarSection extends Component {
  render() {
    return (
      <div className="exotic">
        <h1>This is the Exotic Car Section</h1>
        <p>
          There are {this.props.exoticcars.exotic.length} types of cars in this
          section:
        </p>
        <p>
          {Object.entries(this.props.exoticcars.exotic).map(
            ([names, contents]) => {
              return <p>{Object.keys(contents)}</p>;
            }
          )}
        </p>
        <AmericanExoticCars americanexotic={this.props.exoticcars.exotic[0]} />
        <ForeignExoticCars foreignexotic={this.props.exoticcars.exotic[1]} />
      </div>
    );
  }
}
