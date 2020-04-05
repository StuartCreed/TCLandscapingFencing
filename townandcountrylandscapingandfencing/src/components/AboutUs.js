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
import Fonts from '../Fonts';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import GoogleMap from './GoogleMap';
import {OTHER} from '../OtherJSON';
import Outro from './Outro.js';
import HoverScrollTop from './HoverScrollTop';

const styles = theme => ({
    AboutUsTypography: {
      color: ColourTheme.FirstColour,
      fontFamily: Fonts.BoldFont
    },
    mapStyles: {
      width: '100%',
      height: '100%',
    }
  });


class ServiceRadius extends Component {
  constructor(props) {
    super(props);
       this.state = {
    };
  }

  render(){

    const { classes } = this.props;

    const AboutUsHeader = () => {
      return (
        <>
          <Grid item xs={1} lg={2}></Grid>
          <Grid item xs={10} lg={5}>
              <Typography variant="h2" className={classes.AboutUsTypography}>
                {OTHER[1].AboutUsTitle}
              </Typography>
              <Typography variant='subtitle1' className={classes.AboutUsTypography} style={{'marginTop':'20px'}}>
                {OTHER[1].AboutUsText}
              </Typography>
          </Grid>
          <Hidden lgUp>
            <Grid item xs={1}></Grid>
          </Hidden>

          <Hidden only={['xs', 'sm', 'md']}>
            <Grid item xs={12} lg={3} style={{'paddingLeft':'30px'}}>
              <Typography variant="h2" className={classes.AboutUsTypography}>
                {OTHER[1].ServiceAreaTitle}
              </Typography>
              <Typography variant='subtitle1' className={classes.AboutUsTypography} style={{'marginTop':'20px'}}>
                {OTHER[1].ServiceAreaText}
              </Typography>
            </Grid>
          </Hidden>

          <Hidden lgUp style>
            <Hidden lgUp>
              <Grid item xs={1}></Grid>
            </Hidden>
            <Grid item xs={10} lg={3} style={{'marginTop':'40px'}}>
              <Typography variant="h2" className={classes.AboutUsTypography}>
                {OTHER[1].ServiceAreaTitle}
              </Typography>
              <Typography variant='subtitle1' className={classes.AboutUsTypography} style={{'marginTop':'20px'}}>
                  {OTHER[1].ServiceAreaText}
              </Typography>
            </Grid>
            <Hidden lgUp>
              <Grid item xs={1}></Grid>
            </Hidden>
          </Hidden>
        </>
      )

    }

    return(
      <>
      <Navbar page={'AboutUs'}/>
      {/*MOBILE VIEW*/}
      <Hidden lgUp>
        <Grid container style={{'direction':'row', 'marginTop':'64px','justify':"space-around", "alignItems":"center", 'height':'100%', 'width':'100%'}}>
          <Grid item xs={12} style={{'margin':'40px 0px 40px 0px'}}>
            <Grid container>
              <AboutUsHeader />
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <GoogleMap mobile={"true"}/>
          </Grid>
        </Grid>
      </Hidden>

      {/*COMPUTER VIEW*/}
      <Hidden only={['md' ,'sm', 'xs']}>
        <Grid container style={{'direction':'row', 'marginTop':'140px','justify':"space-around", "alignItems":"center", 'height':'100%', 'width':'100%'}}>
          <Grid item xs={12} style={{'margin':'40px 0px 40px 0px'}}>
            <Grid container>
              <AboutUsHeader />
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <GoogleMap mobile={"false"}/>
          </Grid>
        </Grid>
      </Hidden>
      <Outro />

      {/*HOVERSCROLL*/}
      <HoverScrollTop />

      </>
    )
  }
}

export default withStyles(styles)(ServiceRadius);
