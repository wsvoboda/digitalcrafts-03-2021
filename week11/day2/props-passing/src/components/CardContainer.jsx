import React, { Component } from "react";
import Card from "./Card";
import Berries from "./Berries"
import "./cardContainer.css";

class CardContainer extends Component {
  state = {
    searchCriteria: "",
    pokemonList: [],
    pokemonBerries: [],
    pokemonName: "",
    hp: "",
    frontUrl: "",
    backUrl: "",
  };

 async componentDidMount() {
  const berryUrl = "https://pokeapi.co/api/v2/berry/"
  const fetchData = await fetch(berryUrl,{ headers: {
 'Content-Type': 'application/json'
},})
const json = await fetchData.json()
    this.setState({
      pokemonList: this.props.pokemonData[0].pokemon,
      pokemonBerries:json.results
    });
  }

 

  searchCriteria = (e) => {
    const search = e.target.value.toLowerCase();
    this.setState({
      searchCriteria: search,
    });
  };

  sendPokemonToData = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    e.preventDefault();
  };

  onSubmit = (e, filteredData) => {
    e.preventDefault();
    const newPokemon = {
      name: this.state.pokemonName,

      hp: this.state.hp,
      sprites: {
        front: this.state.frontUrl,
        back: this.state.backUrl,
      },
    };
    
    const newPokemonList = [newPokemon,...this.state.pokemonList]
    this.setState({
      pokemonList: newPokemonList,
    });
  };

  render() {
    const {pokemonList} = this.state
    const {pokemonBerries} = this.state
    const filteredData = pokemonList.filter((pokemon) =>
      pokemon.name.includes(this.state.searchCriteria)
    )
      ? pokemonList.filter((pokemon) =>
          pokemon.name.includes(this.state.searchCriteria)
        )
      : pokemonList
    return (
      <div className="main-card-container">
        <div>
          <input
            name="name"
            className="search-field"
            onChange={this.searchCriteria}
            type="text"
            placeholder="Search for a pokemon"
          />
        </div>
        <div>
          
          <form onSubmit={this.onSubmit}>
            <input
              name="pokemonName"
              className="create-field"
              type="text"
              placeholder="Enter a Name"
              value={this.state.pokemonName}
              onChange={this.sendPokemonToData}
            />
            <input
              name="hp"
              className="create-field"
              type="text"
              placeholder="Enter a HP"
              value={this.state.hp}
              onChange={this.sendPokemonToData}
            />
            <input
              name="frontUrl"
              className="create-field"
              type="text"
              placeholder="Enter front URL"
              value={this.state.frontUrl}
              onChange={this.sendPokemonToData}
            />
            <input
              name="backUrl"
              className="create-field"
              type="text"
              placeholder="Enter back URL"
              value={this.state.backUrl}
              onChange={this.sendPokemonToData}
            />
            <input className="create-field" type="submit" value="Submit" />
          </form>
        </div><div className="headername">
          <h1>Pokemon</h1></div>
        <div className="card-container">
          
          {filteredData.map((singlePokemon, index) => (
            <Card key={singlePokemon.name} pokemon={singlePokemon} />
            ))}</div><div className="headername">
            <h1>Berries</h1></div>
            <div className="card-container">
              
          {pokemonBerries.map((singleBerry, index) => (
          <Berries key={singleBerry.name} berry={singleBerry}/>
          ))}
        </div>
        </div>
    );
  }
}

export default CardContainer;