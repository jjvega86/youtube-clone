import React, { Component } from "react";
import SearchBar from "./components/SearchBar/SearchBar";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {data: ''};
  }

  onSearchSubmit(){
      //TODO: complete logic after integrating YouTube API

  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onSubmit={this.onSearchSubmit}/>
      </div>
    );
  }
}

export default App;
