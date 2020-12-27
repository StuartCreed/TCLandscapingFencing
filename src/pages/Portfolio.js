import React from 'react';
import { Grid, Box } from '@material-ui/core';
import Navbar from '../components/Navbar';
import Outro from '../components/Outro.js';
import { makeStyles } from '@material-ui/core/styles';
import {SERVICES} from '../shared/services';
import Typography from '@material-ui/core/Typography';
import CarouselWrapper from '../components/CarouselWrapper';
import Comment from '../components/Comment';

const useStyles = makeStyles((theme) => ({
  /*THIS STYLING IS TO MAKE THE PAGE SHOW BELOW THE FIXED HEADER*/
  pageMarginTop: {
    marginTop: '140px',
    [theme.breakpoints.down('md')]: {
      marginTop: '64px'
    }
  },

  /*THIS STYLING IS THERE SO THAT WHEN THE LINK TO THE PARTICULAR SERVICE WITHIN THE PORTFOLIO
  IS CLICKED ON THE SERVICES PAGE, THE PAGE IGNORES THE CURRENT HEIGHT OF THE NAVBAR*/
  idStyling: {
    position: 'absolute',
    margin:'-140px',
    [theme.breakpoints.down('md')]: {
      margin: '-64px'
    }
  }
}))

export default function Portfolio() {
  const classes = useStyles();

  return (
    <>
      <Navbar page={'Portfolio'}/>
      <Box className={classes.pageMarginTop}></Box>

      {/*PORFOLIOS SECTION - EACH ITEM IN THE GRID REFERS TO A PORTFOLIO OF A SERVICE*/}
      {
        SERVICES.map((item) => {
          return (
            <>
              <Box id={String(item.id)} className={classes.idStyling}></Box>
              <Typography variant="h2" color="primary" style={{'padding': '30px'}}>
                {item.service}
              </Typography>
              <Grid container>
                <Grid xs={12} item>
                  <CarouselWrapper PorfolioPagePhotosArray={SERVICES[item.id].PorfolioPagePhotosArray.photosArray}/>
                </Grid>
                  {/*<Grid xs={12} item>*/}
                  {/*  <Comment service={SERVICES[item.id].service} id={item.id}/>*/}
                  {/*</Grid>*/}
              </Grid>
            </>
          )
        })
      }

      {/*OUTRO*/}
      <Outro/>
  </>
  )
}
