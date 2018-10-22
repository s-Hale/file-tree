
import React from 'react';
import Checkboxes from '../components/Checkboxes.jsx';

class Buttons extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedFacilities: [] };
    this.handleClick = this.handleClick.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
  }

  handleClick(event) {
    if (event.target.innerText === "rating desc")
      this.props.sortByRatingDesc(event);
    else this.props.sortByRatingAsc(event);
  }

  handleFilter(event) {
    this.props.filterByFacility(event);
  }

  render() {
    return (
      <div className="buttons-wrapper">
      <div className="buttons-row">
        <button className="rating-button-desc" onClick={this.handleClick}>
          rating desc
        </button>
        <button className="rating-button-asc" onClick={this.handleClick}>
          rating asc
        </button>
      </div>
      <Checkboxes
          selectedFacilities={this.state.selectedFacilities}
      />
      <div className="buttons-row">
        <button className="reset-button" onClick={this.handleClick}>
          reset
        </button>
      </div>
    </div>
    );
  }
}
export default Buttons;