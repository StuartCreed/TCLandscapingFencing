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

const styles = theme => ({
    PaperStyle: {
      fontFamily: Fonts.BoldFont,
      color: ColourTheme.ThirdColour,
      fontSize: '20px',
      margin:'20px',
      padding: '20px'
    },
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
      {/*MOBILE VIEW */}
      <Navbar page={'Home'}/>
      <Hidden lgUp>
        <Grid container style={{'direction':'row', 'marginTop':'64px','justify':"space-around", "alignItems":"center", 'height':'100%', 'width':'100%'}}>
          <Grid xs={12}>
            <CarouselSmallScreen />
          </Grid>
        </Grid>

        {/*ABOUT US*/}
          <Grid container style={{'direction':'row', "alignItems":"center", 'justify':"space-around", 'height':'100%', 'width':'100%'}} >
            <Grid xs={12}>
              <Box style={{'textAlign':'center', 'margin':'40px 0px 40px 0px', 'backgroundColor':ColourTheme.FirstColour}}>
              <Typography className={classes.PaperStyle}>
                Town and Country Landscaping and Fencing specialise in high quality, value for money design and developments for utility and amenity, particularly specialising in paving, drives and fencing.
                From small town gardens to large country estates, we are the landscaping experts for Buckinghamshire and Hertfordshire. We are based in Aylesbury but are the local experts for Hemel Hempstead, Chesham and Princes Risborough.
                For your no obligation, FREE QUOTATION, contact us now.
              </Typography>
              </Box>
            </Grid>
          </Grid>

        {/*FACEBOOK IFRAMES*/}
          <Grid container style={{'direction':'row', "alignItems":"center", 'justify':"space-around", 'height':'100%', 'width':'100%', 'marginBottom': '30px'}} >
            <Grid xs={12}>
              <div style={{'textAlign':'center'}}>
              <Box class="fb-page" data-href="https://www.facebook.com/Town-and-Country-Landscaping-and-Fencing-114780373412133/" data-tabs="timeline" data-width="2000px" data-height="800px" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/Town-and-Country-Landscaping-and-Fencing-114780373412133/" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/Town-and-Country-Landscaping-and-Fencing-114780373412133/">Town and Country Landscaping and Fencing</a></blockquote></Box>
              </div>
            </Grid>
          </Grid>

          {/*OUTRO*/}
          <Outro/>

      </Hidden>

      {/*DESKTOP VIEW*/}
        {/*CAROUSEL*/}
        <Hidden only={['md' ,'sm', 'xs']}>
          <Grid container style={{'direction':'row', 'marginTop':'140px','justify':"space-around", "alignItems":"center", 'height':'100%', 'width':'100%', 'paddingLeft':'0px', 'paddingRight':'0px'}}>
            <Grid xs={12} >
              <CarouselBigScreen />
            </Grid>
          </Grid>

          {/*ABOUT US*/}
            <Grid container style={{'direction':'row', "alignItems":"center", 'justify':"space-around", 'height':'100%', 'width':'100%'}} >
              <Grid xs={12}>
                <Paper style={{'textAlign':'center', 'margin':'40px 200px 40px 200px', 'backgroundColor':ColourTheme.FirstColour}}>
                <Typography className={classes.PaperStyle}>
                  Town and Country Landscaping and Fencing specialise in high quality, value for money design and developments for utility and amenity, particularly specialising in paving, drives and fencing.
                  From small town gardens to large country estates, we are the landscaping experts for Buckinghamshire and Hertfordshire. We are based in Aylesbury but are the local experts for Hemel Hempstead, Chesham and Princes Risborough.
                  For your no obligation, FREE QUOTATION, contact us now.
                </Typography>
                </Paper>
              </Grid>
            </Grid>

          {/*FACEBOOK IFRAMES*/}
            <Grid container style={{'direction':'row', "alignItems":"center", 'justify':"space-around", 'height':'100%', 'width':'100%', 'marginBottom': '30px'}} >
              <Grid xs={12}>
                <div style={{'textAlign':'center'}}>
                <Box class="fb-page" data-href="https://www.facebook.com/Town-and-Country-Landscaping-and-Fencing-114780373412133/" data-tabs="timeline" data-width="2000px" data-height="800px" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/Town-and-Country-Landscaping-and-Fencing-114780373412133/" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/Town-and-Country-Landscaping-and-Fencing-114780373412133/">Town and Country Landscaping and Fencing</a></blockquote></Box>
                </div>
              </Grid>
            </Grid>

            {/*OUTRO*/}
            <Outro/>
        </Hidden>
      </>
    )
  }
}

export default withStyles(styles)(Home);
