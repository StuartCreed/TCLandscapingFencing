import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SaveIcon from '@material-ui/icons/Save';
import EditIcon from '@material-ui/icons/Edit';

const styles = {
  // This group of buttons will be aligned to the right
  rightToolbar: {
    marginLeft: 'auto',
    marginRight: -12,
  },
  menuButton: {
    marginRight: 16,
    marginLeft: -12,
  },
};

const Demo = ({ classes }) => (
  <AppBar position="static">
    <Toolbar>
      <IconButton className={classes.menuButton} aria-label="Menu" color="inherit">
        <MenuIcon />
      </IconButton>
      <Typography variant="title" color="inherit">Title</Typography>

      <section className={classes.rightToolbar}>
        <IconButton color="inherit" aria-label="Edit">
          <EditIcon />
        </IconButton>
        <IconButton color="inherit" aria-label="Save">
          <SaveIcon />
        </IconButton>
        <IconButton color="inherit" aria-label="More Options">
          <MoreVertIcon />
        </IconButton>
      </section>
    </Toolbar>
  </AppBar>
);

Demo.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Demo);
