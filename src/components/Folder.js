import React from "react";
import File from "./File";
import FolderToggle from "./FolderToggle";

const Folder = props => {
  const { data } = props;
  return (
    <div className="wrapper-files">
      {data.map(each => (
        <p>
          {each.type === "folder" ? (
            <div className="wrapper-top-level">
              <span>{each.name}</span>
              <FolderToggle data={each.files} />
            </div>
          ) : (
            <File data={each} />
          )}
        </p>
      ))}
    </div>
  );
};

export default Folder;
