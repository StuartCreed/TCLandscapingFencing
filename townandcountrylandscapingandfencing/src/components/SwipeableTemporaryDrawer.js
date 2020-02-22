import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import FormatAlignLeftIcon from '@material-ui/icons/FormatAlignLeft';
import WorkIcon from '@material-ui/icons/Work';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import ColourTheme from '../ColourTheme';
import DehazeIcon from '@material-ui/icons/Dehaze';
import { Link } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import { IconButton } from '@material-ui/core';
import ImageIcon from '@material-ui/icons/Image';
import RoomIcon from '@material-ui/icons/Room';


const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function SwipeableTemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (side, open) => event => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const IconSelector = (index) => {
    let indexNumber = index.index;
    if (indexNumber === 0) {
      return(
        <HomeIcon style={{"color": ColourTheme.FirstColour}}/>
      )
    }
    if (indexNumber === 1) {
      return(
        <WorkIcon style={{"color": ColourTheme.FirstColour}} />
      )
    }
    if (indexNumber === 2) {
      return(
        <ImageIcon  style={{"color": ColourTheme.FirstColour}} />
      )
    }
    if (indexNumber === 3) {
      return(
        <RoomIcon style={{"color": ColourTheme.FirstColour}} />
      )
    }
    else {
      return(<div></div>)
    }
  }

  const sideList = side => (



    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        {
          <>
            <Link to='/home' style={{"textDecoration": "none"}}>
              <ListItem button key="Home">
                <ListItemIcon><IconSelector index={0}/></ListItemIcon>
                <ListItemText primary="Home" style={{"color":ColourTheme.FirstColour}} />
              </ListItem>
            </Link>
            <Link to='/services' style={{"textDecoration": "none"}}>
              <ListItem button key="Services">
                <ListItemIcon><IconSelector index={1}/></ListItemIcon>
                <ListItemText primary="Services" style={{"color":ColourTheme.FirstColour}} />
              </ListItem>
            </Link>
            <Link to='/portfolio' style={{"textDecoration": "none"}}>
              <ListItem button key="Portfolio">
                <ListItemIcon><IconSelector index={2}/></ListItemIcon>
                <ListItemText primary="Portfolio" style={{"color":ColourTheme.FirstColour}} />
              </ListItem>
            </Link>
            <Link to='/aboutus' style={{"textDecoration": "none"}}>
              <ListItem button key="About Us">
                <ListItemIcon><IconSelector index={3}/></ListItemIcon>
                <ListItemText primary="About Us" style={{"color":ColourTheme.FirstColour}} />
              </ListItem>
            </Link>
          </>
        }
      </List>
    </div>
  );

  const fullList = side => (
    <div
      className={classes.fullList}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        {['Home', 'Services', 'Portfolio', 'About Us'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      <IconButton onClick={toggleDrawer('left', true)}><DehazeIcon style={{"color": ColourTheme.ThirdColour}}/></IconButton>
      <SwipeableDrawer
        open={state.left}
        onClose={toggleDrawer('left', false)}
        onOpen={toggleDrawer('left', true)}
      >
        {sideList('left')}
      </SwipeableDrawer>
    </div>
  );
}
