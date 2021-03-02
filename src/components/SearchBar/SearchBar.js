import React, { Component } from "react";
import './SearchBar.css'

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="search-bar ui-segment">
        <form className="ui form">
          <div className="field">
            <label>Video Search</label>
            <input type="text" />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
