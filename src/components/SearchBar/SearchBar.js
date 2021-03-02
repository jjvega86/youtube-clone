import React, { Component } from "react";
import "./SearchBar.css";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: "blahblahblah" };
  }

  onFormSubmit = (e) => {
      e.preventDefault();
      this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="search-bar ui-segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              onChange={(e) => {
                this.setState({ term: e.target.value });
              }}
              value={this.state.term}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
