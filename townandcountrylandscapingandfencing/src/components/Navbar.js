import React from 'react';
import { AppBar, Toolbar, IconButton, Button, Box } from '@material-ui/core';
import SwipeableTemporaryDrawer from './SwipeableTemporaryDrawer';
import ColourTheme from '../ColourTheme';
import Container from '@material-ui/core/Container';
import Hidden from '@material-ui/core/Hidden';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import 'typeface-roboto';
import { createMuiTheme } from "@material-ui/core/styles";
import { Link } from 'react-router-dom';
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';
import Icon from '@material-ui/core/Icon';
import FacebookIcon from '@material-ui/icons/Facebook';

export default function Navbar() {

  const useStyles = makeStyles({
    MenuItemTypography: {
      color: ColourTheme.FirstColour,
      fontWeight: 'bold',
      fontFamily: "'Bowlby One SC', cursive",
      letterSpacing: "1.5px"
    },
    MenuItemGrid: {
      textAlign:'center',
    },
    rightToolbar: {
      marginLeft: 'auto',
      marginRight: -12,
    },
    imageIcon: {
      height: '100%'
    },
    iconRoot: {
      textAlign: 'center'
    }
    });

  const classes = useStyles();

  return(
      <>
          {/*MOBILE VIEW*/}
          <Hidden lgUp>
            <AppBar position="fixed" style={{'backgroundColor': ColourTheme.FirstColour, "boxShadow": "0 2px 4px 2px rgba(0,0,0,.25)"}}>
              <Toolbar>
                <SwipeableTemporaryDrawer />
                <IconButton><img src="yellowLogo.svg" style={{'width':'40px','height':'40px'}} /></IconButton>
                <section className={classes.rightToolbar}>
                    <IconButton href="https://www.facebook.com/Town-and-Country-Landscaping-and-Fencing-114780373412133/?__tn__=%2Cd%2CP-R&eid=ARBAgBTOcsPMpmdLlHrCOj90rR_-869ufNIQ7Eap8fXKqJSgUv2vfNqquumP6d9qZYxrsQyOujehR59M"><FacebookIcon edge style={{"color": ColourTheme.ThirdColour}} /></IconButton>
                    <IconButton href="mailto:tcland-enquiries@hotmail.co.uk"><MailIcon edge style={{"color": ColourTheme.ThirdColour}} /></IconButton>
                    <IconButton href="tel:+07815946340"><PhoneIcon edge style={{"color": ColourTheme.ThirdColour}} /></IconButton>
                </section>
              </Toolbar>
            </AppBar>
          </Hidden>


          {/*COMPUTER VIEW*/}
          <Hidden only={['md' ,'sm', 'xs']}>
            <AppBar position="fixed" style={{'backgroundColor': ColourTheme.FirstColour, "boxShadow": "0 2px 4px 2px rgba(0,0,0,.25)"}}>

              <Toolbar style={{'backgroundColor': ColourTheme.FirstColour, "height": "90px"}}>
                <Link to='/home' style={{"textDecoration": "none"}}><IconButton><img src="yellowLogo.svg" style={{'width':'60px','height':'60px'}} /></IconButton></Link>
                <Link to='/home' style={{"textDecoration": "none"}}>
                  <Button style={{'width':'400px'}}>
                    <Grid container style={{'width':'100% ', 'direction':'column'}}>
                      <Grid xs={12}><Typography variant="h4" noWrap className={classes.MenuItemTypography} style={{'color': ColourTheme.ThirdColour, 'fontSize':'30px'}}>Town and Country</Typography></Grid>
                      <Grid xs={12}><Typography variant="h4" noWrap className={classes.MenuItemTypography} style={{'color': ColourTheme.ThirdColour, 'fontSize':'20px'}}>Landscaping and Fencing</Typography></Grid>
                    </Grid>
                  </ Button>
                </Link>
                <section className={classes.rightToolbar}>
                    <IconButton href="https://www.facebook.com/Town-and-Country-Landscaping-and-Fencing-114780373412133/?__tn__=%2Cd%2CP-R&eid=ARBAgBTOcsPMpmdLlHrCOj90rR_-869ufNIQ7Eap8fXKqJSgUv2vfNqquumP6d9qZYxrsQyOujehR59M"><FacebookIcon edge style={{"color": ColourTheme.ThirdColour}} /></IconButton>
                    <IconButton href="mailto:tcland-enquiries@hotmail.co.uk"><MailIcon edge style={{"color": ColourTheme.ThirdColour}} /></IconButton>
                    <Button href="mailto:tcland-enquiries@hotmail.co.uk" style={{"marginRight":"50px"}}><Typography variant="subtitle1" noWrap className={classes.MenuItemTypography} style={{'color': ColourTheme.ThirdColour}}>tcland-enquiries@hotmail.co.uk</Typography></Button>
                    <IconButton href="tel:+07815946340"><PhoneIcon edge style={{"color": ColourTheme.ThirdColour}} /></IconButton>
                    <Button href="tel:+07815946340"><Typography variant="subtitle1" noWrap className={classes.MenuItemTypography} style={{'color': ColourTheme.ThirdColour}}>07815946340</Typography></Button>
                </section>
              </Toolbar>

              <Grid container style={{'direction':'row', 'justify':"space-around", "alignItems":"center", 'height':'50px', 'width':'100%', 'backgroundColor': ColourTheme.ThirdColour, "boxShadow": "0 2px 4px 2px rgba(0,0,0,.25)"}}>
                <Grid xs={2}  ></Grid>
                <Grid xs={2} className={classes.MenuItemGrid}><Link to='/home' style={{"textDecoration": "none"}}><Button><Typography variant="subtitle1" noWrap className={classes.MenuItemTypography}>Home</Typography></Button></Link></Grid>
                <Grid xs={2} className={classes.MenuItemGrid}><Link to='/services' style={{"textDecoration": "none"}}><Button><Typography variant="subtitle1" noWrap className={classes.MenuItemTypography}>Services</Typography></Button></Link></Grid>
                <Grid xs={2} className={classes.MenuItemGrid}><Link to='/aboutus' style={{"textDecoration": "none"}}><Button><Typography variant="subtitle1" noWrap className={classes.MenuItemTypography}>About Us</Typography></Button></Link></Grid>
                <Grid xs={2} className={classes.MenuItemGrid}><Link to='/contactus' style={{"textDecoration": "none"}}><Button><Typography variant="subtitle1" noWrap className={classes.MenuItemTypography}>Contact Us</Typography></Button></Link></Grid>
                <Grid xs={2} ></Grid>
              </Grid>
            </AppBar>

          </Hidden>
      </>
    )
}
