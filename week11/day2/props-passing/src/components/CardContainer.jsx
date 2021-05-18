import React, { Component } from 'react'
import Card from "./Card"

export default class CardContainer extends Component {
    state = {
        searchCriteria: "" 
    }

    searchCriteria = (event) => {
        this.setState({searchCriteria: event.target.value})
    }
    render() {
        const {pokemonData} = this.props
        const filteredData = pokemonData[0].pokemon.filter(pokemon => pokemon.name.includes(this.state.searchCriteria))
        return (
            <div>
                <h1>Card Container</h1>
                <input onChange={(e)=>this.searchCriteria(e)} type="text" placeholder="Search for a Pokemon"/>
                <div className="card-container">
                {filteredData.map((singlePokemon,index) => <Card key={singlePokemon.name} pokemon={singlePokemon}/>)} </div>
            </div>
        )
    }
}
