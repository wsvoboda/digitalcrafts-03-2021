import React, { Component } from 'react'
import Card from "./Card"
import "./cardContainer.css"

export default class CardContainer extends Component {
    state = {
        searchCriteria: "" ,
        pokemonBerries: []
    }

    searchCriteria = (event) => {
        const search = event.target.value.toLowerCase()

        this.setState({searchCriteria: search})
    }
    async componentDidMount() {
        const berryURL = "https://pokeapi.co/api/v2/berry/"
        const fetchData = await fetch(berryURL, {headers: {
        "content-type": "application/json"},})
    const json = await fetchData.json()
    this.setState({pokemonBerries: json.results})
}
    render() {
        const {pokemonData} = this.props
        const filteredData = pokemonData[0].pokemon.filter(pokemon => pokemon.name.includes(this.state.searchCriteria)) ? pokemonData[0].pokemon.filter(pokemon => pokemon.name.includes(this.state.searchCriteria)) :pokemonData[0].pokemon
        return (
            <div className="main-card-container">
                <div>
                <input onChange={(e)=>this.searchCriteria(e)} type="text" placeholder="Search for a Pokemon"/>

                </div>
                <div>
                 <input type="text" placeholder="Enter a Name"/>
                 <input  type="text" placeholder="Enter an HP"/>
                <button>Create</button>
                </div>
                <div className="card-container">

                {filteredData.map((singlePokemon,index) => <Card key={singlePokemon.name}  pokemon={singlePokemon}  />
                )}
                </div>
              
            </div>
        )
    }
}
