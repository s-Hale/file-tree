

import React from 'react';

class Cards extends React.Component {

  render() {
    const { data } = this.props;
    return (
      <div className="cards-wrapper">
        {data.map((data, i) => (
          <div className="card">
            <p className="hotel-name">{data.name}</p>
            <p className="hotel-rating">{data.starRating}</p>
            <div className="facilities-wrapper">
              {data.facilities.map(each => <p className="facility-indiv">{each}</p>)}
            </div>
          </div>
        ))}
      </div>
    );
  }
}
export default Cards;