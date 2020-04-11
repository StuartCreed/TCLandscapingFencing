import React, { Component } from 'react';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

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
        <img src={this.props.photo1} alt='1' style={{'width':'100%'}}/>
        <img src={this.props.photo2} alt='2' style={{'width':'100%'}}/>
        <img src={this.props.photo3} alt='3' style={{'width':'100%'}}/>
      </Carousel>
    );
  }
}
