import React from "react";
import Folder from "./Folder";

class FolderToggle extends React.Component {
  state = {
    isVisible: false
  };
  render() {
    const { data } = this.props;
    const handleVisible = () => {
      this.setState({
        isVisible: !this.state.isVisible
      });
    };
    return (
      <span>
        <button className="view-button" onClick={handleVisible}>
          {this.state.isVisible ? (
            <i className="fa fa-chevron-up" />
          ) : (
            <i className="fa fa-chevron-down" />
          )}
        </button>
        {this.state.isVisible && <Folder data={data} />}
      </span>
    );
  }
}

export default FolderToggle;
