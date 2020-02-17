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

const styles = theme => ({
  CardGridStyle: {
    margin: "auto",
    padding: "40px",
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

    const Cards = () => {
      return (
        <>
          <Grid item xs={12} sm={6} md={4} lg={3} className={classes.CardGridStyle}>
            <ServicesCard cardService={'Fencing'}/>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3} className={classes.CardGridStyle}>
            <ServicesCard cardService={'Fencing'}/>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3} className={classes.CardGridStyle}>
            <ServicesCard cardService={'Fencing'}/>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3} className={classes.CardGridStyle}>
            <ServicesCard cardService={'Fencing'}/>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3} className={classes.CardGridStyle}>
            <ServicesCard cardService={'Fencing'}/>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3} className={classes.CardGridStyle}>
            <ServicesCard cardService={'Fencing'}/>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3} className={classes.CardGridStyle}>
            <ServicesCard cardService={'Fencing'}/>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3} className={classes.CardGridStyle}>
            <ServicesCard cardService={'Fencing'}/>
          </Grid>

        </>
      )
    }

    return(
        <>
            <Navbar page={'Services'}/>
            {/*MOBILE VIEW*/}
            <Hidden lgUp>
            <Grid xs={12} container style={{'direction':'row', 'justify':"space-around", 'height':'100%', 'width':'100%', 'marginTop':'64px', 'padding': '60px'}} >
              <Cards />
            </Grid>
            </Hidden>

            {/*COMPUTER VIEW*/}
            <Hidden only={['md', 'sm', 'xs']}>
              <Grid container style={{'direction':'row', 'justify':"space-around", 'height':'100%', 'width':'100%', 'marginTop':'140px', 'padding': '60px'}} >
                <Cards/>
              </Grid>
            </Hidden>
        </>
      )
  }
}

export default withStyles(styles)(Services);
