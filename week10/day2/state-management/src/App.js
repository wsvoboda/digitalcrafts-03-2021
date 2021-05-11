import "./App.css";
import React, { Component } from "react";
import Weather from "./Weather";

export default class App extends Component {
  // create constructor (props)
  // invoke super inside of the constructor, pass it props as an argument
  // define this.state{}

  constructor(props) {
    super(props);
    // initializing state
    this.state = {
      counter: 0,
      title: "State Management",
      itIsRainingInHouston: false,
      bunny: "bun",
      restaurants: [{ name: "uchi" }, { name: "Taste of Texas" }],
      monitors: 1,
    };
    // set state using this.setState. This is the built in function to manipulate any state variable
  }

  render() {
    const {
      counter,
      title,
      itIsRainingInHouston,
      bunny,
      restaurants,
      monitors,
    } = this.state;
    return (
      <div>
        <h1>State Management</h1>
        <p>{title}</p>
        <Weather
          itIsRainingInHouston={itIsRainingInHouston}
          bunny={bunny}
          restaurants={restaurants}
          monitors={monitors}
        />
        <p>
          Is it raining in Houston?{" "}
          {itIsRainingInHouston ? (
            <div>
              <p>Yes, it's raining</p>
            </div>
          ) : (
            <div>
              <p>Nope, not raining</p>
            </div>
          )}
        </p>
        <button
          onClick={() =>
            this.setState({ itIsRainingInHouston: !itIsRainingInHouston })
          }
        >
          {itIsRainingInHouston ? "Sunny Day" : "It's Raining"}
        </button>
        <br></br>
        <input type="text" onChange={(e) => console.log(e.target.value)} />
        <p>Counter {counter}</p>

        <button onClick={() => this.setState({ counter: counter + 1 })}>
          Add
        </button>
        <button onClick={() => this.setState({ counter: counter - 1 })}>
          Subtract
        </button>
      </div>
      // <div>
      //   <h1>State Management</h1>
      //   <p>{this.state.title}</p>
      //   <p>
      //     Is it raining in Houston?{" "}
      //     {this.state.itIsRainingInHouston ? (
      //       <div>
      //         <p>Yes, it's raining</p>
      //       </div>
      //     ) : (
      //       <div>
      //         <p>Nope, not raining</p>
      //       </div>
      //     )}
      //   </p>
      //   <p>Counter {this.state.counter}</p>
      // </div>
    );
  }
}

// state management

// the process of components passing data to eachother is called props

// the process of a component managing its own data nad preserving it in a holding space, temporarily, is called state management
