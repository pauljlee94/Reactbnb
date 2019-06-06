import React from 'react';

import Search from "./Components/Search"
import Explore from "./Components/Explore"

class App extends React.Component {
  render() {
    return (
      <div>
        <Search />
        <Explore />
        {/* <Main /> */}
        {/* <Recommendation /> */}
      </div>
    )
  }
}

export default App;
