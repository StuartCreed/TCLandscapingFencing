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
  OutroStyle: {
    fontFamily: Fonts.BoldFont,
    color: '#d4d4dc',
    fontSize: '15px',
    padding: '20px',
    textAlign: "center",
    backgroundColor: '#1d1e22',
    opacity: 0.9,
  },
  });

class Outro extends Component {

  constructor(props) {
    super(props);
       this.state = {
    };
  }

  render() {

    const { classes } = this.props;

    return(
        <>
          <Grid container style={{'direction':'row', "alignItems":"center", 'justify':"space-around", 'height':'100%', 'width':'100%', 'marginTop':'50px'}} >
            <Grid xs={12}>
              <Typography className={classes.OutroStyle}>
                <div>Town and Country Landscaping and Fencing </div>
                <div>OUTRO</div>
                <div>OUTRO</div>
                <div>OUTRO</div>
                <div>OUTRO</div>
                <div>OUTRO</div>
                <div>OUTRO</div>
                <div>OUTRO</div>
                <div>OUTRO</div>
                <div>OUTRO</div>
                <div>OUTRO</div>
              </Typography>
            </Grid>
          </Grid>
        </>
    )
  }
}


export default withStyles(styles)(Outro);
