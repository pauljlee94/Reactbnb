import React from 'react';

import SearchPage from "./SearchPage"
import Explore from "./Explore"
import Featured from "./Featured"

class Main extends React.Component {
  render() {
    return (
      <div>
        <SearchPage />
        <Explore />
        <Featured />
      </div>
    )
  }
}

export default Main;