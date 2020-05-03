import React from 'react';
import { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import Hidden from '@material-ui/core/Hidden';
import { Grid } from '@material-ui/core';
import Navbar from '../components/Navbar';
import Outro from '../components/Outro.js';
import Carousels from '../components/Carousels';
import HoverScrollTop from '../components/HoverScrollTop';

const styles = theme => ({
    GridContainer: {
      direction: 'row',
      justify: 'space-around',
      height:'100%',
      width:'100%',
      padding: '0px'
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
          <Grid container style={{'marginTop':'64px'}} className={classes.GridContainer}>
            <Carousels mobile={'true'}/>
          </Grid>
        </Hidden>

        {/*COMPUTER VIEW*/}
        <Hidden only={['md', 'sm', 'xs']}>
          <Grid container style={{'marginTop':'140px'}} className={classes.GridContainer}>
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
