import React, { Component } from 'react';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import Skeleton from '@material-ui/lab/Skeleton';

export default class CarouselSmallScreen extends Component {

    constructor(props) {
      super(props);
         this.state = {
          imgOneloaded: 'false',
          imgTwoloaded: 'false',
          imgThreeloaded: 'false'
      };
    }

    handleimgOneloaded = () => {
      this.setState({imgOneloaded: 'true'});
    }

    handleimgTwoloaded = () => {
      this.setState({imgTwoloaded: 'true'});
    }

    handleimgThreeloaded = () => {
      this.setState({imgThreeloaded: 'true'});
    }

    render() {

      const CarouselSmallScreenComponent = () => {

        const Image1 = () => {
          if (this.state.imgOneloaded === 'false') {
            return (
              <>
                <Skeleton animation="wave" width={"100%"} height={500} alt="1"/>
                <img src={this.props.photo1} alt="1" style={{'width':'100%', 'display':'none'}} onLoad={this.handleimgOneloaded}/>
              </>
            )
          }
          else {
            return (
              <img src={this.props.photo1} alt="1" style={{'width':'100%'}}/>
            )
          }
        }

        const Image2 = () => {
          if (this.state.imgTwoloaded === 'false') {
            return (
              <>
                <Skeleton animation="wave" width={"100%"} height={500} alt="2"/>
                <img src={this.props.photo2} alt="2" style={{'width':'100%', 'display':'none'}} onLoad={this.handleimgTwoloaded}/>
              </>
            )
          }
          else {
            return (
              <img src={this.props.photo2} alt="2" style={{'width':'100%'}}/>
            )
          }
        }

        const Image3 = () => {
          if (this.state.imgThreeloaded === 'false') {
            return (
              <>
                <Skeleton animation="wave" width={"100%"} height={500} alt="3"/>
                <img src={this.props.photo3} alt="3" style={{'width':'100%', 'display':'none'}} onLoad={this.handleimgThreeloaded}/>
              </>
            )
          }
          else {
            return (
              <img src={this.props.photo3} alt="3" style={{'width':'100%'}}/>
            )
          }
        }

        return (
          <>
            <Carousel
            centered
            infinite
            keepDirectionWhenDragging
            slidesPerPage={1}
            slidesPerScroll={1}
            dots
            >
              <Image1 />
              <Image2 />
              <Image3 />
            </Carousel>
          </>
        )

      }

      return (
        <CarouselSmallScreenComponent />
      )

    }
}
