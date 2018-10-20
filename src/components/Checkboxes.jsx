

import React from 'react';
import Checkbox from '../components/Checkbox.jsx';


class Checkboxes extends React.Component {

  render() {
    let options = ["gym", "pool", "car park"];
    let renderCheckboxes = options.map((each, i) => {
      return (
        <div className="checkbox" key={i}>
          <Checkbox
            value={each}
          />
          <label className="check-label">{each}</label>
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