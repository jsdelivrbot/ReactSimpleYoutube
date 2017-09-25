import React, { Component } from "react";
import ReactDOM from "react-dom";
import YTSearch from "youtube-api-search";

import SearchBar from "./components/SearchBar";
import VideoList from "./components/VideoList";

import { API_KEY } from "./apikey"; // just to get used to separating out api keys

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };

    YTSearch({ key: API_KEY, term: 'react' }, videos => {
      this.setState({ videos });
      // this.setState({ videos: videos }); Above is equivalent to this - thank you ES6
    });
  }
  render() {
    return <div>
      <SearchBar />
      <VideoList videos={this.state.videos} />
    </div>;
  }
}

// example of a functional component - used when just taking in and outputting data
// const App = () => {
//   return (
//     <div>
//       <SearchBar />
//     </div>
//   );
// };

ReactDOM.render(<App />, document.getElementById("root"));
