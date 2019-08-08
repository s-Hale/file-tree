import React from "react";

const FilterBar = props => {
  const { sortByName, sortByDate, sortByType, handleTypeSearch } = props;
  return (
    <>
      <div className="wrapper-filterbar">
        <button className="filter-button name-button pink" onClick={sortByName}>
          sort by name
        </button>
        <button
          className="filter-button date-button palegreen"
          onClick={sortByDate}
        >
          sort by date
        </button>
        <button className="filter-button type-button grey" onClick={sortByType}>
          sort by type
        </button>
      </div>
      <div className="search-wrapper">
        <input
          className="input-bar"
          placeholder="enter filename"
          onChange={handleTypeSearch}
        />
        <i className="fa fa-search" />
      </div>
    </>
  );
};

export default FilterBar;
