import React from 'react';
import { Component } from 'react';
import './Jumbotron.css';

class Jumbotron extends Component {
  constructor(props) {
    super(props);
       this.state = {
    };
  }
  render(){
    return(
      <div>
        <img src={require("./Image.jpg")}/>
      </div>
    )
  }
}

export default Jumbotron
