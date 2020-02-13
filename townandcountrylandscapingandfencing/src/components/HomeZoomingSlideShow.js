import React from 'react';
import { Component } from 'react';
import ColourTheme from '../ColourTheme';
import Fonts from '../Fonts';
import Container from '@material-ui/core/Container';
import Hidden from '@material-ui/core/Hidden';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import 'typeface-roboto';
import { createMuiTheme } from "@material-ui/core/styles";

const styles = theme => ({
  New: {
  },
  });

class HomeZoomingSlideShow extends Component {

  constructor(props) {
    super(props);
       this.state = {
        CurrentImage: null
    };
  }

  render() {

    const { classes } = this.props;

    const CurrentSlide = () => {
      const Slide1 = '20180406-150030.jpg';
      const Slide2 = '20181011-151418.jpg';
      const Slide3 = 'slide.jpg';
      return(
        <img src={Slide1} style={{'width':'50%', 'height':'50%'}}/>
      )
    }

    return(
        <>
            {/*MOBILE VIEW*/}
            <Hidden lgUp>
              <div></div>
            </Hidden>

            {/*COMPUTER VIEW*/}
            <Hidden only={['md', 'sm', 'xs']}>
              <CurrentSlide/>
            </Hidden>
        </>
      )
  }
}

export default withStyles(styles)(HomeZoomingSlideShow);
