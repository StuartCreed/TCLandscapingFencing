import React, { Component } from 'react';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

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
          <img src={this.props.photo1} alt="1" style={{'height':'500px'}}/>
          <img src={this.props.photo2} alt="2" style={{'height':'500px'}}/>
          <img src={this.props.photo3} alt="3" style={{'height':'500px'}}/>
        </Carousel>
      );
    }
}
