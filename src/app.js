import React, { Component } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import youtube from "./api/youtube";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { videos: [] };
  }

  onSearchSubmit = async (term) => {
    await youtube
      .get(`/search`, {
        params: {
          q: term,
        },
      })
      .then((res) => {
        this.setState({ videos: res.data.items });
      })
      .catch((err) => console.log(err));
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
