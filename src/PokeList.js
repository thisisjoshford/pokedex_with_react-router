import React, { Component } from "react";
import PokeItem from './PokeItem.js';
export default class PokemonList extends Component {

    render()  { 
        const pokemonArray = this.props.pokemonz
        return( <ul>
            <PokeItem pokemon= {pokemonArray}/>
            </ul>
        );
    }
}