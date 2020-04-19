import React, { Component } from 'react';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import Skeleton from '@material-ui/lab/Skeleton';

export default class CarouselSmallScreen extends Component {

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

      const CarouselSmallScreenComponent = () => {
        if (this.state.loaded === 'false') {
          return (
            <>
              <Skeleton animation="wave" width={"auto"} height={500} />

              <Carousel
              centered
              infinite
              keepDirectionWhenDragging
              slidesPerPage={1}
              slidesPerScroll={1}
              dots
              style={{'display': 'none'}}
              >
                <img src={this.props.photo1} alt="1" style={{'width':'100%'}} onLoad={this.handleLoad}/>
                <img src={this.props.photo2} alt="2" style={{'width':'100%'}}/>
                <img src={this.props.photo3} alt="3" style={{'width':'100%'}}/>
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
            slidesPerPage={1}
            slidesPerScroll={1}
            dots
            >
              <img src={this.props.photo1} alt="1" style={{'width':'100%'}}/>
              <img src={this.props.photo2} alt="2" style={{'width':'100%'}}/>
              <img src={this.props.photo3} alt="3" style={{'width':'100%'}}/>
            </Carousel>
          )
        }
      }

      return (
        <CarouselSmallScreenComponent />
      )

    }
}
