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

const styles = theme => ({
  New: {
  },
  });

class Template extends Component {

  constructor(props) {
    super(props);
       this.state = {
    };
  }


  render() {

    const { classes } = this.props;

    return(
        <>
            {/*MOBILE VIEW*/}
            <Hidden lgUp>
              <div></div>
            </Hidden>

            {/*COMPUTER VIEW*/}
            <Hidden only={['md', 'sm', 'xs']}>
              <div></div>
            </Hidden>
        </>
      )
  }
}

export default withStyles(styles)(Template);
