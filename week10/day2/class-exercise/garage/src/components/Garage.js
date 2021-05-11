import React, { Component } from "react";
// import MuscleCarSection from "./MuscleCarSection";
// import ExoticCarSection from "./ExoticCarSection";
import MotorcycleSection from "./MotorcycleSection";

export default class Garage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vehicles: [
        {
          motorcycles: [
            {
              american: [{ name: "Indian" }],
            },
            {
              foreign: [{ name: "Kawasaki" }],
            },
          ],
        },
        {
          exotic: [
            {
              american: [{ name: "Dodge" }],
            },
            {
              foreign: [{ name: "BMW" }],
            },
          ],
        },
        {
          muscle: [
            {
              american: [{ name: "Black" }],
            },
            {
              foreign: [{ name: "Noir" }],
            },
          ],
        },
      ],
    };
  }
  render() {
    const { vehicles } = this.state;
    return (
      <div>
        <h1>This is the Garage</h1>
        <p>The garage has {vehicles.length} sections:</p>

        <p>
          {Object.entries(vehicles).map(([names, contents]) => {
            return <p>{Object.keys(contents)}</p>;
          })}
        </p>
        <MotorcycleSection motorcycles={vehicles[0]} />
      </div>
    );
  }
}
