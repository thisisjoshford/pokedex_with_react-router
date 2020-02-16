import React, { Component } from 'react';
import { 
  Route, 
  Switch,
  Link,
  BrowserRouter as Router, 
} from 'react-router-dom';
//importing our components
import Home from './Home.js';
import List from './List.js';
import Details from './Details.js';
import Header from './Header.js';
import About from './About.js';

export default class App extends Component {
  render() {
    return (   
      <Router>
        <div>
           {/* this creates a static header */}
          <header>
            <Header></Header>
            <Link to ="/">Home</Link>&nbsp;
            <Link to ="/pokemon_list">List</Link>&nbsp;
            <Link to ="/pokemon_details">Pokemon Details</Link>&nbsp;
            <Link to ="/about">About</Link>
          </header>
          {/* These define the routing paths to our imported components */}
            <Route path="/" exact component={Home}></Route>
            <Route path="/pokemon_list" component={List}></Route>
            <Route path="/pokemon_details" component={Details}></Route>
            <Route path="/about" component={About}></Route>
        </div>
      </Router>
    )
  }
}
