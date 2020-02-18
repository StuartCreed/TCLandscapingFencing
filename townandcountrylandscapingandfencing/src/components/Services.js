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
import {SERVICES} from '../ServicesJSON'

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

    const cardWithJSON = SERVICES.map((item) => {
      console.log(item.service);
      console.log(item.text);
      console.log(item.photo);
      return (
        <Grid item xs={6} sm={6} md={4} lg={4} className={classes.CardGridStyle}>
          <ServicesCard cardService={item.service}/>
        </Grid>
      )
    })

    const Cards = () => {
      return (
        <>
          <Grid item xs={6} sm={6} md={4} lg={4} className={classes.CardGridStyle}>
            <ServicesCard cardService={'Fencing'}/>
          </Grid>
          <Grid item xs={6} sm={6} md={4} lg={4} className={classes.CardGridStyle}>
            <ServicesCard cardService={'Patios'}/>
          </Grid>
          <Grid item xs={6} sm={6} md={4} lg={4} className={classes.CardGridStyle}>
            <ServicesCard cardService={'Decking'}/>
          </Grid>
          <Grid item xs={6} sm={6} md={4} lg={4} className={classes.CardGridStyle}>
            <ServicesCard cardService={'Design'}/>
          </Grid>
          <Grid item xs={6} sm={6} md={4} lg={4} className={classes.CardGridStyle}>
            <ServicesCard cardService={'Pergolas'}/>
          </Grid>
          <Grid item xs={6} sm={6} md={4} lg={4} className={classes.CardGridStyle}>
            <ServicesCard cardService={'Ponds'}/>
          </Grid>
          <Grid item xs={6} sm={6} md={4} lg={4} className={classes.CardGridStyle}>
            <ServicesCard cardService={'Resin Bonded Driveways'}/>
          </Grid>
          <Grid item xs={6} sm={6} md={4} lg={4} className={classes.CardGridStyle}>
            <ServicesCard cardService={'Block Paving'}/>
          </Grid>
          <Grid item xs={6} sm={6} md={4} lg={4} className={classes.CardGridStyle}>
            <ServicesCard cardService={'Gardening'}/>
          </Grid>
          {cardWithJSON}
        </>
      )
    }

    return(
        <>
            <Navbar page={'Services'}/>
            {/*MOBILE VIEW*/}
            <Hidden lgUp>
            <Grid xs={12} container style={{'direction':'row', 'justify':"space-around", 'height':'100%', 'width':'100%', 'marginTop':'64px', 'padding': '0px'}} >
              <Cards />
            </Grid>
            </Hidden>

            {/*COMPUTER VIEW*/}
            <Hidden only={['md', 'sm', 'xs']}>
              <Grid container style={{'direction':'row', 'justify':"space-around", 'height':'100%', 'width':'100%', 'marginTop':'140px', 'padding': '0px'}} >
                <Cards/>
              </Grid>
            </Hidden>

            {/*OUTRO*/}
            <Outro/>
        </>
      )
  }
}

export default withStyles(styles)(Services);
