import React from "react";
import File from "./File";

class Folder extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <div className="wrapper-files">
        {data.map(each => (
          <p>
            {each.type === "folder" ? (
              <div className="wrapper-top-level">
                <span>{each.name}</span>
                <Folder data={each.files} />
              </div>
            ) : (
              <File data={each} />
            )}
          </p>
        ))}
      </div>
    );
  }
}

export default Folder;
