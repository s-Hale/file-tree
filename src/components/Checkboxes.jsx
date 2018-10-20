

import React from 'react';
import Checkbox from '../components/Checkbox.jsx';


class Checkboxes extends React.Component {

  render() {
    let allFacilities = ["gym", "pool", "car park", "wifi", "pets", "bar", "golf", "restaurant"];
    let renderCheckboxes = allFacilities.map((facility, i) => {
      return (
        <div className="checkbox" key={i}>
          <Checkbox
            value={facility}
          />
          <label className="check-label">{facility}</label>
        </div>
      );
    });
    return (
      <div>
        <div className="checkboxes-wrapper">{renderCheckboxes}</div>
      </div>
    );
  }
}

export default Checkboxes;