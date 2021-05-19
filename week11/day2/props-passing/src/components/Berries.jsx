import React, { Component } from 'react'
import pic from "../images/pngegg.png"
import "./cardContainer.css"

export default class Berries extends Component {
    render() {
        const {name} = this.props.berry
        const bigname = name.toUpperCase()
        return (
            <div className="berry-card">
                <img id="berrypic" src={pic} alt="berry"/>
                <h3>{bigname}</h3>
            </div>
        )
    }
}
