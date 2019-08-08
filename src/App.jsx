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
      const tempState = this.state.originalData.slice();
      let result = tempState.sort((a, b) => {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
      });
      this.setState({
        updatedData: result
      });
    };

    const sortByDate = () => {
      const tempState = this.state.originalData.slice();
      let result = tempState.sort((a, b) => {
        if (!a.added && !b.added) return 0;
        if (a.added && !b.added) return -1;
        if (!a.added && b.added) return 1;
        return new Date(b.added) - new Date(a.added);
      });
      this.setState({
        updatedData: result
      });
    };

    const sortByType = () => {
      const tempState = this.state.originalData.slice();
      let result = tempState.sort((a, b) => {
        if (a.type !== "folder") return 1;
        else return -1;
      });
      this.setState({
        updatedData: result
      });
    };

    const handleTypeSearch = e => {
      const tempState = this.state.originalData.slice();
      let userEntry = e.target.value.toLowerCase();
      let result = tempState.filter(each =>
        each.name.toLowerCase().includes(userEntry)
      );
      this.setState({
        updatedData: result
      });
    };

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
