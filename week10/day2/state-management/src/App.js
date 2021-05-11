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
    };
    // set state using this.setState. This is the built in function to manipulate any state variable
  }

  render() {
    return (
      <div>
        <h1>State Management</h1>
      </div>
    );
  }
}

// state management

// the process of components passing data to eachother is called props

// the process of a component managing its own data nad preserving it in a holding space, temporarily, is called state management
