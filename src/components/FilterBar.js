import React from "react";

class FilterBar extends React.Component {
  render() {
    return (
      <>
        <div className="wrapper-filterbar">
          <button className="filter-button pink">sort by name</button>
          <button className="filter-button palegreen">sort by date</button>
          <button className="filter-button grey">sort by type</button>
        </div>
        <div className="search-wrapper">
          <input className="input-bar" placeholder="enter filename" />
          <i className="fa fa-search" />
        </div>
      </>
    );
  }
}

export default FilterBar;
