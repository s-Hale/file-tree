
import React from 'react';


class Buttons extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    if (event.target.innerText === "rating desc")
      this.props.sortByRatingDesc(event);
    else this.props.sortByRatingAsc(event);
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