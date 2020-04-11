import React from 'react';
import { Component } from 'react';
import ColourTheme from '../ColourTheme';
import { withStyles } from '@material-ui/styles';
import 'typeface-roboto';
import $ from "jquery";
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

const styles = theme => ({
  scrollStyle: {
    position:"fixed",
    right:"30px",
    bottom:"30px",
    cursor:"pointer",
    width:"50px",
    height:"50px",
    backgroundColor: ColourTheme.FirstColour,
    textIndent:"-9999px",
    borderRadius:"60px",
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
        $("html, body").animate({ scrollTop: 0 }, 1500);
        return false;
    });;
  }

  render() {

    const { classes } = this.props;

    return(
        <>
          <div>
            <a id="scroll" href="#">
              <ExpandLessIcon style={{"color": ColourTheme.ThirdColour}} onClick={this.scrollUpFunction} className={classes.scrollStyle}/>
            </a>
          </div>
        </>
      )
  }
}

export default withStyles(styles)(HoverScrollTop);
