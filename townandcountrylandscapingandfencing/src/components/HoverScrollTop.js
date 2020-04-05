import React from 'react';
import { Component } from 'react';
import ColourTheme from '../ColourTheme';
import Fonts from '../Fonts';
import Container from '@material-ui/core/Container';
import Hidden from '@material-ui/core/Hidden';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import 'typeface-roboto';
import { createMuiTheme } from "@material-ui/core/styles";
import $ from "jquery";
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

const styles = theme => ({
  scrollStyle: {
    position:"fixed",
    right:"30px",
    bottom:"30px",
    cursor:"pointer",
    width:"80px",
    height:"80px",
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
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });;
  }

  render() {

    const { classes } = this.props;

    return(
        <>
          <div>
            <a href="#" id="scroll">
            <ExpandLessIcon style={{"color": ColourTheme.ThirdColour}} OnClick={this.scrollUpFunction} className={classes.scrollStyle}/>
            </a>
          </div>
        </>
      )
  }
}

export default withStyles(styles)(HoverScrollTop);
