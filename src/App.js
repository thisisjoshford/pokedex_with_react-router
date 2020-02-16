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
import Error from './Error.js';

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
          {/* Switch function works like a javascript switch statement */}
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/pokemon_list" component={List}/>
            <Route path="/pokemon_details" component={Details}/>
            <Route path="/about" component={About}/>
            <Route component={Error}/>
          </Switch>
        </div>
      </Router>
    )
  }
}
