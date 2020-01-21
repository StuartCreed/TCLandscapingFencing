import React from 'react';
import { Component } from 'react';
import NavBar from "./components/NavBar/NavBar"

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="App">
        <>
          <NavBar />
          <header className="App-header">
            <h1>Town and Country Landscaping and Fencing</h1>
          </header>
        </>
      </div>
    )
  }
}

export default App;
