import React, { Component } from 'react';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import Box from '@material-ui/core/Box';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ColourTheme from '../ColourTheme';

export default class CarouselBigScreen extends Component {
  render() {
    return (
      <Carousel
      centered
      infinite
      arrows
      keepDirectionWhenDragging
      slidesPerPage={2.5}
      arrowLeft={<ArrowBackIcon name="angle-double-left" style={{'backgroundColor': ColourTheme.FirstColour, 'color':ColourTheme.ThirdColour, 'fontSize':'50px'}} />}
      arrowRight={<ArrowForwardIcon name="angle-double-right" style={{'backgroundColor': ColourTheme.FirstColour, 'color':ColourTheme.ThirdColour, 'fontSize':'50px'}} />}
      addArrowClickHandler
      dots
      >
        <img src="slide.jpg" style={{'height':'500px'}}/>
        <img src="20180406-150030.jpg" style={{'height':'500px'}}/>
        <img src="20181011-151418.jpg" style={{'height':'500px'}}/>
      </Carousel>
    );
  }
}
