
import React from 'react';

const Checkbox = (props) => {
  const {
   id,
   value,
   onSelect,
   checked } = props;
  return (
    <input
      type="checkbox"
      id={id}
      value={value}
      onChange={onSelect}
      checked={checked}
    />
 )
};

export default Checkbox;