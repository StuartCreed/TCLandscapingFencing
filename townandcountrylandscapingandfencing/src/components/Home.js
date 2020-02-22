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
import { withRouter } from 'react-router';
import Navbar from './Navbar';
import { withStyles } from '@material-ui/styles';
import Fonts from '../Fonts';
import Outro from './Outro.js';
import {OTHER} from '../OtherJSON';

const styles = theme => ({
    AboutUsTypography: {
      fontFamily: Fonts.BoldFont,
      color: ColourTheme.FirstColour,
      textAlign: 'left',
    }
  });

class Home extends Component {
    constructor(props) {
      super(props);
         this.state = {
      };
    }

  render(){

    const { classes } = this.props;

    return(
      <>
      {/*MOBILE VIEW CAROUSEL*/}
      <Navbar page={'Home'}/>
      <Hidden lgUp>
        <Grid container style={{'direction':'row', 'marginTop':'64px','justify':"space-around", "alignItems":"center", 'height':'100%', 'width':'100%'}}>
          <Grid xs={12}>
            <CarouselSmallScreen photo1={OTHER[0].HomePageCarouselPhotos.photo1} photo2={OTHER[0].HomePageCarouselPhotos.photo2} photo3={OTHER[0].HomePageCarouselPhotos.photo3}/>
          </Grid>
        </Grid>
      </Hidden>

      {/*DESKTOP VIEW CAROUSEL*/}
      <Hidden only={['md' ,'sm', 'xs']}>
        <Grid container style={{'direction':'row', 'marginTop':'140px','justify':"space-around", "alignItems":"center", 'height':'100%', 'width':'100%', 'paddingLeft':'0px', 'paddingRight':'0px'}}>
          <Grid xs={12} >
            <CarouselBigScreen photo1={OTHER[0].HomePageCarouselPhotos.photo1} photo2={OTHER[0].HomePageCarouselPhotos.photo2} photo3={OTHER[0].HomePageCarouselPhotos.photo3}/>
          </Grid>
        </Grid>
      </Hidden>

      {/*ABOUT US*/}
        <Grid container style={{'direction':'row', "alignItems":"center", 'justify':"space-around", 'height':'100%', 'width':'100%'}} style={{'marginTop':'40px'}}>
          <Grid item xs={1} lg={2}></Grid>
          <Grid item xs={10} lg={4}>
              <Typography variant="h2" className={classes.AboutUsTypography}>
                {OTHER[0].HomePageTitle}
              </Typography>
              <Typography variant='subtitle1' className={classes.AboutUsTypography} style={{'marginTop':'20px'}}>
                {OTHER[0].HomePageText}
              </Typography>
          </Grid>
          <Hidden lgUp>
            <Grid item xs={1}></Grid>
          </Hidden>

          <Hidden only={['xs', 'sm', 'md']}>
            <Hidden only={['xs', 'sm', 'md']}>
              <Grid item xs={1}></Grid>
            </Hidden>
            <Grid item xs={12} lg={3}>
              <img src={OTHER[0].HomePageWorkerPhoto} style={{'width':'100%'}}/>
            </Grid>
          </Hidden>

          <Hidden lgUp>
          <Grid item xs={12} lg={3}>
            <img src={OTHER[0].HomePageWorkerPhoto} style={{'width':'100%', 'marginTop':'40px'}}/>
          </Grid>
          </Hidden>


        </Grid>

        {/*OUTRO*/}
        <Outro/>

      </>
    )
  }
}

export default withStyles(styles)(Home);
