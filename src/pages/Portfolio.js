import React from 'react';
import { Grid } from '@material-ui/core';
import Navbar from '../components/Navbar';
import Outro from '../components/Outro.js';
import { makeStyles } from '@material-ui/core/styles';
import {SERVICES} from '../shared/services';
import Typography from '@material-ui/core/Typography';
import CarouselWrapper from '../components/CarouselWrapper';
import Comment from '../components/Comment';

const useStyles = makeStyles((theme) => ({
  sectionStyling: {
    marginTop: '140px',
    [theme.breakpoints.down('md')]: {
      marginTop: '64px'
    }
  },
}))

export default function Portfolio() {
  const classes = useStyles();

  const SlideWithJSON = SERVICES.map((item) => {
    return (
      <>
          <div id={String(item.id)}></div>
          <Typography variant="h2" color="primary" style={{'padding': '30px'}}>
            {item.service}
          </Typography>

          <Grid container style={{'direction':'row','justify':"space-around", "alignItems":"center", 'height':'100%', 'width':'100%', 'paddingLeft':'0px', 'paddingRight':'0px'}}>
            <Grid xs={12} item>
              <CarouselWrapper photos={SERVICES[item.id].PorfoliioPagePhotos} photo1={SERVICES[item.id].PorfoliioPagePhotos.photo1} photo2={SERVICES[item.id].PorfoliioPagePhotos.photo2} photo3={SERVICES[item.id].PorfoliioPagePhotos.photo3} />
            </Grid>
            <Grid xs={12} item>
              <Comment service={SERVICES[item.id].service} id={item.id} mobile='false'/>
            </Grid>
          </Grid>
      </>
    )
  })

  return (
    <>
      <Navbar page={'Portfolio'}/>

      {/*PORFOLIO SECTION - EACH ITEM IN THE GRID REFERS TO A SERVICE*/}
      <Grid container direction="row" justify="flex-start" className={classes.sectionStyling}>
        {SlideWithJSON}
      </Grid>

      {/*OUTRO*/}
      <Outro/>
  </>
  )
}
