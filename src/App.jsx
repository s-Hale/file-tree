import React, { Component } from 'react';
import './App.css';
import Buttons from './components/Buttons.jsx';
import Cards from './components/Cards';
import hotelData from './hotelData';

class App extends Component {
  constructor(props) {
    super(props);
    this.sortByRatingDesc = this.sortByRatingDesc.bind(this);
    this.sortByRatingAsc = this.sortByRatingAsc.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.originalData = hotelData;
    this.state = { data: this.originalData };
  }

  sortByRatingAsc = () => {
    let result = this.state.data.sort((a, b) => a.starRating - b.starRating);
    this.setState({
      data: result
    });
  };

  sortByRatingDesc = () => {
    let result = this.state.data.sort((a, b) => b.starRating - a.starRating);
    this.setState({
      data: result
    });
  };

  handleReset = () => {
    this.setState({
      data: this.originalData
    });
  };

  render() {
    return (
      <div className="wrapper-app">
      <Buttons 
         data={this.state.data}
         sortByRatingDesc={this.sortByRatingDesc}
         sortByRatingAsc={this.sortByRatingAsc}
         handleReset={this.handleReset}
         />
      <Cards data={this.state.data}/>
      </div>
    );
  }
}

export default App;
