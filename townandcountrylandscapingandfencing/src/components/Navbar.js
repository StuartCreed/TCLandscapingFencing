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

export default function Navbar() {

  const useStyles = makeStyles({
    MenuItemTypography: {
      color: ColourTheme.ThirdColour,
      fontWeight: 'bold',
    },
    MenuItemGrid: {
      textAlign:'center',
    }
  });

  const classes = useStyles();

  return(
      <>
          <Hidden mdUp>
            <AppBar position="fixed" style={{'backgroundColor': ColourTheme.FirstColour, "boxShadow": "0 2px 4px 2px rgba(0,0,0,.25)"}}>
              <Toolbar>
                <SwipeableTemporaryDrawer />
              </Toolbar>
            </AppBar>
          </Hidden>

          <Hidden mdDown>
            <AppBar position="fixed" style={{'backgroundColor': ColourTheme.FirstColour, "boxShadow": "0 2px 4px 2px rgba(0,0,0,.25)"}}>

              <Grid container style={{'direction':'row', 'justify':"space-around", "alignItems":"center", 'height':'72px', 'width':'100%', 'backgroundColor': ColourTheme.ThirdColour, "boxShadow": "0 2px 4px 2px rgba(0,0,0,.25)"}}>
                <Grid xs={2}  ></Grid>
                <Grid xs={2}  ></Grid>
                <Grid xs={2}  ></Grid>
                <Grid xs={2}  ></Grid>
                <Grid xs={2}  ></Grid>
                <Grid xs={2}  ></Grid>
              </Grid>

              <Grid container style={{'direction':'row', 'justify':"space-around", "alignItems":"center", 'height':'72px', 'width':'100%', 'backgroundColor': ColourTheme.FirstColour, "boxShadow": "0 2px 4px 2px rgba(0,0,0,.25)"}}>
                <Grid xs={2}  ></Grid>
                <Grid xs={2} className={classes.MenuItemGrid}><Link to='/home' style={{"textDecoration": "none"}}><Button><Typography variant="subtitle1" noWrap className={classes.MenuItemTypography} >Home</Typography></Button></Link></Grid>
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
