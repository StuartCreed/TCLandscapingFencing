import React from 'react';
import { Component } from 'react';
import Jumbotron from './Jumbotron/Jumbotron'
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Hidden from '@material-ui/core/Hidden';
import withWidth from '@material-ui/core/withWidth';
import Typography from '@material-ui/core/Typography';
import ColourTheme from '../ColourTheme';
import { Container, AppBar, Toolbar, IconButton, Button } from '@material-ui/core';

class Main extends Component {
  constructor(props) {
    super(props);
       this.state = {
    };
  }

  render(){

    return(
      <Box >
        <Hidden smDown>
          <Jumbotron />
        </Hidden>
      </Box>
    )
  }
}

export default Main
