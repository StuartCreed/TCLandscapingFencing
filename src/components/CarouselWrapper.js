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
    }

    render() {

      window.addEventListener('resize', this.slidesPerPageHandler);

      const CarouselComponent = () => {


        return (
          <>
            <Carousel
            centered
            infinite
            keepDirectionWhenDragging
            slidesPerPage={this.state.slidesPerPage}
            dots
            >
              {
                this.props.PorfolioPagePhotosArray.map((item) => {
                  console.log("this is the item number", item)
                  return (
                    <img src={item} alt={item} style={{'width':'100%'}}/>
                  )
                })
              }

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
