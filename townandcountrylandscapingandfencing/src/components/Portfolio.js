import React from 'react';
import { Component } from 'react';
import Box from '@material-ui/core/Box';
import { withStyles } from '@material-ui/styles';
import Paper from '@material-ui/core/Paper';
import Hidden from '@material-ui/core/Hidden';
import withWidth from '@material-ui/core/withWidth';
import Typography from '@material-ui/core/Typography';
import ColourTheme from '../ColourTheme';
import { Container, AppBar, Toolbar, IconButton, Button, Grid } from '@material-ui/core';
import Navbar from './Navbar';
import CarouselBigScreen from './CarouselBigScreen';
import CarouselSmallScreen from './CarouselSmallScreen';
import Fonts from '../Fonts';
import Outro from './Outro.js';
import TestImage from '../Photos/20181011-151418.jpg';
import {SERVICES} from '../ServicesJSON';

const styles = theme => ({
    PortfolioTitlesTypography: {
      fontFamily: Fonts.BoldFont,
      color: ColourTheme.FirstColour,
      textAlign: 'left',
      padding: '30px'
    }
  });

class Portfolio extends Component {
  constructor(props) {
    super(props);
       this.state = {
    };
  }

  render() {

    const { classes } = this.props;

    const SlideWithJSON = SERVICES.map((item) => {
      return (
        <>
          <Hidden lgUp>

            <Typography variant="h2" className={classes.PortfolioTitlesTypography}>
              {item.service}
            </Typography>

            <Grid container style={{'direction':'row','justify':"space-around", "alignItems":"center", 'height':'100%', 'width':'100%'}}>
              <Grid xs={12}>
                <CarouselSmallScreen />
              </Grid>
            </Grid>
          </Hidden>

          <Hidden only={['md' ,'sm', 'xs']}>
            <div id={item.id}></div>
            <Typography variant="h2" className={classes.PortfolioTitlesTypography} >
              {item.service}
            </Typography>

            <Grid container style={{'direction':'row','justify':"space-around", "alignItems":"center", 'height':'100%', 'width':'100%', 'paddingLeft':'0px', 'paddingRight':'0px'}}>
              <Grid xs={12} >
                <CarouselBigScreen />
              </Grid>
            </Grid>
          </Hidden>
        </>
      )
    })

    return(
      <>
        <Navbar page={'Portfolio'}/>


        {/*MOBILE VIEW*/}
        <Hidden lgUp>
          <Grid xs={12} container style={{'direction':'row', 'justify':"space-around", 'height':'100%', 'width':'100%', 'marginTop':'64px', 'padding': '0px'}} >
          {SlideWithJSON}
          </Grid>
        </Hidden>

        {/*COMPUTER VIEW*/}
        <Hidden only={['md', 'sm', 'xs']}>
          <Grid container style={{'direction':'row', 'justify':"space-around", 'height':'100%', 'width':'100%', 'marginTop':'140px', 'padding': '0px'}} >
          {SlideWithJSON}
          </Grid>
        </Hidden>

        {/*OUTRO*/}
        <Outro/>

    </>
    )
  }
}

export default withStyles(styles)(Portfolio);
