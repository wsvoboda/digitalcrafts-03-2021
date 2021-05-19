import React, { Component } from "react";
import "../App.css";

export default class Form extends Component {
  state = {
    firstName: "",
    lastName: "",
    address: "",
    apt: "",
    zip: "",
    city: "",
    state: "",
    country: "",
    phone: "",
  };

  handleInputFormValues = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div>
        <h1 className="shipping-form-header">Forms React</h1>
        <div className="shipping-form-container">
          <form className="shipping-form">
            <input
              className="shipping-input-first-name"
              type="text"
              placeholder="First Name"
              name="firstName"
              onChange={this.handleInputFormValues}
            />
            <input
              className="shipping-input-last-name"
              type="text"
              placeholder="Last Name"
              name="lastName"
              onChange={this.handleInputFormValues}
            />
            <input
              className="shipping-input-address"
              type="text"
              placeholder="Street Address"
              name="address"
              onChange={this.handleInputFormValues}
            />
            <input
              className="shipping-input-apt"
              type="text"
              placeholder="Apt, Ste"
              name="apt"
              onChange={this.handleInputFormValues}
            />
            <input
              className="shipping-input-zip"
              type="text"
              placeholder="Postal Code"
              name="zip"
              onChange={this.handleInputFormValues}
            />
            <input
              className="shipping-input-city"
              type="text"
              placeholder="City"
              name="city"
              onChange={this.handleInputFormValues}
            />
            <input
              className="shipping-input-state"
              type="text"
              placeholder="State"
              name="state"
              onChange={this.handleInputFormValues}
            />
            <input
              className="shipping-input-country"
              type="text"
              placeholder="Country"
              name="country"
              onChange={this.handleInputFormValues}
            />
            <input
              className="shipping-input-phone"
              type="text"
              placeholder="Phone"
              name="phone"
              onChange={this.handleInputFormValues}
            />
            <input
              className="shipping-input-submit"
              type="submit"
              placeholder="Submit"
            />
          </form>
        </div>
      </div>
    );
  }
}
