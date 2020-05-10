import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Box } from '@material-ui/core';
import Navbar from '../components/Navbar';
import ServicesCard from '../components/ServicesCard';
import Outro from '../components/Outro.js';
import {SERVICES} from '../shared/services';
import { fade } from 'react-animations';

const useStyles = makeStyles((theme) => ({
  CardGridStyle: {
    margin: "auto",
    padding: "10px",
    textAlign: 'center'
  },

  pageMarginTop: {
    marginTop: '140px',
    [theme.breakpoints.down('md')]: {
      marginTop: '64px'
    }
  },
}))

export default function Services() {
  const classes = useStyles();
    return (
    <>
      <Navbar page={'Services'}/>
      <Box className={classes.pageMarginTop}></Box>

      {/*EVERY ITEM IN THE GRID BELOW IS A CARD DETAILING A SERVICE THAT IS PROVIDED*/}
      <Grid container direction="row" justify="space-around" >
        {
          SERVICES.map((item) => {
            return (
              <Grid item xs={6} md={4} className={classes.CardGridStyle}>
                <ServicesCard cardService={item}/>
              </Grid>

            )
          })
        }
      </Grid>

      {/*OUTRO*/}
      <Outro/>
    </>
  )
}
