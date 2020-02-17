import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class List extends Component {

    
    render() {
       
        return (
            <div>
                {console.log(this.props.pokemon.results)}
                <p>this is a LIST of all the pokemonz!!!</p> 
            </div>
        )
    }
}
