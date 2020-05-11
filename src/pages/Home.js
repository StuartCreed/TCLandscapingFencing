import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Grid, Box } from '@material-ui/core';
import CarouselWrapper from '../components/CarouselWrapper';
import Navbar from '../components/Navbar';
import Outro from '../components/Outro.js';
import ScrollAnimation from 'react-animate-on-scroll';
import { makeStyles } from '@material-ui/core/styles';
import { contactInformation } from '../shared/contactInformation';
import ImgModal from '../components/imgModalWrapper';

const useStyles = makeStyles((theme) => ({

  /*THIS STYLING IS TO MAKE THE PAGE SHOW BELOW THE FIXED HEADER*/
  pageMarginTop: {
    marginTop: '140px',
    [theme.breakpoints.down('md')]: {
      marginTop: '64px'
    }
  },

  sectionStyling: {
    [theme.breakpoints.up('lg')]: {
      marginTop:'40px',
    },
  },

  cardOuterStyling: {
    padding: '40px 40px 40px 40px',
  },
  cardInnerTextStyling: {
    marginTop: '20px'
  },

  imageStyling: {
    width:'100%'
  }
}))

export default function Home() {
  const classes = useStyles();
  return (
    <>
      <Navbar page={'Home'}/>
      <Box className={classes.pageMarginTop}></Box>

      {/*CAROUSEL AT THE TOP OF THE PAGE*/}
      <CarouselWrapper photo1="./Photos/Home/Promotion Pictures/1.jpg" photo2="./Photos/Home/Promotion Pictures/2.jpg" photo3="./Photos/Home/Promotion Pictures/3.jpg"/>

      {/*WHAT WE DO SECTION*/}
      <Grid container className={classes.sectionStyling} alignItems="center">

        {/*WHAT WE DO CARD*/}
        <Grid item md={6} className={classes.cardOuterStyling}>
          <Typography variant="h2" color='primary'>
            What We Do
          </Typography>
          <Typography variant='subtitle1' color='primary' className={classes.cardInnerTextStyling}>
            <div>Town and Country Landscaping and Fencing are known for high quality, value for money work.</div>
            <div>From small town gardens to large country estates our services include: </div>
            <ul>
              <li>Paving</li>
              <li>Patios</li>
              <li>Drives</li>
              <li>Fencing</li>
              <li>Gates</li>
              <li>Gardening</li>
            </ul>
            <div>If you are looking for landscaping experts for Buckinghamshire and Hertfordshire, contact us now, for your NO OBLIGATION FREE QUOTATION. We would be happy to hear from you. </div>
          </Typography>
        </Grid>

        {/*WHAT WE DO IMAGE*/}
        <Grid item md={6}>
          <ImgModal src='./Photos/Home/1.jpg' className={classes.imageStyling}/>
        </Grid>

      </Grid>

      {/*CONTACT US SECTION*/}
      <Grid container direction="row-reverse" alignItems="center" className={classes.sectionStyling}>

        {/*CONTACT US CARD*/}
        <Grid item md={6} className={classes.cardOuterStyling}>
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
        <Grid item md={6}>
          <img src="./Photos/Home/2.jpg" alt='Worker' className={classes.imageStyling}/>
        </Grid>

      </Grid>

      {/*OUTRO*/}
      <Outro/>
    </>
  )
}
