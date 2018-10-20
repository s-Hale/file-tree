

import React from 'react';


class Checkboxes extends React.Component {

  render() {
    let options = ["gym", "pool", "car park"];
    let renderCheckboxes = options.map((each, i) => {
      return (
        <div className="checkbox" key={i}>
          {/* <CheckBox
            value={each}
          /> */}
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