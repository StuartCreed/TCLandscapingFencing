import React from 'react';
import { Component } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';

class App extends Component {
  constructor(props) {
    super(props);
       this.state = {
    };
  }

  render() {
    return(
        <>
          <Navbar />
          <Home />
        </>
    )
  }
}

export default App;
