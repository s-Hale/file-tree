
import React from 'react';

class Checkbox extends React.Component {
  render() {
    return (
      <input
        type="checkbox"
        id={this.props.id}
        value={this.props.value}
        onChange={this.props.onSelect}
        checked={this.props.checked}
      />
    );
  }
}

export default Checkbox;