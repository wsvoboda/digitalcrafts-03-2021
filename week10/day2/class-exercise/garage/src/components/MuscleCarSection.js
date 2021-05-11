import React, { Component } from "react";
import AmericanCars from "./AmericanCars";

export default class MuscleCarSection extends Component {
  render() {
    return (
      <div>
        <h1>This is the Muscle Car Section</h1>
        <p>
          There are {this.props.musclecars.muscle.length} types of cars in this
          section:
        </p>
        <p>
          {Object.entries(this.props.musclecars.muscle).map(
            ([names, contents]) => {
              return <p>{Object.keys(contents)}</p>;
            }
          )}
        </p>
        <AmericanCars americanmuscle={this.props.musclecars.muscle[0]} />
      </div>
    );
  }
}
