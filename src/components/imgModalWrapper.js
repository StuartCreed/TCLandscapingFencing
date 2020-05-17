import React from 'react';
import { Component } from 'react';
import CloseIcon from '@material-ui/icons/Close';
import { withStyles } from '@material-ui/styles';
import $ from "jquery";

const styles = theme => ({
  pageMarginTop: {
    marginTop: '140px',
    width:'80%',
    [theme.breakpoints.down('md')]: {
      marginTop: '64px',
    }
  },
});

class ImgModal extends Component {

  constructor(props) {
    super(props);
      this.state = {
        modalOpen: false,
      }
  }

  handleClick = () => {
    this.setState({
      modalOpen: true
    })
  }

  handleClose = () => {
    this.setState({
      modalOpen: false
    })
  }

  render() {

    const { classes } = this.props;

    const Image = () => {
      if (this.state.modalOpen === false) {
        return (
          <img src={this.props.src} onDoubleClick={this.handleClick} style={{'width':'100%'}}/>
        )
      }
      else {
        if ($(window).width() > 768) {
          return (
            <>
              <img src={this.props.src} onDoubleClick={this.handleClick} style={{'width':'100%'}}/>
              <div style={{'position': 'fixed', 'top': '0px', 'left': '0px', 'backgroundColor':'rgba(0,0,0,0.9)', 'width':'100%', 'height':'100%', 'display':'flex', 'alignItems':'center'}}>
                <div style={{'marginLeft':'auto', 'marginRight':'auto', 'display':'flex', 'justifyContent':'center'}} className={classes.pageMarginTop}>
                  <img src={this.props.src} onDoubleClick={this.handleClose}/>
                  <CloseIcon onClick={this.handleClose} style={{'color':'white', 'fontSize':'40px', 'position':'absolute', 'alignSelf':'flex-end', 'marginTop':'50px'}}/>
                </div>
              </div>
            </>
          )
        }
        else {
          return (
            <img src={this.props.src} onDoubleClick={this.handleClick} style={{'width':'100%'}}/>
          )
        }
      }
    }

    return(
      <Image />
    );
  }
}

export default withStyles(styles)(ImgModal);
