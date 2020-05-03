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
      <CarouselWrapper photos={OTHER[0].PorfoliioPagePhotos} photo1={OTHER[0].HomePageCarouselPhotos.photo1} photo2={OTHER[0].HomePageCarouselPhotos.photo2} photo3={OTHER[0].HomePageCarouselPhotos.photo3}/>

      {/*WHAT WE DO*/}
      <Grid container style={{'direction':'row', "alignItems":"center", 'justify':"space-around", 'height':'100%', 'width':'100%', 'marginTop':'40px'}}>
        <Grid item xs={10} lg={5} style={{'margin':'auto'}}>
            <Typography variant="h2" color='primary'>
              {OTHER[0].HomePageTitle}
            </Typography>
            <Typography variant='subtitle1' style={{'marginTop':'20px'}} color='primary'>
              {OTHER[0].CompanyName}{OTHER[0].HomePageText}
            </Typography>
        </Grid>

        <Grid item xs={12} lg={4} style={{'margin':'auto'}}>
          <img src={OTHER[0].HomePageWorkerPhoto} alt="Worker" style={{'width':'100%'}}/>
        </Grid>
      </Grid>

      {/*CONTACT US*/}
      <ScrollAnimation animateIn="fadeInUp" duration="0.7">
      <Grid container style={{'direction':'row', "alignItems":"center", 'justify':"space-around", 'height':'100%', 'width':'100%', 'marginTop':'40px'}}>
          <Grid item lg={2}></Grid>
          <Grid item lg={4}>
            <img src={OTHER[0].ContactUsPhoto} alt='Worker' style={{'width':'100%'}}/>
          </Grid>
          <Grid item lg={1}></Grid>
          <Grid item lg={3}>
            <Typography variant='h2' color='primary'>
              {OTHER[0].ContactUsTitle}
            </Typography>
            <Typography variant='subtitle1' color='primary'>
              <div style={{'marginTop':'20px'}}><b>Andy Creed's Phone Number: </b>{OTHER[0].ContactUsText.AndyPhoneNumber}</div>
              <div><b>Richard Salewski's Phone Number: </b>{OTHER[0].ContactUsText.RichardPhoneNumber}</div>
              <div><b>Email: </b>{OTHER[0].ContactUsText.Email}</div>
              <div><b>Facebook: </b><a href={OTHER[0].ContactUsText.FacebookLink}>Link</a></div>
            </Typography>
          </Grid>
          <Grid item lg={2}></Grid>
      </Grid>
      </ScrollAnimation>

      {/*OUTRO*/}
      <Outro/>

      {/*HOVERSCROLL*/}
      <HoverScrollTop />
    </>
  )
}
