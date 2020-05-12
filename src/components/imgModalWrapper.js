import React from 'react';
import { Component } from 'react';
import CloseIcon from '@material-ui/icons/Close';
import { Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';

const styles = theme => ({
  pageMarginTop: {
    marginTop: '140px',
    width:'80%',
    [theme.breakpoints.down('md')]: {
      marginTop: '64px',
      width:'100%'

    }
  },

  imgStyling: {
    [theme.breakpoints.up('sm')]: {
      maxWidth:'100%',
    },
    [theme.breakpoints.down('md')]: {
      width:'100%'
    }
  }
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
        console.log("modal open")
        return (
          <>
            <img src={this.props.src} onDoubleClick={this.handleClick} style={{'width':'100%'}}/>
            <div style={{'position': 'fixed', 'top': '0px', 'left': '0px', 'backgroundColor':'rgba(0,0,0,0.9)', 'width':'100%', 'height':'100%', 'display':'flex', 'alignItems':'center'}}>
              <div style={{'marginLeft':'auto', 'marginRight':'auto', 'display':'flex', 'justifyContent':'center', 'position': 'relative'}} className={classes.pageMarginTop}>
                <img src={this.props.src} onDoubleClick={this.handleClose} className={classes.imgStyling}/>
                <CloseIcon onClick={this.handleClose} style={{'color':'white', 'fontSize':'40px', 'position':'absolute', 'alignSelf':'flex-end', 'marginTop':'50px'}}/>
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

export default withStyles(styles)(ImgModal);
