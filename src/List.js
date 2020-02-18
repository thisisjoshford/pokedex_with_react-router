import React, { Component } from 'react'
import Details from './Details.js';
import { 
    Route, 
    Switch,
    Link,
    BrowserRouter as Router, 
  } from 'react-router-dom';
import './List.css'

export default class List extends Component {

    render() {
        console.log(this.props.pokemon)
        const pokemonArray = this.props.pokemon    
        const pokemonElements = pokemonArray.map((obj) => {
          
        return <Link to ={`pokemon_details/${obj._id}`}>
            <li className="pokemonContainer" key={obj.id}>
            {console.log(obj.url_image)}
            <div id="pokeImage">
                <img className="pokeImages" src={obj.url_image} alt={obj.pokemon}/>
            </div>
            <div className="labelBox">
                <h3>{obj.pokemon.toUpperCase()}</h3>
                <p>Ability: {obj.ability_1}</p>
                <p>Type: {obj.type_1}</p>
                <a href={obj.pokedex}>Info</a>
            </div>
        </li>
        </Link> 
        
        });
        return(
            pokemonElements
        );
    } 
}
