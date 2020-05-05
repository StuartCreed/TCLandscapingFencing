import React from 'react';
import { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';
import ColourTheme from '../ColourTheme';
import { Grid } from '@material-ui/core';
import Navbar from '../components/Navbar';
import Fonts from '../Fonts';
import GoogleMap from '../components/GoogleMap';
import {OTHER} from '../OtherJSON';
import Outro from '../components/Outro.js';

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

    return(
      <>
      <Navbar page={'AboutUs'}/>

      <Grid container style={{'direction':'row','justify':"space-around", "alignItems":"center", 'height':'100%', 'width':'100%'}}>

        <Grid item lg={6} style={{'padding':'40px 40px 40px 40px'}}>
          <Typography variant="h2" className={classes.AboutUsTypography}>
            About Us
          </Typography>
          <Typography variant='subtitle1' className={classes.AboutUsTypography} style={{'marginTop':'20px'}}>
            Town and Country Landscaping and Fencing was founded over 25 years ago by Andy Creed and Richard Salewski. Through hard work and building a reputation for high quality work they have been able to expand into the business into small teams serving Aylesbury and surrounding areas.
          </Typography>
        </Grid>

        <Grid item lg={6} style={{'padding':'40px 40px 40px 40px'}}>
          <Typography variant="h2" className={classes.AboutUsTypography}>
            Service Area
          </Typography>
          <Typography variant='subtitle1' className={classes.AboutUsTypography} style={{'marginTop':'20px'}}>
            We are based in Aylesbury but are the local experts for around Buckinghamshire. The red area on the map below is a rough guide to the area which we cover.
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <GoogleMap mobile={"false"}/>
        </Grid>

      </Grid>

      {/*OUTRO*/}
      <Outro />

      </>
    )
  }
}

export default withStyles(styles)(ServiceRadius);
