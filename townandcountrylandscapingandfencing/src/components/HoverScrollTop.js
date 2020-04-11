import React from 'react';
import { Component } from 'react';
import ColourTheme from '../ColourTheme';
import { withStyles } from '@material-ui/styles';
import 'typeface-roboto';
import $ from "jquery";
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

const styles = theme => ({
    scrollStyleOuter: {
      position:"fixed",
      right:"30px",
      bottom:"30px",
      cursor:"pointer",
      width:"60px",
      height:"60px",
      backgroundColor: ColourTheme.SecondColour,
      borderRadius:"60px",
      textAlign: 'center'
    },
    scrollStyle: {
      width:"50px",
      height:"50px",
      backgroundColor: ColourTheme.FirstColour,
      borderRadius:"60px",
      color: ColourTheme.ThirdColour,
      margin: '5px auto 0px auto'
    },
  });

class HoverScrollTop extends Component {

  constructor(props) {
    super(props);
       this.state = {
    };
    this.scrollUpFunction = this.scrollUpFunction.bind(this);
  }

  scrollUpFunction() {
    $('#scroll').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 1200);
        return false;
    });;
  }

  render() {

    const { classes } = this.props;

    return(
        <>
          <a id="scroll" href="#">
            <div className={classes.scrollStyleOuter}>
              <ExpandLessIcon onClick={this.scrollUpFunction} className={classes.scrollStyle}/>
            </div>
          </a>
        </>
      )
  }
}

export default withStyles(styles)(HoverScrollTop);
