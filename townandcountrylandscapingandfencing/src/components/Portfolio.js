import React from 'react';
import { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import Hidden from '@material-ui/core/Hidden';
import ColourTheme from '../ColourTheme';
import { Grid } from '@material-ui/core';
import Navbar from './Navbar';
import Fonts from '../Fonts';
import Outro from './Outro.js';
import Carousels from './Carousels';
import HoverScrollTop from './HoverScrollTop';

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


        {/*MOBILE VIEW*/}
        <Hidden lgUp>
          <Grid container style={{'direction':'row', 'justify':"space-around", 'height':'100%', 'width':'100%', 'marginTop':'64px', 'padding': '0px'}} >
            <Carousels mobile={'true'}/>
          </Grid>
        </Hidden>

        {/*COMPUTER VIEW*/}
        <Hidden only={['md', 'sm', 'xs']}>
          <Grid container style={{'direction':'row', 'justify':"space-around", 'height':'100%', 'width':'100%', 'marginTop':'140px', 'padding': '0px'}} >
            <Carousels mobile={'false'}/>
          </Grid>
        </Hidden>

        {/*OUTRO*/}
        <Outro/>

        {/*HOVERSCROLL*/}
        <HoverScrollTop />

    </>
    )
  }
}

export default withStyles(styles)(Portfolio);
