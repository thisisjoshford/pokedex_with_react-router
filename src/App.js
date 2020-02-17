import React, { Component } from 'react';
//imports the react router suite
import { 
  Route, 
  Switch,
  Link,
  BrowserRouter as Router, 
} from 'react-router-dom';
//importing our components
import Home from './Home.js';
import Header from './Header.js';
import About from './About.js';
import Error from './Error.js';

export default class App extends Component {
  render() {
    return (   
      <Router>
        <div>
           {/* this creates a static header w/ navigation links */}
          <header>
            <Header></Header>
            <Link to ="/">Home</Link>&nbsp;
            <Link to ="/about">About</Link>
            <hr/>
          </header>
          {/* These define the routing paths to our imported components */}
          {/* Switch function works like a javascript switch statement */}
          <Switch>
            <Route exact path="/" exact component={Home}/>
            <Route exact path="/about" component={About}/>
            <Route component={Error}/>
          </Switch>
        </div>
      </Router>
    )
  }
}
