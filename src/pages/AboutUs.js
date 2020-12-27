import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Grid, Box } from '@material-ui/core';
import Navbar from '../components/Navbar';
import GoogleMap from '../components/GoogleMap';
import Outro from '../components/Outro.js';

const useStyles = makeStyles((theme) => ({

    /*THIS STYLES THE "CARD" SECTIONS THAT HAVE A HEADER AND INNER TEXT*/
    cardOuterStyling: {
      padding: '40px 40px 40px 40px',
    },
    cardInnerTextStyling: {
      marginTop: '20px'
    },

    /*THIS STYLING IS TO MAKE THE PAGE SHOW BELOW THE FIXED HEADER*/
    pageMarginTop: {
      marginTop: '140px',
      [theme.breakpoints.down('md')]: {
        marginTop: '64px'
      }
    },

  }));

export default function AboutUs() {
  const classes = useStyles();
  return (
    <>

    <Navbar page={'AboutUs'}/>
    <Box  className={classes.pageMarginTop}></Box>

    <Grid container>

      {/*ABOUT US CARD*/}
      <Grid item lg={6} className={classes.cardOuterStyling}>
        <Typography variant="h2" color='primary'>
          About Us
        </Typography>
        <Typography variant='subtitle1' color='primary' className={classes.cardInnerTextStyling}>
          Town and Country Landscaping and Fencing was founded over 25 years ago by Andy Creed and Richard Salewski. Through hard work and building a reputation for high quality work they have been able to expand into the business into small teams serving Aylesbury and surrounding areas.
        </Typography>
      </Grid>

      {/*SERVICE AREA CARD*/}
      <Grid item lg={6} className={classes.cardOuterStyling}>
        <Typography variant="h2" color='primary'>
          Service Area
        </Typography>
        <Typography variant='subtitle1' color='primary' className={classes.cardInnerTextStyling}>
          We are based in Aylesbury but are the local experts for around Buckinghamshire. The red area on the map below is a rough guide to the area which we cover.
        </Typography>
      </Grid>

      {/*AN INTERACTIVE GOOGLE MAP SHOWING THE SERVICE AREA*/}
      <Grid item xs={12}>
        <GoogleMap mobile={"false"}/>
      </Grid>

    </Grid>

    {/*OUTRO*/}
    <Outro />

    </>
  )
}
