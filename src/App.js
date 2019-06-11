import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Home from "./Components/Home";
import Login from "./Components/Login";
import List from "./Components/List";
import Learn from "./Components/Learn";
import About from "./Components/About";
import ResultPage from "./Components/ResultPage";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      showResults: false,
      destination: "",
      checkin: "",
      checkout: "",
      guests: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState(
      {
        [name]: value
      },
      this.handleSubmit
    );
  }

  onSubmit(e) {
    e.preventDefault();
    this.setState({ showResults: true });
  }

  render() {
    return (
      <BrowserRouter>
        <Route
          path="/"
          render={() => (
            <Home
              destination={this.state.destination}
              checkin={this.state.checkin}
              checkout={this.state.checkout}
              guests={this.state.guests}
              handleChange={this.handleChange}
              onSubmit={this.onSubmit}
            />
          )}
          exact
        />
        <Route path="/login" component={Login} />
        <Route path="/list" component={List} />
        <Route path="/learn" component={Learn} />
        <Route path="/about" component={About} />
        <Route
          path="/result"
          render={() => (
            <ResultPage
              destination={this.state.destination}
              checkin={this.state.checkin}
              checkout={this.state.checkout}
              guests={this.state.guests}
            />
          )}
        />
      </BrowserRouter>
    );
  }
}

export default App;
