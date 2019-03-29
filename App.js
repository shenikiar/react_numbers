import React, { Component } from "react";
import ReactDOM from "react-dom";

import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Marvel from "./Marvel";
import Character from "./Character";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1>Numbers! Numbers! Numbers!</h1>
          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/marvel">Marvel</NavLink></li>
            <li><NavLink to="/character">Character</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/marvel" component={Marvel}/>
            <Route path="/character" component={Character}/>
          </div>
        </div>
        </HashRouter>
    );
  }
}

export default App;
