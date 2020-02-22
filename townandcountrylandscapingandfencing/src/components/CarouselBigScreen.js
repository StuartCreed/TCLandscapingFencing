import React, { Component } from 'react';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import Box from '@material-ui/core/Box';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ColourTheme from '../ColourTheme';

/*
arrowLeft={<ArrowBackIcon name="angle-double-left" style={{'backgroundColor': ColourTheme.FirstColour, 'color':ColourTheme.ThirdColour, 'fontSize':'50px'}} />}
arrowRight={<ArrowForwardIcon name="angle-double-right" style={{'backgroundColor': ColourTheme.FirstColour, 'color':ColourTheme.ThirdColour, 'fontSize':'50px'}} />}
addArrowClickHandler
*/
export default function CarouselBigScreen(props) {
    console.log(props,"CAROUSELPROPS")

    return (
      <Carousel
      centered
      infinite
      keepDirectionWhenDragging
      slidesPerPage={3}
      dots
      >
        <img src={props.photo1} style={{'height':'500px'}}/>
        <img src={props.photo2} style={{'height':'500px'}}/>
        <img src={props.photo3} style={{'height':'500px'}}/>
      </Carousel>
    );
}
