import React from 'react';
import { Component } from 'react';

import NavBar from './components/AppBar';
import Main from './components/Main';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="App">
        <>
          <NavBar />
          <Main />

        </>
      </div>
    )
  }
}

export default App;
