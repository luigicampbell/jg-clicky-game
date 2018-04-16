import React, { Component } from 'react';
import './App.css';
import jg from './jg.json'
import Wrapper from './components/wrapper'
import Navpills from './components/navpills'
import Title from './components/title'
import JGCard from './components/JGCard'

class App extends Component {
  render() {
    return (
      <div className="App">
      <div>
        <nav class="navbar">
          <ul>
            <li><a href="/">Clicky Game</a></li>
            <li>Click an image to begin!</li>
            <li>
              "Score: "
              "0"
              " | Top Score: "
              "0"
            </li>
          </ul>
        </nav>
        <header class="header">
          <h1>Clicky Game</h1>
          // Used React dev tools to check the element types
          <h2>Click on an image to earn points, but don't click on any more than once!</h2>
        </header>
      </div>

      </div>
    );
  }
}

export default App;
