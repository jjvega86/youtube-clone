import React, { Component } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import youtube from "./api/youtube";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { data: "" };
  }

  onSearchSubmit = async (term) => {
    await youtube.get(`/search`, {
      params: {
        q: term,
      },
    });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
