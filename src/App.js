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

export default class App extends Component {
  render() {
    return (   
      <Router>
      </Router>
    )
  }
}
