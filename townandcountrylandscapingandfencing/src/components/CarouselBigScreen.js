import React, { Component } from 'react';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import Skeleton from '@material-ui/lab/Skeleton';

export default class CarouselBigScreen extends Component {

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

      const CarouselBigScreenComponent = () => {

        const Image1 = () => {
          if (this.state.imgOneloaded === 'false') {
            return (
              <>
                <Skeleton animation="wave" width={"100%"} height={500} alt="1"/>
                <img src={this.props.photo1} alt="1" style={{'height':'500px', 'display':'none'}} onLoad={this.handleimgOneloaded}/>
              </>
            )
          }
          else if (this.state.imgOneloaded === 'true') {
            return (
              <img src={this.props.photo1} alt="1" style={{'height':'500px'}}/>
            )
          }
        }

        const Image2 = () => {
          if (this.state.imgTwoloaded === 'false') {
            return (
              <>
                <Skeleton animation="wave" width={"100%"} height={500} alt="2"/>
                <img src={this.props.photo2} alt="2" style={{'height':'500px', 'display':'none'}} onLoad={this.handleimgTwoloaded}/>
              </>
            )
          }
          else if (this.state.imgTwoloaded === 'true') {
            return (
              <img src={this.props.photo2} alt="2" style={{'height':'500px'}}/>
            )
          }
        }

        const Image3 = () => {
          if (this.state.imgThreeloaded === 'false') {
            return (
              <>
                <Skeleton animation="wave" width={"100%"} height={500} alt="3"/>
                <img src={this.props.photo3} alt="3" style={{'height':'500px', 'display':'none'}} onLoad={this.handleimgThreeloaded}/>
              </>
            )
          }
          else if (this.state.imgTwoloaded === 'true') {
            return (
              <img src={this.props.photo3} alt="3" style={{'height':'500px'}}/>
            )
          }
        }

        return (
          <>
            <Carousel
            centered
            infinite
            keepDirectionWhenDragging
            slidesPerPage={3}
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
        <CarouselBigScreenComponent />
      )

    }
}
