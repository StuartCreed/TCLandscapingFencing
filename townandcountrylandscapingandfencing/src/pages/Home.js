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

const ContactUsComponentText = () => {
  return (
    <>
      <Typography variant='h2' color='primary'>
        {OTHER[0].ContactUsTitle}
      </Typography>
      <Typography variant='subtitle1' color='primary'>
        <div style={{'marginTop':'20px'}}><b>Andy Creed's Phone Number: </b>{OTHER[0].ContactUsText.AndyPhoneNumber}</div>
        <div><b>Richard Salewski's Phone Number: </b>{OTHER[0].ContactUsText.RichardPhoneNumber}</div>
        <div><b>Email: </b>{OTHER[0].ContactUsText.Email}</div>
        <div><b>Facebook: </b><a href={OTHER[0].ContactUsText.FacebookLink}>Link</a></div>
      </Typography>
    </>
  )
}

export default function Home() {
  return (
    <>
      <Navbar page={'Home'}/>
      <CarouselWrapper photos={OTHER[0].PorfoliioPagePhotos} photo1={OTHER[0].HomePageCarouselPhotos.photo1} photo2={OTHER[0].HomePageCarouselPhotos.photo2} photo3={OTHER[0].HomePageCarouselPhotos.photo3}/>

      {/*ABOUT US*/}
      <ScrollAnimation animateIn="fadeInUp" duration="0.6">
        <Grid container style={{'direction':'row', "alignItems":"center", 'justify':"space-around", 'height':'100%', 'width':'100%', 'marginTop':'40px'}}>
          <Grid item xs={1} lg={2}></Grid>
          <Grid item xs={10} lg={4}>
              <Typography variant="h2" color='primary'>
                {OTHER[0].HomePageTitle}
              </Typography>
              <Typography variant='subtitle1' style={{'marginTop':'20px'}} color='primary'>
                {OTHER[0].CompanyName}{OTHER[0].HomePageText}
              </Typography>
          </Grid>
          <Hidden lgUp>
            <Grid item xs={1}></Grid>
          </Hidden>

          <Hidden only={['xs', 'sm', 'md']}>
            <Hidden only={['xs', 'sm', 'md']}>
              <Grid item xs={1}></Grid>
            </Hidden>
            <Grid item xs={12} lg={3}>
              <img src={OTHER[0].HomePageWorkerPhoto} alt="Worker" style={{'width':'100%'}}/>
            </Grid>
          </Hidden>

          <Hidden lgUp>
          <Grid item xs={12} lg={3}>
            <img src={OTHER[0].HomePageWorkerPhoto} alt="Worker" style={{'width':'100%', 'marginTop':'40px'}}/>
          </Grid>
          </Hidden>
        </Grid>
      </ScrollAnimation>

        {/*CONTACT US*/}
      <ScrollAnimation animateIn="fadeInUp" duration="1">
        {/*DESKTOP VIEW*/}
        <Grid container style={{'direction':'row', "alignItems":"center", 'justify':"space-around", 'height':'100%', 'width':'100%', 'marginTop':'40px'}}>
          <Hidden only={['xs', 'sm', 'md']}>
            <Grid item lg={2}></Grid>
            <Grid item lg={4}>
              <img src={OTHER[0].ContactUsPhoto} alt='Worker' style={{'width':'100%'}}/>
            </Grid>
            <Grid item lg={1}></Grid>
            <Grid item lg={3}>
              <ContactUsComponentText />
            </Grid>
            <Grid item lg={2}></Grid>
          </Hidden>

          {/*MOBILE VIEW*/}
          <Hidden lgUp>

            <Grid item xs={1}></Grid>
            <Grid item xs={10}>
              <ContactUsComponentText />
            </Grid>
            <Grid item xs={1}></Grid>

            <Grid item xs={12}>
              <img src={OTHER[0].ContactUsPhoto} alt='Worker' style={{'width':'100%', 'marginTop':'40px'}}/>
            </Grid>
          </Hidden>
        </Grid>
      </ScrollAnimation>

      {/*OUTRO*/}
      <Outro/>

      {/*HOVERSCROLL*/}
      <HoverScrollTop />
    </>
  )
}
