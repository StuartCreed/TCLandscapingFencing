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

const SlideWithJSON = this.props.photos.map((item) => {
  return(
    <>
      <img src={item} style={{'height':'500px'}}/>
    </>
  )
})

*/
export default class CarouselBigScreen extends Component {

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
        keepDirectionWhenDragging
        slidesPerPage={3}
        dots
        >
          <img src={this.props.photo1} style={{'height':'500px'}}/>
          <img src={this.props.photo2} style={{'height':'500px'}}/>
          <img src={this.props.photo3} style={{'height':'500px'}}/>
        </Carousel>
      );
    }
}
