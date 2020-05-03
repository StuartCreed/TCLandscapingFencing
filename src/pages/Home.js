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



export default function Home() {
  return (
    <>
      <Navbar page={'Home'}/>
      {/*CAROUSEL AT THE TOP OF THE PAGE*/}
      <CarouselWrapper photo1="./Photos/Home/Promotion Pictures/1.jpg" photo2="./Photos/Home/Promotion Pictures/2.jpg" photo3="./Photos/Home/Promotion Pictures/1.jpg"/>

      {/*WHAT WE DO*/}
      <Grid container style={{'direction':'row', "alignItems":"center", 'justify':"space-around", 'height':'100%', 'width':'100%', 'marginTop':'40px'}}>
        <Grid item xs={10} lg={5} style={{'margin':'auto'}}>
            <Typography variant="h2" color='primary'>
              What We Do
            </Typography>
            <Typography variant='subtitle1' style={{'marginTop':'20px'}} color='primary'>
              Town and Country Landscaping and Fencing are known for high quality, value for money design. We specialise in paving, drives, fencing, gardening and garden designs from small town gardens to large country estates. If you are looking for landscaping experts for Buckinghamshire and Hertfordshire, contact us now, for your NO OBLIGATION FREE QUOTATION. We would be happy to hear from you.
            </Typography>
        </Grid>

        <Grid item xs={12} lg={4} style={{'margin':'auto'}}>
          <img src="./Photos/Home/1.jpg" alt="Worker" style={{'width':'100%'}}/>
        </Grid>
      </Grid>

      {/*CONTACT US*/}
      <ScrollAnimation animateIn="fadeInUp" duration="0.7">
      <Grid container style={{'direction':'row', "alignItems":"center", 'justify':"space-around", 'height':'100%', 'width':'100%', 'marginTop':'40px'}}>
          <Grid item lg={4} style={{'margin':'auto'}}>
            <img src="./Photos/Home/2.jpg" alt='Worker' style={{'width':'100%'}}/>
          </Grid>
          <Grid item lg={3} style={{'margin':'auto'}}>
            <Typography variant='h2' color='primary'>
              Contact Us
            </Typography>
            <Typography variant='subtitle1' color='primary'>
              <div style={{'marginTop':'20px'}}><b>Andy Creed's Phone Number: </b>{OTHER[0].ContactUsText.AndyPhoneNumber}</div>
              <div><b>Richard Salewski's Phone Number: </b>{OTHER[0].ContactUsText.RichardPhoneNumber}</div>
              <div><b>Email: </b>{OTHER[0].ContactUsText.Email}</div>
              <div><b>Facebook: </b><a href={OTHER[0].ContactUsText.FacebookLink}>Link</a></div>
            </Typography>
          </Grid>
      </Grid>
      </ScrollAnimation>

      {/*OUTRO*/}
      <Outro/>

      {/*HOVERSCROLL*/}
      <HoverScrollTop />
    </>
  )
}
