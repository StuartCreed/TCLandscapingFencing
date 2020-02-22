import React, { Component } from 'react';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import Box from '@material-ui/core/Box';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ColourTheme from '../ColourTheme';

export default class CarouselSmallScreen extends Component {

  constructor(props) {
    super(props);
       this.state = {
    };
  }

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
        <img src={this.props.photo1} style={{'width':'100%'}}/>
        <img src={this.props.photo2} style={{'width':'100%'}}/>
        <img src={this.props.photo3} style={{'width':'100%'}}/>
      </Carousel>
    );
  }
}
