import React, { Component } from 'react';
import { getPokemonById } from './utils.js';
import './Details.css';

export default class Details extends Component {

    state = { chosenPoke: [] }
    async componentDidMount() {
        console.log(this.props.match.params.pokeId)
        const poke = await getPokemonById(this.props.match.params.pokeId);
        console.log(poke)
        this.setState({chosenPoke: poke.body });
    }
    
    render() {
        const pokeObj = this.state.chosenPoke
        return (
            <div id="pokemonContainer">
                 <h3>{pokeObj.pokemon}</h3>
                <div id="pokeListImage">
                    <img className="pokeImageDetail" src={pokeObj.url_image} alt={pokeObj.pokemon}/>
                </div>
                <div className="labelBox">
                   <ul id="pokeDetails">
                        <li>Ability: {pokeObj.ability_1}</li>
                        <li>Type: {pokeObj.type_1}</li>
                        <li>Attack: {pokeObj.attack}</li>
                        <li>Defense: {pokeObj.defense}</li>
                        <li>HP: {pokeObj.hp}</li>
                        <li>Speed: {pokeObj.speed}</li>
                        <li>Ability: {pokeObj.ability_1}</li>
                        <li>Hidden Ability: {pokeObj.ability_hidden}</li>
                        <a href={pokeObj.pokedex}>More info on the official Site!</a>
                   </ul>
                    
                </div>
            </div>
        )
    }
}
