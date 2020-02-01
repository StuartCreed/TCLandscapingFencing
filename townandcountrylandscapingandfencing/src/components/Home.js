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

/*<img src={Logo} style={{"fontSize":"100px", "marginTop":"200px"}}/>*/

class Home extends Component {
  constructor(props) {
    super(props);
       this.state = {
    };
  }

  render(){
    return(
      <>
      <Hidden mdUp>
        <Grid container style={{'direction':'row', 'marginTop':'64px','justify':"space-around", "alignItems":"center", 'height':'100%', 'width':'100%', 'paddingLeft':'40px', 'paddingRight':'40px'}}>
          <Grid xs={12} style={{'backgroundColor':'blue'}} >Home</Grid>
        </Grid>
      </Hidden>

      <Hidden mdDown>
        <Grid container style={{'direction':'row', 'marginTop':'160px','justify':"space-around", "alignItems":"center", 'height':'100%', 'width':'100%', 'paddingLeft':'40px', 'paddingRight':'40px'}}>
          <Grid xs={12} style={{'backgroundColor':'blue'}} >Home</Grid>
        </Grid>
      </Hidden>
      </>
    )
  }
}

export default Home
