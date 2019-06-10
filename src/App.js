import React from 'react';
import {BrowserRouter, Route} from "react-router-dom"


import Home from "./Components/Home"
import Login from "./Components/Login"
import List from "./Components/List"
import Learn from "./Components/Learn"
import About from "./Components/About"

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Route path="/" component={Home} exact />
        <Route path="/login" component={Login} />
        <Route path="/list" component={List} />
        <Route path="/learn" component={Learn} />
        <Route path="/about" component={About} />
      </BrowserRouter>
    )
  }
}

export default App;
