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

/* FACEBOOK IFRAME - REMOVED AS IT DISAPPEARED ON RERENDER
  <Grid id="facebookIframe" container style={{'direction':'row', "alignItems":"center", 'justify':"space-around", 'height':'100%', 'width':'100%', 'margin': '70px 0px 70px 0px'}} >
    <Grid xs={12}>
      <div style={{'textAlign':'center'}}>
      <Box class="fb-page" data-href="https://www.facebook.com/Town-and-Country-Landscaping-and-Fencing-114780373412133/" data-tabs="timeline" data-width="2000px" data-height="800px" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/Town-and-Country-Landscaping-and-Fencing-114780373412133/" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/Town-and-Country-Landscaping-and-Fencing-114780373412133/">Town and Country Landscaping and Fencing</a></blockquote></Box>
      </div>
    </Grid>
  </Grid>
*/

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
            <CarouselSmallScreen />
          </Grid>
        </Grid>
      </Hidden>

      {/*DESKTOP VIEW CAROUSEL*/}
      <Hidden only={['md' ,'sm', 'xs']}>
        <Grid container style={{'direction':'row', 'marginTop':'140px','justify':"space-around", "alignItems":"center", 'height':'100%', 'width':'100%', 'paddingLeft':'0px', 'paddingRight':'0px'}}>
          <Grid xs={12} >
            <CarouselBigScreen />
          </Grid>
        </Grid>
      </Hidden>

      {/*ABOUT US*/}
        <Grid container style={{'direction':'row', "alignItems":"center", 'justify':"space-around", 'height':'100%', 'width':'100%'}} style={{'marginTop':'40px'}}>
          <Grid item xs={1} lg={2}></Grid>
          <Grid item xs={10} lg={5}>
              <Typography variant="h2" className={classes.AboutUsTypography}>
                About Us
              </Typography>
              <Typography variant='subtitle1' className={classes.AboutUsTypography} style={{'marginTop':'20px'}}>
                Town and Country Landscaping and Fencing specialise in high quality, value for money design and developments for utility and amenity, particularly specialising in paving, drives and fencing.
                From small town gardens to large country estates, we are the landscaping experts for Buckinghamshire and Hertfordshire. We are based in Aylesbury but are the local experts for Hemel Hempstead, Chesham and Princes Risborough.
                For your no obligation, FREE QUOTATION, contact us now.
              </Typography>
          </Grid>
          <Hidden lgUp>
            <Grid item xs={1}></Grid>
          </Hidden>

          <Hidden only={['xs', 'sm', 'md']}>
            <Grid item xs={12} lg={3}>
              <img src="slide.jpg" style={{'width':'100%', 'marginLeft':'40px'}}/>
            </Grid>
          </Hidden>

          <Hidden lgUp>
          <Grid item xs={12} lg={3}>
            <img src="slide.jpg" style={{'width':'100%', 'marginTop':'40px'}}/>
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
