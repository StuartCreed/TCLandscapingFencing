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

    return(
      <>
        <Navbar page={'Portfolio'}/>

        {/*FENCING SLIDES*/}
          {/*MOBILE VIEW*/}
          <Hidden lgUp>

            <Typography variant="h2" className={classes.PortfolioTitlesTypography} style={{'marginTop':'64px'}}>
              Fencing
            </Typography>

            <Grid container style={{'direction':'row','justify':"space-around", "alignItems":"center", 'height':'100%', 'width':'100%'}}>
              <Grid xs={12}>
                <CarouselSmallScreen />
              </Grid>
            </Grid>
          </Hidden>

          {/*DESKTOP VIEW*/}
          <Hidden only={['md' ,'sm', 'xs']}>

            <Typography variant="h2" className={classes.PortfolioTitlesTypography} style={{'marginTop':'140px'}}>
              Fencing
            </Typography>

            <Grid container style={{'direction':'row','justify':"space-around", "alignItems":"center", 'height':'100%', 'width':'100%', 'paddingLeft':'0px', 'paddingRight':'0px'}}>
              <Grid xs={12} >
                <CarouselBigScreen />
              </Grid>
            </Grid>
          </Hidden>



          {/*PATIOS SLIDES*/}
            {/*MOBILE VIEW*/}
            <Hidden lgUp>

              <Typography variant="h2" className={classes.PortfolioTitlesTypography}>
                Patios
              </Typography>

              <Grid container style={{'direction':'row','justify':"space-around", "alignItems":"center", 'height':'100%', 'width':'100%'}}>
                <Grid xs={12}>
                  <CarouselSmallScreen />
                </Grid>
              </Grid>
            </Hidden>

            {/*DESKTOP VIEW*/}
            <Hidden only={['md' ,'sm', 'xs']}>

              <Typography variant="h2" className={classes.PortfolioTitlesTypography} >
                Patios
              </Typography>

              <Grid container style={{'direction':'row','justify':"space-around", "alignItems":"center", 'height':'100%', 'width':'100%', 'paddingLeft':'0px', 'paddingRight':'0px'}}>
                <Grid xs={12} >
                  <CarouselBigScreen />
                </Grid>
              </Grid>
            </Hidden>



          {/*DECKING SLIDES*/}
            {/*MOBILE VIEW*/}
            <Hidden lgUp>
              <Typography variant="h2" className={classes.PortfolioTitlesTypography}>
                Decking
              </Typography>

              <Grid container style={{'direction':'row','justify':"space-around", "alignItems":"center", 'height':'100%', 'width':'100%'}}>
                <Grid xs={12}>
                  <CarouselSmallScreen />
                </Grid>
              </Grid>
            </Hidden>

            {/*DESKTOP VIEW*/}
            <Hidden only={['md' ,'sm', 'xs']}>

              <Typography variant="h2" className={classes.PortfolioTitlesTypography} >
                Decking
              </Typography>

              <Grid container style={{'direction':'row','justify':"space-around", "alignItems":"center", 'height':'100%', 'width':'100%', 'paddingLeft':'0px', 'paddingRight':'0px'}}>
                <Grid xs={12} >
                  <CarouselBigScreen />
                </Grid>
              </Grid>
            </Hidden>



          {/*PERGOLAS SLIDES*/}
            {/*MOBILE VIEW*/}
            <Hidden lgUp>

              <Typography variant="h2" className={classes.PortfolioTitlesTypography}>
                Pergolas
              </Typography>

              <Grid container style={{'direction':'row','justify':"space-around", "alignItems":"center", 'height':'100%', 'width':'100%'}}>
                <Grid xs={12}>
                  <CarouselSmallScreen />
                </Grid>
              </Grid>
            </Hidden>

            {/*DESKTOP VIEW*/}
            <Hidden only={['md' ,'sm', 'xs']}>

              <Typography variant="h2" className={classes.PortfolioTitlesTypography} >
                Pergolas
              </Typography>

              <Grid container style={{'direction':'row','justify':"space-around", "alignItems":"center", 'height':'100%', 'width':'100%', 'paddingLeft':'0px', 'paddingRight':'0px'}}>
                <Grid xs={12} >
                  <CarouselBigScreen />
                </Grid>
              </Grid>
            </Hidden>



          {/*PONDS SLIDES*/}
            {/*MOBILE VIEW*/}
            <Hidden lgUp>

              <Typography variant="h2" className={classes.PortfolioTitlesTypography}>
                Ponds
              </Typography>

              <Grid container style={{'direction':'row','justify':"space-around", "alignItems":"center", 'height':'100%', 'width':'100%'}}>
                <Grid xs={12}>
                  <CarouselSmallScreen />
                </Grid>
              </Grid>
            </Hidden>

            {/*DESKTOP VIEW*/}
            <Hidden only={['md' ,'sm', 'xs']}>

              <Typography variant="h2" className={classes.PortfolioTitlesTypography} >
                Ponds
              </Typography>

              <Grid container style={{'direction':'row','justify':"space-around", "alignItems":"center", 'height':'100%', 'width':'100%', 'paddingLeft':'0px', 'paddingRight':'0px'}}>
                <Grid xs={12} >
                  <CarouselBigScreen />
                </Grid>
              </Grid>
            </Hidden>




          {/*RESIN BONDING DRIVEWAYS SLIDES*/}
            {/*MOBILE VIEW*/}
            <Hidden lgUp>

              <Typography variant="h2" className={classes.PortfolioTitlesTypography}>
                Resin Bonded Driveways
              </Typography>

              <Grid container style={{'direction':'row','justify':"space-around", "alignItems":"center", 'height':'100%', 'width':'100%'}}>
                <Grid xs={12}>
                  <CarouselSmallScreen />
                </Grid>
              </Grid>
            </Hidden>

            {/*DESKTOP VIEW*/}
            <Hidden only={['md' ,'sm', 'xs']}>

              <Typography variant="h2" className={classes.PortfolioTitlesTypography} >
                Resin Bonded Driveways
              </Typography>

              <Grid container style={{'direction':'row','justify':"space-around", "alignItems":"center", 'height':'100%', 'width':'100%', 'paddingLeft':'0px', 'paddingRight':'0px'}}>
                <Grid xs={12} >
                  <CarouselBigScreen />
                </Grid>
              </Grid>
            </Hidden>




          {/*BLOCK PAVING SLIDES*/}
            {/*MOBILE VIEW*/}
            <Hidden lgUp>

              <Typography variant="h2" className={classes.PortfolioTitlesTypography}>
                Block Paving
              </Typography>

              <Grid container style={{'direction':'row','justify':"space-around", "alignItems":"center", 'height':'100%', 'width':'100%'}}>
                <Grid xs={12}>
                  <CarouselSmallScreen />
                </Grid>
              </Grid>
            </Hidden>

            {/*DESKTOP VIEW*/}
            <Hidden only={['md' ,'sm', 'xs']}>

              <Typography variant="h2" className={classes.PortfolioTitlesTypography} >
                Block Paving
              </Typography>

              <Grid container style={{'direction':'row','justify':"space-around", "alignItems":"center", 'height':'100%', 'width':'100%', 'paddingLeft':'0px', 'paddingRight':'0px'}}>
                <Grid xs={12} >
                  <CarouselBigScreen />
                </Grid>
              </Grid>
            </Hidden>




          {/*GARDENING*/}
            {/*MOBILE VIEW*/}
            <Hidden lgUp>
              <Typography variant="h2" className={classes.PortfolioTitlesTypography}>
                Gardening
              </Typography>

              <Grid container style={{'direction':'row','justify':"space-around", "alignItems":"center", 'height':'100%', 'width':'100%'}}>
                <Grid xs={12}>
                  <CarouselSmallScreen />
                </Grid>
              </Grid>
            </Hidden>

            {/*DESKTOP VIEW*/}
            <Hidden only={['md' ,'sm', 'xs']}>
              <Typography variant="h2" className={classes.PortfolioTitlesTypography} >
                Gardening
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
}

export default withStyles(styles)(Portfolio);
