import React from 'react';
import Hidden from '@material-ui/core/Hidden';
import { Grid } from '@material-ui/core';
import Navbar from '../components/Navbar';
import Outro from '../components/Outro.js';
import Carousels from '../components/Carousels';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  sectionStyling: {
    marginTop: '140px',
    [theme.breakpoints.down('sm')]: {
      marginTop: '64px'
    }
  }
}))

export default function Portfolio() {
  const classes = useStyles();
  return (
    <>
      <Navbar page={'Portfolio'}/>

      <Grid container direction="row" justify="space-around" alignItems="center" className={classes.sectionStyling}>
        <Carousels/>
      </Grid>

      {/*OUTRO*/}
      <Outro/>
  </>
  )
}
