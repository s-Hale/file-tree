import React, { Component } from 'react';
import './App.css';
import Buttons from './components/Buttons.jsx';
import Cards from './components/Cards';
import hotelData from './hotelData';

class App extends Component {
  constructor(props) {
    super(props);
    this.originalData = hotelData;
    this.state = { data: this.originalData };
  }
  render() {
    return (
      <div className="App">
      <Buttons />
      <Cards data={this.state.data}/>
      </div>
    );
  }
}

export default App;
