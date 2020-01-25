import React from 'react';
import { Component } from 'react';
import { AppBar, Toolbar, IconButton, Button } from '@material-ui/core';
import SwipeableTemporaryDrawer from './SwipeableTemporaryDrawer';
import ColourTheme from '../ColourTheme';
import Container from '@material-ui/core/Container';

class NavBar extends Component {
  constructor(props) {
    super(props);
       this.state = {
    };
  }

  render(){
    return(
      <>
      <AppBar position="fixed" style={{'backgroundColor': ColourTheme.FirstColour, "boxShadow": "0 2px 4px 2px rgba(0,0,0,.25)"}}>
        <Toolbar>
          <SwipeableTemporaryDrawer />
        </Toolbar>
      </AppBar>
      </>
    )
  }
}

export default NavBar
