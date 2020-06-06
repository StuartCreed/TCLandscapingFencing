import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Grid, Box, IconButton, Link } from '@material-ui/core';
import CarouselWrapper from '../components/CarouselWrapper';
import Navbar from '../components/Navbar';
import Outro from '../components/Outro.js';
import { makeStyles } from '@material-ui/core/styles';
import { contactInformation } from '../shared/contactInformation';
import ImgModal from '../components/imgModalWrapper';
import FacebookIcon from '@material-ui/icons/Facebook';

const useStyles = makeStyles((theme) => ({

  /*THIS STYLING IS TO MAKE THE PAGE SHOW BELOW THE FIXED HEADER*/
  pageMarginTop: {
    marginTop: '140px',
    [theme.breakpoints.down('md')]: {
      marginTop: '75px'
    }
  },

  /*FOR LARGE SCREENS THIS PUTS AN EXTRA SPACE BETWEEN THE TOP CAROUSEL AND THE PAGE CONTENT*/
  sectionStyling: {
    [theme.breakpoints.up('lg')]: {
      marginTop:'40px',
    },
  },

  /*THIS STYLES THE "CARD" SECTIONS THAT HAVE A HEADER AND INNER TEXT*/
  cardOuterStyling: {
    padding: '40px 40px 40px 40px',
  },
  cardInnerTextStyling: {
    marginTop: '20px'
  },

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
        <Grid item lg={6} xs={12} className={classes.cardOuterStyling} style={{'textAlign':'center'}}>
          <Typography variant="h2" color='primary'>
            What We Do
          </Typography>
          <Typography variant='subtitle1' color='primary' className={classes.cardInnerTextStyling}>
            <div style={{'padding':'10px'}}>Founded over 25 years ago, we are known for high quality, value for money work.</div>
            <div style={{'padding':'10px'}}>From small town gardens to large country estates our services include: </div>
            <div>
              <div style={{'padding':'10px'}}><b>Paving</b></div>
              <div style={{'padding':'10px'}}><b>Patios</b></div>
              <div style={{'padding':'10px'}}><b>Drives</b></div>
              <div style={{'padding':'10px'}}><b>Fencing</b></div>
              <div style={{'padding':'10px'}}><b>Gates</b></div>
              <div style={{'padding':'10px'}}><b>Gardening</b></div>
            </div>
            <div style={{'padding':'10px'}}>If you are looking for landscaping experts for Buckinghamshire and Hertfordshire, contact us now, for your NO OBLIGATION FREE QUOTATION. We would be happy to hear from you. </div>
          </Typography>
        </Grid>

        {/*WHAT WE DO IMAGE*/}
        <Grid item lg={6} xs={12} style={{'padding':'40px'}}>
          <img src='./Photos/Home/1.jpg' style={{'width':'100%', 'borderRadius':'20px'}}/>
        </Grid>

      </Grid>

      {/*CONTACT US SECTION*/}
      <Grid container direction="row-reverse" alignItems="center" className={classes.sectionStyling}>

        {/*CONTACT US CARD*/}
        <Grid item lg={3} xs={12} style={{'textAlign':'center', 'padding':'20px'}}>
          <IconButton href={contactInformation.FacebookLink}><FacebookIcon edge color="Primary" style={{'fontSize':'150px'}}/></IconButton>
        </Grid>

        <Grid item lg={3} xs={12} className={classes.cardOuterStyling} style={{'textAlign':'center'}}>
          <Typography variant='h2' color='primary' >
            Contact Us
          </Typography>
          <Typography variant='subtitle1' color='primary' className={classes.cardInnerTextStyling}>
            <Link href={contactInformation.AndyPhoneNumberlink}><div><b>Andy Creed's Phone Number: </b>{contactInformation.AndyPhoneNumber}</div></Link>
            <Link href={contactInformation.RichardPhonelink}><div><b>Richard Salewski's Phone Number: </b>{contactInformation.RichardPhoneNumber}</div></Link>
            <Link href={contactInformation.Emaillink}><div><b>Email: </b>{contactInformation.Email}</div></Link>
          </Typography>
        </Grid>

        {/*CONTACT US IMAGE*/}
        <Grid item lg={6} xs={12}>
          <img src='./Photos/Home/2.jpg' style={{'width':'40%', 'borderRadius':'40%', 'padding':'5%'}}/>
          <img src='./Photos/Home/3.jpg' style={{'width':'40%', 'borderRadius':'40%', 'padding':'5%'}}/>
        </Grid>

      </Grid>

      {/*OUTRO*/}
      <Outro/>
    </>
  )
}
