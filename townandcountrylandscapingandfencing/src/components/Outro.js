import React from 'react';
import { Component } from 'react';
import Fonts from '../Fonts';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import ColourTheme from '../ColourTheme';

const styles = theme => ({
  OutroContainerStyle: {
    backgroundColor: ColourTheme.OutroColour,
    justify: "space-around",
    textAlign:"center",
    height: "100%",
    width: '100%',
    margin: '50px 0px 0px 0px',
    padding: '30px'
  },
  OutroTypographyLogoStyle: {
    color: ColourTheme.InvertedColour,
    textAlign: "center",
    fontFamily: Fonts.LogoFont,
  },
  OutroTypographyMedium: {
    color: ColourTheme.InvertedColour,
    padding: '15px',
    textAlign: "center",
    fontFamily: Fonts.OutroFont,
    fontWeight: 'bold',
    fontSize: '17px'
  },
  OutroTypographySmaller: {
    color: ColourTheme.InvertedColour,
    padding: '15px',
    textAlign: "center",
    fontFamily: Fonts.OutroFont,
    fontWeight: 'bold',
    fontSize: '14px'
  },
  OutroTypographySmallerWithoutPadding: {
    color: ColourTheme.InvertedColour,
    textAlign: "center",
    fontFamily: Fonts.OutroFont,
    fontWeight: 'bold',
    fontSize: '14px'
  }
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
              <Typography variant="subtitle2" className={classes.OutroTypographyLogoStyle} style={{'fontSize':'30px'}}>TOWN AND COUNTRY</Typography>
              <Typography variant="subtitle2" className={classes.OutroTypographyLogoStyle} style={{'fontSize':'20px'}}>LANDSCAPING AND FENCING</Typography>
              <img src="OutroLogo.svg" style={{'height':'100px','width':'auto', 'margin':'20px'}}/>
              <Typography variant="subtitle2" className={classes.OutroTypographyMedium}>ESTABLISHED FOR OVER 25 YEARS</Typography>
              <Typography variant="subtitle2" className={classes.OutroTypographySmallerWithoutPadding}>
                <Link to='/home' className={classes.OutroTypographySmaller}>HOME</Link>
                <span>-</span>
                <Link to='/services' className={classes.OutroTypographySmaller}>SERVICES</Link>
                <span>-</span>
                <Link to='/portfolio' className={classes.OutroTypographySmaller}>PORTFOLIO</Link>
                <span>-</span>
                <Link to='/aboutus' className={classes.OutroTypographySmaller}>ABOUT US</Link>
              </Typography>
            </Grid>
          </Grid>
        </>
    )
  }
}

export default withStyles(styles)(Outro);
