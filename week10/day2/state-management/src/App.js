import "./App.css";
import React, { Component } from "react";

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
    };
    // set state using this.setState. This is the built in function to manipulate any state variable
  }

  render() {
    const { counter, title, itIsRainingInHouston } = this.state;
    return (
      <div>
        <h1>State Management</h1>
        <p>{title}</p>
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
        <p>Counter {counter}</p>
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
