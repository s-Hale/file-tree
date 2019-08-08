import React from "react";

const File = props => {
  const { data } = props;
  return (
    <div className="wrapper-top-level">
      <p>{data.name}</p>
      <span className="label">added:</span>
      <span>{data.added}</span>
    </div>
  );
};

export default File;
