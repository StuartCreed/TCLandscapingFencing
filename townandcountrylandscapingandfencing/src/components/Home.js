import React from 'react';
import { Component } from 'react';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';
import ColourTheme from '../ColourTheme';
import { Grid } from '@material-ui/core';
import CarouselBigScreen from './CarouselBigScreen';
import CarouselSmallScreen from './CarouselSmallScreen';
import Navbar from './Navbar';
import { withStyles } from '@material-ui/styles';
import Outro from './Outro.js';
import {OTHER} from '../OtherJSON';
import HoverScrollTop from './HoverScrollTop';
import ScrollAnimation from 'react-animate-on-scroll';
import { styled } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';

const AboutUsTypography = styled(Typography)({
  color: ColourTheme.FirstColour,
});

const useStyles = makeStyles((theme) => ({
  CarouselBigGridOuter: {
    direction:'row',
    marginTop:'140px',
    justify:"space-around",
    alignItems:"center",
    height:'100%',
    width:'100%',
    paddingLeft:'0px',
    paddingRight:'0px'
  },
  [theme.breakpoints.down('sm')]: {
    marginTop:'64px',
},
}));

const ContactUsComponentText = () => {
  return (
    <>
      <AboutUsTypography variant="h2" >
        {OTHER[0].ContactUsTitle}
      </AboutUsTypography>
      <AboutUsTypography variant='subtitle1' style={{'marginTop':'20px'}}>
        <b>Andy Creed's Phone Number: </b>{OTHER[0].ContactUsText.AndyPhoneNumber}
      </AboutUsTypography>
      <AboutUsTypography variant='subtitle1'>
        <b>Richard Salewski's Phone Number: </b>{OTHER[0].ContactUsText.RichardPhoneNumber}
      </AboutUsTypography>
      <AboutUsTypography variant='subtitle1'>
        <b>Email: </b>{OTHER[0].ContactUsText.Email}
      </AboutUsTypography>
      <AboutUsTypography variant='subtitle1'>
        <b>Facebook: </b><a href={OTHER[0].ContactUsText.FacebookLink}>Link</a>
      </AboutUsTypography>
    </>
  )
}

export default function Home() {
  const classes = useStyles();
  return (
    <>
    {/*MOBILE VIEW CAROUSEL*/}
    <Navbar page={'Home'}/>
    <Hidden lgUp>
      <Grid container style={{'direction':'row', 'marginTop':'64px','justify':"space-around", "alignItems":"center", 'height':'100%', 'width':'100%'}}>
        <Grid xs={12} item>
          <CarouselSmallScreen photos={OTHER[0].PorfoliioPagePhotos} photo1={OTHER[0].HomePageCarouselPhotos.photo1} photo2={OTHER[0].HomePageCarouselPhotos.photo2} photo3={OTHER[0].HomePageCarouselPhotos.photo3}/>
        </Grid>
      </Grid>
    </Hidden>

    {/*DESKTOP VIEW CAROUSEL*/}
    <Hidden only={['md' ,'sm', 'xs']}>
      <Grid className={classes.CarouselBigGridOuter} container>
        <Grid xs={12} item>
          <CarouselBigScreen photos={OTHER[0].PorfoliioPagePhotos} photo1={OTHER[0].HomePageCarouselPhotos.photo1} photo2={OTHER[0].HomePageCarouselPhotos.photo2} photo3={OTHER[0].HomePageCarouselPhotos.photo3}/>
        </Grid>
      </Grid>
    </Hidden>

    {/*ABOUT US*/}
    <ScrollAnimation animateIn="fadeInUp" duration="0.6">
      <Grid container style={{'direction':'row', "alignItems":"center", 'justify':"space-around", 'height':'100%', 'width':'100%', 'marginTop':'40px'}}>
        <Grid item xs={1} lg={2}></Grid>
        <Grid item xs={10} lg={4}>
            <AboutUsTypography variant="h2">
              {OTHER[0].HomePageTitle}
            </AboutUsTypography>
            <AboutUsTypography variant='subtitle1' style={{'marginTop':'20px'}}>
              {OTHER[0].CompanyName}{OTHER[0].HomePageText}
            </AboutUsTypography>
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
