import React from 'react';
import { Component } from 'react';
import { AppBar, Toolbar, IconButton, Button } from '@material-ui/core';
import SwipeableTemporaryDrawer from './SwipeableTemporaryDrawer'

class NavBar extends Component {
  constructor(props) {
    super(props);
       this.state = {
    };
  }

  render(){
    return(
      <AppBar position="fixed" style={{'backgroundColor':'white'}}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
          </IconButton>
          <SwipeableTemporaryDrawer />
        </Toolbar>
      </AppBar>
    )
  }
}

export default NavBar
