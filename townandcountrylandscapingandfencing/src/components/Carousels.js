import React from 'react';
import { Component } from 'react';
import ColourTheme from '../ColourTheme';
import Fonts from '../Fonts';
import Hidden from '@material-ui/core/Hidden';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import 'typeface-roboto';
import {SERVICES} from '../ServicesJSON';
import CarouselBigScreen from './CarouselBigScreen';
import CarouselSmallScreen from './CarouselSmallScreen';
import Comment from './Comment';

const styles = theme => ({
  PortfolioTitlesTypography: {
    fontFamily: Fonts.BoldFont,
    color: ColourTheme.FirstColour,
    textAlign: 'left',
    padding: '30px'
  },
  });

class Carousels extends Component {

  constructor(props) {
    super(props);
       this.state = {
    };
  }


  render() {

    const { classes } = this.props;

    const SlideWithJSON = SERVICES.map((item) => {
      return (
        <>
          {/*MOBILE VIEW*/}
          <Hidden lgUp>
            <div id={this.props.mobile === 'true' ? String(item.id).concat('mob'): String(item.id)}></div>
            <Typography variant="h2" className={classes.PortfolioTitlesTypography}>
              {item.service}
            </Typography>

            <Grid container style={{'direction':'row','justify':"space-around", "alignItems":"center", 'height':'100%', 'width':'100%'}}>
              <Grid xs={12}>
                <CarouselSmallScreen photos={SERVICES[item.id].PorfoliioPagePhotos} photo1={SERVICES[item.id].PorfoliioPagePhotos.photo1} photo2={SERVICES[item.id].PorfoliioPagePhotos.photo2} photo3={SERVICES[item.id].PorfoliioPagePhotos.photo3} />
              </Grid>
              <Grid xs={12}>
                <Comment service={SERVICES[item.id].service} id={item.id}/>
              </Grid>
            </Grid>
          </Hidden>

          {/*COMPUTER VIEW*/}
          <Hidden only={['md' ,'sm', 'xs']}>
            <div id={this.props.mobile === 'true' ? String(item.id).concat('mob'): String(item.id)}></div>
            <Typography variant="h2" className={classes.PortfolioTitlesTypography} >
              {item.service}
            </Typography>

            <Grid container style={{'direction':'row','justify':"space-around", "alignItems":"center", 'height':'100%', 'width':'100%', 'paddingLeft':'0px', 'paddingRight':'0px'}}>
              <Grid xs={12} >
                <CarouselBigScreen photos={SERVICES[item.id].PorfoliioPagePhotos} photo1={SERVICES[item.id].PorfoliioPagePhotos.photo1} photo2={SERVICES[item.id].PorfoliioPagePhotos.photo2} photo3={SERVICES[item.id].PorfoliioPagePhotos.photo3} />
              </Grid>
              <Grid xs={12}>
                <Comment service={SERVICES[item.id].service} id={item.id}/>
              </Grid>
            </Grid>
          </Hidden>
        </>
      )
    })

    return(
        <>
          {SlideWithJSON}
        </>
      )
  }
}

export default withStyles(styles)(Carousels);
