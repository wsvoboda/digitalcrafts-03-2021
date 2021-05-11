import "./App.css";
import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vehicles: [
        {
          motorcycles: [
            {
              american: [
                { name: "Harley" },
                { name: "Indian" },
                { name: "Victory" },
              ],
            },
            {
              foreign: [
                { name: "Kawasaki" },
                { name: "Honda" },
                { name: "Ducati" },
              ],
            },
          ],
        },
        {
          exotic: [
            {
              american: [
                { name: "Dodge" },
                { name: "Chevrolet" },
                { name: "Ford" },
              ],
            },
            {
              foreign: [{ name: "BMW" }, { name: "Audi" }, { name: "Porsche" }],
            },
          ],
        },
        {
          muscle: [
            {
              american: [{ name: "Black" }, { name: "Blue" }, { name: "Red" }],
            },
            {
              foreign: [{ name: "Noir" }, { name: "Bleue" }, { name: "Rouge" }],
            },
          ],
        },
      ],
    };
  }

  render() {
    return <div></div>;
  }
}
