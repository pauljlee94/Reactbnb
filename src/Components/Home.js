import React from "react";

import SearchPage from "./SearchPage";
import Explore from "./Explore";
import Featured from "./Featured";
import Footer from "./Footer";

class Home extends React.Component {
  render() {
    return (
      <div>
        <SearchPage
          onSubmit={this.props.onSubmit}
          handleChange={this.props.handleChange}
          destination={this.props.destination}
          checkin={this.props.checkin}
          checkout={this.props.checkout}
          guests={this.props.guests}
        />
        <Explore />
        <Featured />
        <Footer />
      </div>
    );
  }
}

export default Home;
