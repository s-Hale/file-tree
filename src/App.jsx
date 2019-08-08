import React from "react";
import originalData from "./originalData";
import "./App.css";
import Folder from "./components/Folder";
import FilterBar from "./components/FilterBar";

class App extends React.Component {
  state = {
    updatedData: originalData,
    originalData: originalData
  };

  render() {
    const sortByName = () => {
      let result = this.state.originalData.sort((a, b) => {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
      });
      this.setState({
        updatedData: result
      });
    };

    const sortByDate = () => {
      let result = this.state.originalData.sort(
        (a, b) => new Date(b.added) - new Date(a.added)
      );
      this.setState({
        updatedData: result
      });
    };

    const sortByType = () => {
      let result = this.state.originalData.sort((a, b) => {
        if (a.type !== "folder") return 1;
        else return -1;
      });
      this.setState({
        updatedData: result
      });
    };

    const handleTypeSearch = () => null;

    return (
      <div className="wrapper-app">
        <FilterBar
          sortByName={sortByName}
          sortByType={sortByType}
          sortByDate={sortByDate}
          handleTypeSearch={handleTypeSearch}
        />
        <Folder data={this.state.updatedData} />
      </div>
    );
  }
}

export default App;
