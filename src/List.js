import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class List extends Component {

    render() {
        const pokemonArray = this.props.pokemon
        const pokemonElements = pokemonArray.map((obj) => {
        return <li className="pokemonContainer" key={obj.id}>
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
        });
        return(
            pokemonElements
        );
    }
}
