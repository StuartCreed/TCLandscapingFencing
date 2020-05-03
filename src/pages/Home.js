import React from 'react';
import { Component } from 'react';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';
import { Grid, Box } from '@material-ui/core';
import CarouselWrapper from '../components/CarouselWrapper';
import Navbar from '../components/Navbar';
import { withStyles } from '@material-ui/styles';
import Outro from '../components/Outro.js';
import {OTHER} from '../OtherJSON';
import HoverScrollTop from '../components/HoverScrollTop';
import ScrollAnimation from 'react-animate-on-scroll';
import { makeStyles } from '@material-ui/core/styles';
import { contactInformation } from '../shared/contactInformation';

const useStyles = makeStyles((theme) => ({

  sectionStyling: {
    [theme.breakpoints.up('lg')]: {
      marginTop:'40px',
    },
  },

  cardOuterStyling: {
    margin: 'auto',
    padding: '40px 40px 40px 0px',
  },
  cardInnerTextStyling: {
    marginTop: '20px'
  },

  imageContainerStyling: {
    margin: 'auto',
    '& img': {
      width:'100%'
    }
  }
}))

export default function Home() {
  const classes = useStyles();
  return (
    <>
      <Navbar page={'Home'}/>

      {/*CAROUSEL AT THE TOP OF THE PAGE*/}
      <CarouselWrapper photo1="./Photos/Home/Promotion Pictures/1.jpg" photo2="./Photos/Home/Promotion Pictures/2.jpg" photo3="./Photos/Home/Promotion Pictures/3.jpg"/>

      {/*WHAT WE DO SECTION*/}
      <Grid container direction="row" justify="space-around" className={classes.sectionStyling}>

        {/*WHAT WE DO CARD*/}
        <Grid item md={5} className={classes.cardOuterStyling}>
          <Typography variant="h2" color='primary'>
            What We Do
          </Typography>
          <Typography variant='subtitle1' color='primary' className={classes.cardInnerTextStyling}>
            Town and Country Landscaping and Fencing are known for high quality, value for money design. We specialise in paving, drives, fencing, gardening and garden designs from small town gardens to large country estates. If you are looking for landscaping experts for Buckinghamshire and Hertfordshire, contact us now, for your NO OBLIGATION FREE QUOTATION. We would be happy to hear from you.
          </Typography>
        </Grid>

        {/*WHAT WE DO IMAGE*/}
        <Grid item md={5} className={classes.imageContainerStyling}>
          <img src="./Photos/Home/1.jpg" alt="Worker" />
        </Grid>

      </Grid>

      {/*CONTACT US SECTION*/}
      <ScrollAnimation animateIn="fadeInUp" duration="0.7">
      <Grid container direction="row-reverse" justify="space-around" className={classes.sectionStyling}>

        {/*CONTACT US CARD*/}
        <Grid item md={5} className={classes.cardOuterStyling}>
          <Typography variant='h2' color='primary' >
            Contact Us
          </Typography>
          <Typography variant='subtitle1' color='primary' className={classes.cardInnerTextStyling}>
            <div><b>Andy Creed's Phone Number: </b>{contactInformation.AndyPhoneNumber}</div>
            <div><b>Richard Salewski's Phone Number: </b>{contactInformation.RichardPhoneNumber}</div>
            <div><b>Email: </b>{contactInformation.Email}</div>
            <div><b>Facebook: </b><a href={contactInformation.FacebookLink}>Link</a></div>
          </Typography>
        </Grid>

        {/*CONTACT US IMAGE*/}
        <Grid item md={5} className={classes.imageContainerStyling}>
          <img src="./Photos/Home/2.jpg" alt='Worker'/>
        </Grid>

      </Grid>
      </ScrollAnimation>

      {/*OUTRO*/}
      <Outro/>

      {/*HOVERING CIRCULAR BUTTON THAT ALLOWS YOU TO SCROLL TO THE TOP OF THE PAGE*/}
      <HoverScrollTop />
    </>
  )
}
