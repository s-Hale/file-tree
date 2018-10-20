import React, { Component } from 'react';
import './App.css';
import Buttons from './components/Buttons.jsx';
import Cards from './components/Cards';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Buttons />
      <Cards />
      </div>
    );
  }
}

export default App;
