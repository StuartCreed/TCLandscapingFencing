import React, { Component } from 'react';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import Skeleton from '@material-ui/lab/Skeleton';

export default class CarouselBigScreen extends Component {

    constructor(props) {
      super(props);
         this.state = {
          loaded: 'false',
      };
    }

    handleLoad = () => {
      this.setState({loaded: 'true'});
    }


    render() {

      const CarouselBigScreenComponent = () => {
        const Images = () => {
          return (
            <>
              <img src={this.props.photo1} alt="1" style={{'height':'500px'}}/>
              <img src={this.props.photo2} alt="2" style={{'height':'500px'}}/>
              <img src={this.props.photo3} alt="3" style={{'height':'500px'}} onLoad={this.handleLoad}/>
            </>
          )
        }
        if (this.state.loaded === 'false') {
          return (
            <>
              <Skeleton animation="wave" width={"auto"} height={500} />

              <Carousel
              centered
              infinite
              keepDirectionWhenDragging
              slidesPerPage={3}
              dots
              style={{'display': 'none'}}
              >
                <Images />
              </Carousel>
            </>
          )
        }
        else if (this.state.loaded === 'true') {
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
          )
        }
      }

      return (
        <CarouselBigScreenComponent />
      )

    }
}
