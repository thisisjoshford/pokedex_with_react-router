import React, { Component } from 'react';
import './SearchBar.css';

export default class SearchBar extends Component {
    render() {
        return (
            <form onSubmit={this.props.handleSearch}>
                <input 
                id="searchBox"
                value={this.props.searchQuery} 
                onChange={this.props.handleChange}
                placeholder="          search here..."
                />
                    <div class="searchOption">
                        <label>
                            <input 
                                id="name-check" 
                                classType="inputSelection"
                                type="radio" 
                                name="searchOption" 
                                value="pokemon"
                                onClick={this.props.handleOption} 
                                defaultChecked
                            />
                            <img src="poke_name.png"/>
                        </label>

                        <label>
                            <input 
                                id="type-check" 
                                classType="inputSelection"
                                type="radio" 
                                name="searchOption"
                                value="type_1" 
                                onClick={this.props.handleOption}>
                            </input>
                            <img src="poke_type.png"/>

                        </label>

                        <label>
                            <input 
                                id="ability-check" 
                                classType="inputSelection"
                                type="radio" 
                                name="searchOption"
                                value="ability_1" 
                                onClick={this.props.handleOption}>
                            </input>
                            <img src="poke_ability.png"/>
                        </label>

                        <label>
                            
                            <input 
                                id="hidden-check" 
                                classType="inputSelection"
                                type="radio" 
                                name="searchOption"
                                value="ability_hidden" 
                                onClick={this.props.handleOption}>
                            </input>
                            <img src="hidden_ability.png"/>
                        </label>
    
                </div>
                <img id="pokeBall" src="pokeBall.jpg"/>
                <button>Search!</button>
                <img id="pokeBall" src="pokeBall.jpg"/>
            </form>
        )
    }
}
