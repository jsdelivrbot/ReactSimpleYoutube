import React, { Component } from 'react';

// class-based component are used when we need to keep track of state
class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: "" };
  }
  // the input below is an example of a controlled component/input - meaning that the input isn't 
  // telling 'state' what it should hold, but state is registering the onChange method and getting
  //  it's value, setting it to state, and then state is passing that value back to 
  // the input to display
  render() {
    return (
      <div>
        <input 
        value={this.state.term} placeholder="Search"
        onChange={e => this.setState({ term: e.target.value })} />
      </div>
    );
  }
}

export default SearchBar;
