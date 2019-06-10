import React from 'react';

import SearchPage from "./SearchPage"
import Explore from "./Explore"
import Featured from "./Featured"
import Footer from "./Footer"

class Home extends React.Component {
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

export default Home;