import React from "react";

class File extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <div className="wrapper-top-level">
        <p>{data.name}</p>
        <span className="label">added:</span>
        <span>{data.added}</span>
      </div>
    );
  }
}

export default File;
