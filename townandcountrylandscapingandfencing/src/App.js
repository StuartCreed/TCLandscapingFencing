import React from 'react';
import { Component } from 'react';

import Navbar from './components/Navbar';
import Main from './components/Main';
import SearchAppBar from './components/Navbar2';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="App">
        <>
          <Navbar />
          <Main />
        </>
      </div>
    )
  }
}

export default App;
