import React, { Component } from 'react';
import './SearchBar.css';

export default class SearchBar extends Component {
    render() {
        return (
            <form onSubmit={this.props.handleSearch}>
                <input 
                value={this.props.searchQuery}
                onChange={this.props.handleChange}/>
                <div id="searchOption">
                    <label>Name: <input id="name-check" type="radio" name="searchOption "value="pokemon" onClick={this.props.handleOption} defaultChecked></input></label>
                    <label>Type: <input id="name-check" type="radio" name="searchOption "value="type_1" onClick={this.props.handleOption}></input></label>
                    <label>Ability: <input id="name-check" type="radio" name="searchOption "value="ability_1" onClick={this.props.handleOption}></input></label>
                    <label>Hidden Ability: <input id="name-check" type="radio" name="searchOption "value="ability_hidden" onClick={this.props.handleOption}></input></label>
                </div>
                <button>Search!</button>
            </form>
        )
    }
}
