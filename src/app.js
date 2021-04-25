import React, { Component } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import youtube from "./api/youtube";
import VideoList from "./components/VideoList/VideoList";
import VideoDetail from "./components/VideoDetail/VideoDetail";
import CommentList from "./components/CommentList/CommentList";
import CommentForm from "./components/CommentForm/CommentForm";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null,
      comments: [
        {
          author: "JJ",
          date: "04/25/2021",
          text: "This is a comment",
        },
      ],
    };
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
        this.setState({
          videos: res.data.items,
          selectedVideo: res.data.items[0],
        });
      })
      .catch((err) => console.log(err));
  };

  componentDidMount() {
    this.onSearchSubmit("star wars");
  }

  render() {
    return (
      <div className="ui container">
        <div className="ui hidden divider"></div>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <div className="ui hidden divider"></div>
        {/* Creates easy margin between components. Could also write CSS */}
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
              <CommentForm />
              <CommentList comments={this.state.comments} />
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
