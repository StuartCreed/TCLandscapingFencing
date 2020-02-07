import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import ColourTheme from '../ColourTheme';
import PhoneIcon from '@material-ui/icons/Phone';
import { IconButton, Button, Box, Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import FacebookIcon from '@material-ui/icons/Facebook';
import Fonts from '../Fonts';

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: ColourTheme.FirstColour,
    border: '5px solid',
    borderColor: ColourTheme.ThirdColour,
    padding: theme.spacing(2, 4, 3),
    borderRadius: '10px'
  },
  MenuItemTypography: {
    color: ColourTheme.ThirdColour,
    fontWeight: 'normal',
    fontFamily: Fonts.BoldFont,
    letterSpacing: "0.5px"
  },
}));

export default function FacebookLinkModal() {
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
      <IconButton onClick={handleOpen}><FacebookIcon edge style={{"color": ColourTheme.ThirdColour}} /></IconButton>
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
              <Grid xs={12}>
                <Button id="transition-modal-description" href="Town-and-Country-Landscaping-and-Fencing-114780373412133/?__tn__=%2Cd%2CP-R&eid=ARBAgBTOcsPMpmdLlHrCOj90rR_-869ufNIQ7Eap8fXKqJSgUv2vfNqquumP6d9qZYxrsQyOujehR59M"><FacebookIcon edge style={{"color": ColourTheme.ThirdColour}} /><Typography variant="subtitle1" noWrap className={classes.MenuItemTypography} style={{'color': ColourTheme.ThirdColour,'marginLeft':'10px'}}>Andy Creed's Work Facebook</Typography></Button>
              </Grid>
              <Grid xs={12}>
                <Button href="https://www.facebook.com/townandcountrywendover/"><FacebookIcon edge style={{"color": ColourTheme.ThirdColour}} /><Typography variant="subtitle1" noWrap className={classes.MenuItemTypography} style={{'color': ColourTheme.ThirdColour,'marginLeft':'10px'}}>Richard Salewski's Work Facebook</Typography></Button>
              </Grid>
            </Grid>
          </div>
        </Fade>
      </Modal>
    </>
  );
}
