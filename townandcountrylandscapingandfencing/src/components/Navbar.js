import React from 'react';
import { Component } from 'react';
import { AppBar, Toolbar, IconButton, Button } from '@material-ui/core';
import SwipeableTemporaryDrawer from './SwipeableTemporaryDrawer';
import ColourTheme from '../ColourTheme';
import Container from '@material-ui/core/Container';
import Hidden from '@material-ui/core/Hidden';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';


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
          <Hidden mdUp>
            <Toolbar>
              <SwipeableTemporaryDrawer />
            </Toolbar>
          </Hidden>

          <Hidden mdDown>
              <Toolbar style={{'backgroundColor': ColourTheme.InvertedColour, 'height': '90px'}}>
                <Grid container spacing={3}>
                </Grid>
              </Toolbar>
              <Toolbar>
                <div style={{'flexGrow': '1'}}>
                  <Grid container spacing={3}>
                    <Grid xs={3} style={{'textAlign':'center'}}><Button style={{'color': ColourTheme.InvertedColour}}>Home</Button></Grid>
                    <Grid xs={3} style={{'textAlign':'center'}}><Button style={{'color': ColourTheme.InvertedColour}}>Services</Button></Grid>
                    <Grid xs={3} style={{'textAlign':'center'}}><Button style={{'color': ColourTheme.InvertedColour}}>About Us</Button></Grid>
                    <Grid xs={3} style={{'textAlign':'center'}}><Button  style={{'color': ColourTheme.InvertedColour}}>Contact Us</Button></Grid>
                  </Grid>
                </div>
              </Toolbar>
          </Hidden>
        </AppBar>
      </>
    )
  }
}

export default NavBar
