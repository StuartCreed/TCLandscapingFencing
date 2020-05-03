import React from 'react';
import { Component } from 'react';
import Hidden from '@material-ui/core/Hidden';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/styles';
import 'typeface-roboto';
import Navbar from '../components/Navbar';
import ServicesCard from '../components/ServicesCard';
import Outro from '../components/Outro.js';
import {SERVICES} from '../shared/services';
import HoverScrollTop from '../components/HoverScrollTop';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

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
        <ScrollAnimation animateIn="fadeInUp" duration="1">
          <ServicesCard cardService={item} mobile={'false'}/>
        </ScrollAnimation>
        </Grid>

      )
    })

    const MobileCardWithJSON = SERVICES.map((item) => {
      return (
        <Grid item xs={6} sm={6} md={4} lg={4} className={classes.CardGridStyle}>
          <ScrollAnimation animateIn="fadeInUp" duration="1">
            <ServicesCard cardService={item} mobile={'true'} />
          </ScrollAnimation>
        </Grid>
      )
    })

    return(
        <>
            <Navbar page={'Services'}/>

            {/*MOBILE VIEW*/}
            <Hidden lgUp>
            <Grid xs={12} item container style={{'direction':'row', 'justify':"space-around", 'height':'100%', 'width':'100%', 'marginTop':'64px', 'padding': '0px'}} >
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

            {/*HOVERSCROLL*/}
            <HoverScrollTop />

        </>
      )
  }
}

export default withStyles(styles)(Services);
