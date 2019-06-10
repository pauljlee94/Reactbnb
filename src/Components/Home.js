import React from 'react';

import SearchPage from "./SearchPage"
import Explore from "./Explore"
import Featured from "./Featured"
import Footer from "./Footer"
import ResultPage from "./ResultPage"

class Home extends React.Component {
  constructor() {
    super()
    this.state = {
      showResults: false,
      destination: "",
      checkin: "",
      checkout: "",
      guests: ""
    }
    this.handleChange = this.handleChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }
  
  handleChange(e) {
    const {name, value} = e.target
    this.setState({
        [name]: value
    }, this.handleSubmit) 
  }

  onSubmit(e) {
      e.preventDefault()
      this.setState({showResults: true})
  }

  render() {
    return (
      <div>
        {this.state.showResults  === false?
        <div>
          <SearchPage onSubmit={this.onSubmit} handleChange={this.handleChange} destination={this.state.destination} checkin={this.state.checkin} checkout={this.state.checkout} guests={this.state.guests}/>
          <Explore />
          <Featured />
          <Footer />
        </div> :
          <ResultPage destination={this.state.destination} checkin={this.state.checkin} checkout={this.state.checkout} guests={this.state.guests}/>}
      </div>
    )
  }
}

export default Home;