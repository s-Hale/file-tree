

import React from 'react';

class Cards extends React.Component {

  render() {
    const { data } = this.props;
    return (
      <div className="cards-wrapper">
        {data.map((data, i) => (
          <div className="card" key={i}>
            <p className="hotel-name">{data.name}</p>
            <p className="hotel-rating">{data.starRating}</p>
            <img className="hotel-img" src={data.img} alt="hotel"/>
            <div className="facilities-wrapper">
              {data.facilities.map((each, i) => <p className="facility-indiv" key={i}>{each}</p>)}
            </div>
          </div>
        ))}
      </div>
    );
  }
}
export default Cards;