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
    return (
      <div className="wrapper-app">
        <FilterBar />
        <Folder data={this.state.data} />
      </div>
    );
  }
}

export default App;
