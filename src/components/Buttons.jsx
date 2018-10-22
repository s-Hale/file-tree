
import React from 'react';
import Checkboxes from '../components/Checkboxes.jsx';

class Buttons extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedFacilities: [] };
    this.handleClick = this.handleClick.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
    this.addSelectedFacility = this.addSelectedFacility.bind(this);
    this.removeSelectedFacility = this.removeSelectedFacility.bind(this);
    this.clearSelectedFacilities = this.clearSelectedFacilities.bind(this);
  }

   addSelectedFacility = facility => {
    let selectedFacilities = [...this.state.selectedFacilities, facility];
    this.setState({ selectedFacilities });
    this.props.filterByFacility(selectedFacilities);
  };

  removeSelectedFacility = facility => {
    let selectedFacilities = [...this.state.selectedFacilities];
    let index = selectedFacilities.indexOf(facility);
    selectedFacilities.splice(index, 1);
    this.setState({ selectedFacilities });
    this.props.filterByFacility(selectedFacilities);
  };

  clearSelectedFacilities = () => {
    this.setState({ selectedFacilities: [] });
    this.props.filterByFacility([]);
    this.props.handleReset();
  };

  handleClick(event) {
    if (event.target.innerText === "rating desc")
      this.props.sortByRatingDesc(event);
    else if (event.target.innerText === "rating asc")
      this.props.sortByRatingAsc(event);
    else this.clearSelectedFacilities();
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
          addSelectedFacility={this.addSelectedFacility}
          removeSelectedFacility={this.removeSelectedFacility}
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