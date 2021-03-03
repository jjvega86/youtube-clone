import React, { Component } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import youtube from "./api/youtube";
import VideoList from "./components/VideoList/VideoList";
import VideoDetail from "./components/VideoDetail/VideoDetail";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { videos: [], selectedVideo: null };
  }

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

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
        <div className="ui hidden divider"></div>{" "}
        {/* Creates easy margin between components. Could also write CSS */}
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
