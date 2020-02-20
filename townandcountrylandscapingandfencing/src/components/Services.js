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
import Navbar from './Navbar';
import ServicesCard from './ServicesCard';
import Outro from './Outro.js';
import {SERVICES} from '../ServicesJSON';

const styles = theme => ({
  CardGridStyle: {
    margin: "auto",
    padding: "10px",
    textAlign: 'center'
  },
  });

class Services extends Component {

  constructor(props) {
    super(props);
       this.state = {
    };
  }


  render() {

    const { classes } = this.props;

    const CardWithJSON = SERVICES.map((item) => {
      return (
        <Grid item xs={6} sm={6} md={4} lg={4} className={classes.CardGridStyle}>
          <ServicesCard cardService={item} mobile={'false'}/>
        </Grid>
      )
    })

    const MobileCardWithJSON = SERVICES.map((item) => {
      return (
        <Grid item xs={6} sm={6} md={4} lg={4} className={classes.CardGridStyle}>
          <ServicesCard cardService={item} mobile={'true'} />
        </Grid>
      )
    })

    return(
        <>
            <Navbar page={'Services'}/>
            {/*MOBILE VIEW*/}
            <Hidden lgUp>
            <Grid xs={12} container style={{'direction':'row', 'justify':"space-around", 'height':'100%', 'width':'100%', 'marginTop':'64px', 'padding': '0px'}} >
              {MobileCardWithJSON}
            </Grid>
            </Hidden>

            {/*COMPUTER VIEW*/}
            <Hidden only={['md', 'sm', 'xs']}>
              <Grid container style={{'direction':'row', 'justify':"space-around", 'height':'100%', 'width':'100%', 'marginTop':'140px', 'padding': '0px'}} >
                {CardWithJSON}
              </Grid>
            </Hidden>

            {/*OUTRO*/}
            <Outro/>
        </>
      )
  }
}

export default withStyles(styles)(Services);
