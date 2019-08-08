import React from "react";
import originalData from "./originalData";
import "./App.css";
import Folder from "./components/Folder";
import FilterBar from "./components/FilterBar";

class App extends React.Component {
  state = {
    data: originalData
  };

  render() {
    const sortByName = () => null;
    const sortByDate = () => null;
    const sortByType = () => null;
    const handleTypeSearch = () => null;

    return (
      <div className="wrapper-app">
        <FilterBar
          sortByName={sortByName}
          sortByType={sortByType}
          sortByDate={sortByDate}
          handleTypeSearch={handleTypeSearch}
        />
        <Folder data={this.state.data} />
      </div>
    );
  }
}

export default App;
