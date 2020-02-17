import React, { Component } from 'react'

export default class SearchBar extends Component {
    render() {
        return (
            <form onSubmit={this.props.handleSearch}>
                <input 
                value={this.props.searchQuery}
                onChange={this.props.handleChange}/>
                <button>Search!</button>
            </form>
        )
    }
}
