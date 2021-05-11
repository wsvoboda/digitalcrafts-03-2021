import React, { Component } from "react";

export default class Weather extends Component {
  render() {
    return (
      <div>
        <p>I'm the weather</p>
        <p>
          The weather in Houston is {""}{" "}
          {this.props.itIsRainingInHouston ? "rain" : "sun"}
        </p>
        <p>Bunnies are called {this.props.bunny}s</p>
        <p>
          Joe's favorite restaurants are{" "}
          {this.props.restaurants.map((restaurant) => {
            return <p>{restaurant.name}</p>;
          })}
        </p>
        <p>I am using {this.props.monitors} monitors.</p>
      </div>
    );
  }
}
