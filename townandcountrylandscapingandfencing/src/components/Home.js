import React from 'react';
import { Component } from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Hidden from '@material-ui/core/Hidden';
import withWidth from '@material-ui/core/withWidth';
import Typography from '@material-ui/core/Typography';
import ColourTheme from '../ColourTheme';
import { Container, AppBar, Toolbar, IconButton, Button, Grid, Card } from '@material-ui/core';
import CarouselBigScreen from './CarouselBigScreen';
import CarouselSmallScreen from './CarouselSmallScreen';
import FencingCard from './FencingCard';
import { withRouter } from 'react-router';
import Navbar from './Navbar';

class Home extends Component {
    constructor(props) {
      super(props);
         this.state = {
      };
    }

  render(){

    return(
      <>
      {/*MOBILE VIEW*/}
      <Navbar page={'Home'}/>
      <Hidden lgUp>
        <Grid container style={{'direction':'row', 'marginTop':'64px','justify':"space-around", "alignItems":"center", 'height':'100%', 'width':'100%'}}>
          <Grid xs={12}>
            <CarouselSmallScreen />
          </Grid>
        </Grid>
      </Hidden>

      {/*DESKTOP VIEW*/}
      <Hidden only={['md' ,'sm', 'xs']}>
        <Grid container style={{'direction':'row', 'marginTop':'140px','justify':"space-around", "alignItems":"center", 'height':'100%', 'width':'100%', 'paddingLeft':'0px', 'paddingRight':'0px'}}>
          <Grid xs={12} >
            <CarouselBigScreen/>
          </Grid>
          <Grid xs={12} container style={{'direction':'row', "alignItems":"center", 'justify':"space-around", 'height':'100%', 'width':'100%', 'paddingLeft':'0px', 'paddingRight':'0px', 'marginTop':'0px'}} >
            <Grid xs={4}>
              <FencingCard/>
            </Grid>
            <Grid xs={4}>
              <FencingCard/>
            </Grid>
            <Grid xs={4}>
              <FencingCard/>
            </Grid>
          </Grid>
        </Grid>

      </Hidden>
      </>
    )
  }
}

export default Home
