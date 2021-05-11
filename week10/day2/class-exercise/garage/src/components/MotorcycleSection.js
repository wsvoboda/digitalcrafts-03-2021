import React, { Component } from "react";
import AmericanMotorcycles from "./AmericanMotorcycles";
import ForeignMotorcycles from "./ForeignMotorcycles";

export default class MotorcycleSection extends Component {
  render() {
    return (
      <div className="motorcycles">
        <h1>This is the Motorcycle Section</h1>
        <p>
          There are {this.props.motorcycles.motorcycles.length} types of
          motorcycles in this section:
        </p>
        <p>
          {Object.entries(this.props.motorcycles.motorcycles).map(
            ([names, contents]) => {
              return <p>{Object.keys(contents)}</p>;
            }
          )}
        </p>
        <AmericanMotorcycles
          americanmotos={this.props.motorcycles.motorcycles[0]}
        />
        <ForeignMotorcycles
          foreignmotos={this.props.motorcycles.motorcycles[1]}
        />
      </div>
    );
  }
}
