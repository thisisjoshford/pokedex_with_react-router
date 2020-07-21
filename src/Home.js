import React, { Component } from 'react'
import request from 'superagent';
import SearchBar from './SearchBar.js';
import List from './List.js';
import Details from './Details.js';
import { 
    Route, 
    Switch,
    Link,
    BrowserRouter as Router, 
  } from 'react-router-dom';

export default class Home extends Component {
    //initializing empty state variables / containers
    state = {
        searchQuery: this.props.match.params.pokemon,
        pokemon:[],
        searchOption: ''
    }

    //this portion is for your grandma
    async componentDidMount() {
        console.log('>>>>> ATTEMPTED MOUNTING <<<<<<<')
        if (this.props.match.params.pokemon) {
            console.log('>>>>> WE\'RE MOUNTING <<<<<<<')
            const data = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.props.match.params.pokemon}`)

            this.setState({ pokemon: data.body.results })
            // console.log(this.state.pokemon)
        }
    }

    componentWillMount(){
        console.log('>>>>>>unmounting<<<<<<')
    }
   
    //takes in search option and the user input 
    handleSearch = async (e) => {
        e.preventDefault();
        const data = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?${this.state.searchOption}=${this.state.searchQuery}`)
        //update state as the results of this api query
        this.setState({ 
            pokemon: data.body.results, })

     //takes the search query and puts it in the url
     this.props.history.push(`${this.state.searchQuery}`)
     console.log(this.props.history)
     return data
    }
    //grabbing the search option from user and setting it as state
    handleOption = e => {
        this.setState({ searchOption: e.target.value })
    }
    //setting the state of handleChange 
    handleChange = (e) => this.setState({ searchQuery: e.target.value })

    render() {

        console.log(this.state.searchOption)
        return(
            <div>
                <header className="App-header">
                    <SearchBar 
                        searchQuery={this.state.searchQuery}
                        handleSearch={this.handleSearch} 
                        handleChange={this.handleChange}
                        handleOption={this.handleOption}
                    />
                </header>
                    <List pokemon={this.state.pokemon}/>
            </div>
        )
    }
}
