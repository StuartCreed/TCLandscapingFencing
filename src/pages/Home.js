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
    padding: '0px 40px 0px 40px',
    justifyContent: 'center'
  },
  cardInnerTextStyling: {
    marginTop: '20px',
  }

}))

export default function Home() {
  const classes = useStyles();

  return (
    <>
      <Navbar page={'Home'}/>
      <Box className={classes.pageMarginTop}></Box>

      {/*CAROUSEL AT THE TOP OF THE PAGE*/}
      <CarouselWrapper PorfolioPagePhotosArray={["./Photos/Home/Promotion Pictures/1.jpg", "./Photos/Home/Promotion Pictures/2.jpg", "./Photos/Home/Promotion Pictures/3.jpg"]} />

      {/*WHAT WE DO SECTION*/}
      <Grid container direction="row-reverse" className={classes.sectionStyling} alignItems="center">

        {/*WHAT WE DO CARD*/}
        <Grid item lg={6} xs={12} className={classes.cardOuterStyling}>
          <Typography variant="h2" color='primary'>
            What We Do
          </Typography>
          <Typography variant='subtitle1' color='primary' className={classes.cardInnerTextStyling}>
            <div style={{'padding':'10px'}}>Founded over 25 years ago, we are known for high quality, value for money work. From small town gardens to large country estates our services include: </div>
            <ul>
              <li style={{'padding':'10px'}}><b>Paving</b></li>
              <li style={{'padding':'10px'}}><b>Patios</b></li>
              <li style={{'padding':'10px'}}><b>Drives</b></li>
              <li style={{'padding':'10px'}}><b>Fencing</b></li>
              <li style={{'padding':'10px'}}><b>Gates</b></li>
              <li style={{'padding':'10px'}}><b>Gardening</b></li>
            </ul>
            <div style={{'padding':'10px'}}>If you are looking for landscaping experts for Buckinghamshire and Hertfordshire, contact us now, for your <b style={{'color':'darkred'}}>No Obligation Free Quotation</b>. We would be happy to hear from you. </div>
          </Typography>
        </Grid>


        <Grid item lg={6} xs={12} style={{'textAlign':'center', 'paddingLeft': '40px'}}>
          {/*WHAT WE DO IMAGE*/}
          <div>
            <img src='./Photos/Home/1.jpg' style={{'width':'100%', 'borderRadius':'20px'}}/>
          </div>
        </Grid>

      </Grid>

      {/*CONTACT US SECTION*/}
      <Grid container alignItems="center" className={classes.sectionStyling}>

        {/*CONTACT US CARD*/}

        <Grid item lg={6} xs={12} className={classes.cardOuterStyling} >
          <Typography variant='h2' color='primary' >
            Contact Us
          </Typography>
          <Typography variant='subtitle1' color='primary' className={classes.cardInnerTextStyling}>
            <Link href={contactInformation.AndyPhoneNumberlink} style={{'textDecoration':'none'}}><div><b>Andy Creed's Number: </b>{contactInformation.AndyPhoneNumber}</div></Link>
            <Link href={contactInformation.RichardPhonelink} style={{'textDecoration':'none'}}><div><b>Richard Salewski's Number: </b>{contactInformation.RichardPhoneNumber}</div></Link>
            <Link href={contactInformation.Emaillink} style={{'textDecoration':'none'}}><div><b>Email: </b>{contactInformation.Email}</div></Link>
          </Typography>
        </Grid>

        {/*<Grid item lg={3} xs={12} style={{'textAlign':'center', 'padding':'20px'}}>*/}
        {/*  <IconButton href={contactInformation.FacebookLink}><FacebookIcon edge color="Primary" style={{'fontSize':'150px'}}/></IconButton>*/}
        {/*</Grid>*/}

        {/*CONTACT US IMAGES*/}
        <Grid item lg={6} xs={12} style={{'alignItems':'center'}}>
          <img src='./Photos/Home/2.jpg' style={{'width':'40%', 'borderRadius':'40%', 'padding':'5%'}}/>
          <img src='./Photos/Home/3.jpg' style={{'width':'40%', 'borderRadius':'40%', 'padding':'5%'}}/>
        </Grid>

      </Grid>

      {/*OUTRO*/}
      <Outro/>
    </>
  )
}
