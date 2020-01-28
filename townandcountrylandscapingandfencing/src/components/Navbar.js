import React from 'react';
import { AppBar, Toolbar, IconButton, Button } from '@material-ui/core';
import SwipeableTemporaryDrawer from './SwipeableTemporaryDrawer';
import ColourTheme from '../ColourTheme';
import Container from '@material-ui/core/Container';
import Hidden from '@material-ui/core/Hidden';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import 'typeface-roboto';
import { createMuiTheme } from "@material-ui/core/styles";

export default function NavBar() {

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
            <Toolbar style={{'backgroundColor': ColourTheme.ThirdColour}}>
              <Grid container spacing={3}>
              </Grid>
            </Toolbar>

            <Grid container spacing={3} style={{'direction':'row', 'justify':"space-around", "alignItems":"center", 'height':'72px','backgroundColor': ColourTheme.FirstColour, "boxShadow": "0 2px 4px 2px rgba(0,0,0,.25)"}}>
              <Grid xs={2} ></Grid>
              <Grid xs={2} className={classes.MenuItemGrid}><Button><Typography variant="subtitle1" noWrap className={classes.MenuItemTypography}>Home</Typography></Button></Grid>
              <Grid xs={2} className={classes.MenuItemGrid}><Button><Typography variant="subtitle1" noWrap className={classes.MenuItemTypography}>Services</Typography></Button></Grid>
              <Grid xs={2} className={classes.MenuItemGrid}><Button><Typography variant="subtitle1" noWrap className={classes.MenuItemTypography}>About Us</Typography></Button></Grid>
              <Grid xs={2} className={classes.MenuItemGrid}><Button><Typography variant="subtitle1" noWrap className={classes.MenuItemTypography}>Contact Us</Typography></Button></Grid>
              <Grid xs={2} ></Grid>
            </Grid>
          </Hidden>
      </>
    )
}
