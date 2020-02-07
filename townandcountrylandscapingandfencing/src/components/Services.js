import React from 'react';
import { Component } from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Hidden from '@material-ui/core/Hidden';
import withWidth from '@material-ui/core/withWidth';
import Typography from '@material-ui/core/Typography';
import ColourTheme from '../ColourTheme';
import { Container, AppBar, Toolbar, IconButton, Button, Grid } from '@material-ui/core';
import Navbar from './Navbar';

class Services extends Component {
  constructor(props) {
    super(props);
       this.state = {
    };
  }

  render(){

    return(
      <>
      <Navbar page={'Services'}/>
      <Hidden lgUp>
        <Grid container style={{'direction':'row', 'marginTop':'64px','justify':"space-around", "alignItems":"center", 'height':'100%', 'width':'100%', 'paddingLeft':'20px', 'paddingRight':'20px'}}>
          <Grid xs={12}>Services</Grid>
        </Grid>
      </Hidden>

      <Hidden only={['md' ,'sm', 'xs']}>
        <Grid container style={{'direction':'row', 'marginTop':'140px','justify':"space-around", "alignItems":"center", 'height':'100%', 'width':'100%', 'paddingLeft':'40px', 'paddingRight':'40px'}}>
          <Grid xs={12} >Services Big Screen</Grid>
        </Grid>
      </Hidden>
      </>
    )
  }
}

export default Services
