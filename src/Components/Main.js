import React from 'react';

import SearchPage from "./SearchPage"
import Explore from "./Explore"
import Featured from "./Featured"
import Footer from "./Footer"

class Main extends React.Component {
  render() {
    return (
      <div>
        <SearchPage />
        <Explore />
        <Featured />
        <Footer />
      </div>
    )
  }
}

export default Main;