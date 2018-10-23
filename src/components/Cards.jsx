

import React from 'react';
import Stars from './Stars.jsx';

const Cards = (props) => {
  const { data } = props;
    return (
      <div className="cards-wrapper">
        {data.map((data, i) => (
          <div className="card" key={i}>
            <p className="hotel-name">{data.name}</p>
            <Stars number={data.starRating}/>
            <img className="hotel-img" src={data.img} alt="hotel"/>
            <div className="facilities-wrapper">
              {data.facilities.map((each, i) => <p className="facility-indiv" key={i}>{each}</p>)}
            </div>
          </div>
        ))}
      </div>
    );
}
export default Cards;