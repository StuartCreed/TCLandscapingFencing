import React from 'react';
import { Component } from 'react';
import NavBar from "./components/NavBar/NavBar"
import Jumbotron from "./components/Jumbotron/Jumbotron"
import SwipeableTemporaryDrawer from './navbar'

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
          <SwipeableTemporaryDrawer />
        </>
      </div>
    )
  }
}

export default App;
