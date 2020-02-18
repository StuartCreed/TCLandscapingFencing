import React from 'react';
import { Component } from 'react';
import Box from '@material-ui/core/Box';
import { withStyles } from '@material-ui/styles';
import Paper from '@material-ui/core/Paper';
import Hidden from '@material-ui/core/Hidden';
import withWidth from '@material-ui/core/withWidth';
import Typography from '@material-ui/core/Typography';
import ColourTheme from '../ColourTheme';
import { Container, AppBar, Toolbar, IconButton, Button, Grid } from '@material-ui/core';
import Navbar from './Navbar';
import Fonts from '../Fonts';

const styles = theme => ({
    ContactUsTypography: {
      color: ColourTheme.ThirdColour,
      fontWeight: 'normal',
      fontFamily: Fonts.BoldFont,
      letterSpacing: "0.5px",
    }
  });

class ContactUs extends Component {
  constructor(props) {
    super(props);
       this.state = {
    };
  }

  render(){

    const { classes } = this.props;

    const ContactUsContent = () => {
      return (
        <>
        <Grid xs={12}>Andrew Creed's Phone Number</Grid>
        <Button href="tel:+447815946340" style={{'backgroundColor':ColourTheme.FirstColour}}><Typography variant="subtitle1" noWrap className={classes.ContactUsTypography}>Andy: 07815946340</Typography></Button>
        </>
      )
    }

    return(
      <>
      <Navbar page={'ContactUs'}/>
      <Hidden lgUp>
        <Grid container style={{'direction':'row', 'marginTop':'64px','justify':"space-around", "alignItems":"center", 'height':'100%', 'width':'100%', 'paddingLeft':'20px', 'paddingRight':'20px'}}>
          <ContactUsContent />
        </Grid>
      </Hidden>

      <Hidden only={['md' ,'sm', 'xs']}>
        <Grid container style={{'direction':'row', 'marginTop':'140px','justify':"space-around", "alignItems":"center", 'height':'100%', 'width':'100%', 'paddingLeft':'40px', 'paddingRight':'40px'}}>
          <ContactUsContent />
        </Grid>
      </Hidden>
      </>
    )
  }
}

export default withStyles(styles)(ContactUs);
