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

    const SlideTop = (slideService) => {
      console.log(slideService.slideService, "THIS IS THE SLIDE SERVICE")
      return (
        <>
          <Hidden lgUp>

            <Typography variant="h2" className={classes.PortfolioTitlesTypography} style={{'marginTop':'64px'}}>
              {slideService.slideService}
            </Typography>

            <Grid container style={{'direction':'row','justify':"space-around", "alignItems":"center", 'height':'100%', 'width':'100%'}}>
              <Grid xs={12}>
                <CarouselSmallScreen serviceimage={TestImage}/>
              </Grid>
            </Grid>
          </Hidden>

          <Hidden only={['md' ,'sm', 'xs']}>

            <Typography variant="h2" className={classes.PortfolioTitlesTypography} style={{'marginTop':'140px'}} >
              {slideService.slideService}
            </Typography>

            <Grid container style={{'direction':'row','justify':"space-around", "alignItems":"center", 'height':'100%', 'width':'100%', 'paddingLeft':'0px', 'paddingRight':'0px'}}>
              <Grid xs={12} >
                <CarouselBigScreen serviceimage={TestImage}/>
              </Grid>
            </Grid>
          </Hidden>
        </>
      )
    }

    const Slide = (slideService) => {
      console.log(slideService.slideService, "THIS IS THE SLIDE SERVICE")
      return (
        <>
          <Hidden lgUp>

            <Typography variant="h2" className={classes.PortfolioTitlesTypography}>
              {slideService.slideService}
            </Typography>

            <Grid container style={{'direction':'row','justify':"space-around", "alignItems":"center", 'height':'100%', 'width':'100%'}}>
              <Grid xs={12}>
                <CarouselSmallScreen />
              </Grid>
            </Grid>
          </Hidden>

          <Hidden only={['md' ,'sm', 'xs']}>

            <Typography variant="h2" className={classes.PortfolioTitlesTypography} >
              {slideService.slideService}
            </Typography>

            <Grid container style={{'direction':'row','justify':"space-around", "alignItems":"center", 'height':'100%', 'width':'100%', 'paddingLeft':'0px', 'paddingRight':'0px'}}>
              <Grid xs={12} >
                <CarouselBigScreen />
              </Grid>
            </Grid>
          </Hidden>
        </>
      )
    }

    return(
      <>
        <Navbar page={'Portfolio'}/>
        <SlideTop slideService={"Fencing"}/>
        <Slide slideService={"Patios"}/>
        <Slide slideService={"Decking"}/>
        <Slide slideService={"Pergolas"}/>
        <Slide slideService={"Ponds"}/>
        <Slide slideService={"Resin Bonded Driveways"}/>
        <Slide slideService={"Block Paving"}/>
        <Slide slideService={"Gardening"}/>
        <Outro/>
    </>
    )
  }
}

export default withStyles(styles)(Portfolio);
