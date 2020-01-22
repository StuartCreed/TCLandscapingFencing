import React from 'react';
import { Component } from 'react';
import NavBar from "./components/NavBar/NavBar"
import Jumbotron from "./components/Jumbotron/Jumbotron"
import TemporaryDrawer from './navbar'

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="App">
        <>
          <NavBar />
          <Jumbotron />
          <TemporaryDrawer />
        </>
      </div>
    )
  }
}

export default App;
