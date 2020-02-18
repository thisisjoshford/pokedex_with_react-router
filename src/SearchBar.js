import React, { Component } from 'react'

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
                </div>
                <button>Search!</button>
            </form>
        )
    }
}
