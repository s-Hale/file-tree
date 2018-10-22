

import React from 'react';
import Checkbox from '../components/Checkbox.jsx';

class Checkboxes extends React.Component {
  handleSelection(event) {
    let selectedFacility = event.target.value;
    event.target.checked
      ? this.props.addSelectedFacility(selectedFacility)
      : this.props.removeSelectedFacility(selectedFacility);
  }
  render() {
    let allFacilities = ["gym", "pool", "car park", "wifi", "pets", "bar", "golf", "restaurant"];
    let renderCheckboxes = allFacilities.map((facility, i) => {
      return (
        <div className="checkbox" key={i}>
          <Checkbox
            id={facility}
            props={this.props}
            value={facility}
            checked={this.props.selectedFacilities.includes(facility)}
            onSelect={this.handleSelection.bind(this)}
          />
          <label className="check-label">{facility}</label>
        </div>
      );
    });
    return (
      <div>
        <div className="checkboxes-wrapper">{renderCheckboxes}</div>
        <div />
      </div>
    );
  }
}

export default Checkboxes;