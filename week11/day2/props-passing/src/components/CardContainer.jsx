import React, { Component } from "react";
import Card from "./Card";
import Berries from "./Berries"
import "./cardContainer.css";

class CardContainer extends Component {
  state = {
    pokemonSearchCriteria: "",
    berrySearchCriteria: "",
    pokemonList: [],
    pokemonBerries: [],
    name: "",
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
      pokemonBerries:json.results,
    });
  }

  pokemonSearchCriteria = (e) => {
    const pokemonSearch = e.target.value.toLowerCase();
    this.setState({
      pokemonSearchCriteria: pokemonSearch,
    });
  };

  berrySearchCriteria = (e) => {
    const berrySearch = e.target.value.toLowerCase();
    this.setState({
      berrySearchCriteria: berrySearch,
    })
  }

  sendPokemonToData = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    e.preventDefault();
  };

  sendBerryToData = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    e.preventDefault();
  };

  onPokemonSubmit = (e, filteredPokemonData) => {
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

  onBerrySubmit = (e, filteredBerryData) => {
      e.preventDefault();
      const newBerry = {
        name: this.state.name,
      };
      const newBerryList = [newBerry,...this.state.pokemonBerries]
      this.setState({
        pokemonBerries: newBerryList,
      });
    };
    
    
  render() {
    const {pokemonList} = this.state
    const {pokemonBerries} = this.state
    const filteredPokemonData = (pokemonList.filter((pokemon) =>
      pokemon.name.includes(this.state.pokemonSearchCriteria)
    )
      ? pokemonList.filter((pokemon) =>
          pokemon.name.includes(this.state.pokemonSearchCriteria)
        )
      : pokemonList)
      
    const filteredBerryData = (pokemonBerries.filter((berry) =>
      berry.name.includes(this.state.berrySearchCriteria)
    )
      ? pokemonBerries.filter((berry) =>
          berry.name.includes(this.state.berrySearchCriteria)
        )
      : pokemonBerries)

    return (
      <div className="main-card-container">
        
        <div className="headername">
          <h1>Pokemon</h1>
        </div>
        <div className="searchbar">
          <input
            name="name"
            className="search-field"
            onChange={this.pokemonSearchCriteria}
            type="text"
            placeholder="Search for a Pokemon"
          />
        </div>
        <div class="formdiv">
          <form onSubmit={this.onPokemonSubmit}>
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
        </div>

        <div className="card-container">
          {filteredPokemonData.map((singlePokemon, index) => (
            <Card key={singlePokemon.name} pokemon={singlePokemon} />
            ))}
        </div>

            <div className="headername">
            <h1>Berries</h1>
            </div>
            
            <div className="searchbar">
            <input
            name="name"
            className="search-field"
            onChange={this.berrySearchCriteria}
            type="text"
            placeholder="Search for a Berry"
            />
            </div>
            <div class="formdiv">
          <form onSubmit={this.onBerrySubmit}>
            <input
              name="name"
              className="create-field"
              type="text"
              placeholder="Enter a Berry Name"
              value={this.state.name}
              onChange={this.sendBerryToData}
            />
            <input className="create-field" type="submit" value="Submit" />
          </form>
        </div>
        <div className="card-container">
          {filteredBerryData.map((singleBerry, index) => (
          <Berries key={singleBerry.name} berry={singleBerry}/>
          ))}
          </div>
        </div>
    );
  }
}

export default CardContainer;