import React, { Component } from 'react';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import Skeleton from '@material-ui/lab/Skeleton';
import $ from "jquery";

export default class CarouselWrapper extends Component {

    constructor(props) {
      super(props);
         this.state = {
          slidesPerPage: null,
      };
    }

    //Changes the number of photos shown at one once in the carousel so that the photos do not appear squashed on small screens.
    slidesPerPageHandler = () => {
      if ($(window).width() < 750) {
        this.setState({slidesPerPage: 1});
      }
      else if ($(window).width() < 1200) {
        this.setState({slidesPerPage: 2});
      }
      else {
        this.setState({slidesPerPage: 3});
      }
    }

    componentWillMount() {
      this.slidesPerPageHandler();
      const numberOfPictures = 3;
      this.setState({numberOfPictures: 3})
      for (let i = 1; i < numberOfPictures + 1; i++) {
        let imageLoadedName = 'img' + i.toString() + 'loaded';
        this.setState({imageLoadedName: 'false'})
      }
    }

    render() {

      window.addEventListener('resize', this.slidesPerPageHandler);

      const CarouselComponent = () => {

        /*NEW SECTION START - IN PROGRESS*/
        const Images = () => {
          for (let i = 1; i < this.state.numberOfPictures + 1; i++) {
            let imageLoadedName = 'img' + i.toString() + 'loaded';
            let imageNumber = 'photo' + i.toString();
            console.log(imageNumber);
            if (this.state.imageLoadedName === 'false') {
              return (
                <>
                  <Skeleton animation="wave" width={"100%"} height={500} alt={"other"}/>
                  <img src={this.props.imageNumber} alt={"other"} style={{'width':'100%', 'display':'none'}} onLoad={this.setState({imageLoadedName: 'true'})}/>
                </>
              )
            }
            else {
              return (
                <img src={this.props.photo1} alt={"other"} style={{'width':'100%'}}/>
              )
            }
          }
        }
        /*NEW SECTION END*/

        const Image1 = () => {
          if (this.state.img1loaded === 'false') {
            return (
              <>
                <Skeleton animation="wave" width={"100%"} height={500} alt="1"/>
                <img src={this.props.photo1} alt="1" style={{'width':'100%', 'display':'none'}} onLoad={this.setState({img1loaded: 'true'})}/>
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
          if (this.state.img2loaded === 'false') {
            return (
              <>
                <Skeleton animation="wave" width={"100%"} height={500} alt="2"/>
                <img src={this.props.photo2} alt="2" style={{'width':'100%', 'display':'none'}} onLoad={this.setState({img2loaded: 'true'})}/>
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
          if (this.state.img3loaded === 'false') {
            return (
              <>
                <Skeleton animation="wave" width={"100%"} height={500} alt="3"/>
                <img src={this.props.photo3} alt="3" style={{'width':'100%', 'display':'none'}} onLoad={this.setState({img3loaded: 'true'})}/>
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
            slidesPerPage={this.state.slidesPerPage}
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
        <>
            <CarouselComponent />
        </>
      )

    }
}
