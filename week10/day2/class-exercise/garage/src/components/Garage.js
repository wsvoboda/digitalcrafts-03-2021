import React, { Component } from "react";
import ExoticCarSection from "./ExoticCarSection";
import MuscleCarSection from "./MuscleCarSection";
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
              american: [{ name: "Camaro" }],
            },
          ],
        },
      ],
    };
  }
  render() {
    const { vehicles } = this.state;
    return (
      <div className="garage">
        <h1>This is the Garage</h1>
        <p>The garage has {vehicles.length} sections:</p>

        <p>
          {Object.entries(vehicles).map(([names, contents]) => {
            return <p>{Object.keys(contents)}</p>;
          })}
        </p>
        <MotorcycleSection motorcycles={vehicles[0]} />
        <ExoticCarSection exoticcars={vehicles[1]} />
        <MuscleCarSection musclecars={vehicles[2]} />
      </div>
    );
  }
}
