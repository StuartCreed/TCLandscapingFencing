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
import FencingCard from './FencingCard';

const styles = theme => ({
  New: {
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

    return(
        <>
            <Navbar page={'Services'}/>
            {/*MOBILE VIEW*/}
            <Hidden lgUp>
            <Grid xs={12} container style={{'direction':'row', "alignItems":"center", 'justify':"space-around", 'height':'100%', 'width':'100%'}} >
              <Grid xs={4}>
                <FencingCard/>
              </Grid>
              <Grid xs={4} style={{'textAlign':'center'}}>
                <FencingCard/>
              </Grid>
              <Grid xs={4} style={{'textAlign':'center'}}>
                <FencingCard/>
              </Grid>
            </Grid>
            </Hidden>

            {/*COMPUTER VIEW*/}
            <Hidden only={['md', 'sm', 'xs']}>
              <Grid xs={12} container style={{'direction':'row', "alignItems":"center", 'justify':"space-around", 'height':'100%', 'width':'100%'}} >
                <Grid xs={4}>
                  <FencingCard/>
                </Grid>
                <Grid xs={4} style={{'textAlign':'center'}}>
                  <FencingCard/>
                </Grid>
                <Grid xs={4} style={{'textAlign':'center'}}>
                  <FencingCard/>
                </Grid>
              </Grid>
            </Hidden>
        </>
      )
  }
}

export default withStyles(styles)(Services);
