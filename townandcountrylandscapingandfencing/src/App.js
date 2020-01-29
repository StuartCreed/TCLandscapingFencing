import React from 'react';
import { Component } from 'react';
import Navbar from './components/Navbar';
import Main from './components/Main';

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
          <Main />
        </>
    )
  }
}

export default App;
