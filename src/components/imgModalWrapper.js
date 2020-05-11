import React from 'react';
import { Component } from 'react';
import CloseIcon from '@material-ui/icons/Close';

class ImgModal extends Component {

  constructor(props) {
    super(props);
      this.state = {
        modalOpen: false,
      }
  }

  handleClick = () => {
    console.log("IMG has been double clicked")
    this.setState({
      modalOpen: true
    })
  }

  handleClose = () => {
    console.log("IMG has been attempted to be closed")
    this.setState({
      modalOpen: false
    })
  }


  render() {

    const Image = () => {
      if (this.state.modalOpen === false) {
        console.log("modal closed")
        return (
          <img src={this.props.src} onDoubleClick={this.handleClick} style={{'width':'100%'}}/>
        )
      }
      else {
        console.log("modal open")
        return (
          <>
            <img src={this.props.src} onDoubleClick={this.handleClick} style={{'width':'100%'}}/>
            <div style={{'position': 'fixed', 'top': '0px', 'left': '0px', 'backgroundColor':'rgba(0,0,0,0.9)', 'width':'100%', 'height':'100%'}}>
              <div style={{'margin':'auto', 'width':'80%'}}>
                <img src={this.props.src} onDoubleClick={this.handleClose} style={{'width':'100%'}}/>
                <CloseIcon onClick={this.handleClose} style={{'float': 'right', 'color':'#aaaaaa'}}/>
              </div>
            </div>
          </>
        )
      }
    }

    return(
      <Image />
    );
  }
}

export default ImgModal
