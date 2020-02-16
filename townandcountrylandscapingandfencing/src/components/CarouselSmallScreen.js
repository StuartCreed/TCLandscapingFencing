import React, { Component } from 'react';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import Box from '@material-ui/core/Box';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ColourTheme from '../ColourTheme';

export default class CarouselSmallScreen extends Component {

  render() {

    return (
      <Carousel
      centered
      infinite
      slidesPerPage={1}
      slidesPerScroll={1}
      keepDirectionWhenDragging
      dots
      >
        <img src="slide.jpg" style={{'width':'100%'}}/>
        <img src="20180406-150030.jpg" style={{'width':'100%'}}/>
        <img src="20181011-151418.jpg" style={{'width':'100%'}}/>
      </Carousel>
    );
  }
}
