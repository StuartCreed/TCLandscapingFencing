import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import ColourTheme from '../ColourTheme';
import { IconButton, Button, Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Fonts from '../Fonts';
import MailIcon from '@material-ui/icons/Mail';

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: ColourTheme.FirstColour,
    border: '3px solid',
    borderColor: ColourTheme.ThirdColour,
    padding: "20px",
    borderRadius: '10px'
  },
  MenuItemTypography: {
    color: ColourTheme.ThirdColour,
    fontWeight: 'normal',
    fontFamily: Fonts.BoldFont,
    letterSpacing: "0.5px"
  },
}));

export default function MailLinkModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <IconButton onClick={handleOpen}><MailIcon edge="true" style={{"color": ColourTheme.ThirdColour}} /></IconButton>
      <Modal
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <Grid container style={{'textAlign': 'center'}}>
              <Grid xs={12} item>
                <Button href="mailto:tcland-enquiries@hotmail.co.uk"><MailIcon edge style={{"color": ColourTheme.ThirdColour, 'marginRight':'20px'}} /><Typography variant="subtitle1" noWrap className={classes.MenuItemTypography}>tcland-enquiries@hotmail.co.uk</Typography></Button>
              </Grid>
            </Grid>
          </div>
        </Fade>
      </Modal>
    </>
  );
}
