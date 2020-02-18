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
  OutroContainerStyle: {
    backgroundColor: '#1d1e22',
    opacity: 0.9,
    textAlign:"center",
    justify: "space-around",
    height: "100%",
    width: '100%',
    margin: '50px 0px 0px 0px'
  },
  OutroTypographyStyle: {
    color: '#d4d4dc',
    padding: '15px',
    textAlign: "center",
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
          <Grid container className={classes.OutroContainerStyle} >
            <Grid xs={12}>
              <Typography variant="subtitle2" className={classes.OutroTypographyStyle}>Town and Country Landscaping and Fencing </Typography>
              <img src="OutroLogo.svg" style={{'height':'100px','width':'auto'}}/>
              <Typography variant="subtitle2" className={classes.OutroTypographyStyle}>Business Owners: Andrew Creed and Richard Salewski</Typography>
              <Typography variant="subtitle2" className={classes.OutroTypographyStyle}>Business Address: 35 New Road, Aston Clinton, Aylesbury, Bucks, HP225JD</Typography>
              <Typography variant="subtitle2" className={classes.OutroTypographyStyle}></Typography>
            </Grid>
          </Grid>
        </>
    )
  }
}


export default withStyles(styles)(Outro);
