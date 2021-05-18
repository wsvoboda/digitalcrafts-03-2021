import React, { Component } from 'react'

export default class Card extends Component {
    state = { flip: true}
    render() {
        const {hp,id,name, sprites} = this.props.pokemon
        return (
            <div>
                <img src={this.state.flip? sprites.front : sprites.back} alt=""/>
               <h2>{name}</h2>
               <p>{hp}</p>
               <p>{id}</p>
               <button onClick={() => this.setState({flip: !this.state.flip})}>Flip</button>
            </div>
        )
    }
}
