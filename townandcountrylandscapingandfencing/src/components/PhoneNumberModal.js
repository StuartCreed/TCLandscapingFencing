import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import ColourTheme from '../ColourTheme';
import PhoneIcon from '@material-ui/icons/Phone';
import { IconButton, Button, Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Fonts from '../Fonts';

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

export default function PhoneNumberModal() {
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
      <IconButton onClick={handleOpen}><PhoneIcon edge="true" style={{"color": ColourTheme.ThirdColour}} /></IconButton>
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
                <Button id="transition-modal-description" href="tel:+447815946340"><PhoneIcon edge style={{"color": ColourTheme.ThirdColour, 'marginRight':'20px'}}/><Typography variant="subtitle1" noWrap className={classes.MenuItemTypography} style={{'color': ColourTheme.ThirdColour}}>Andy: 07815946340</Typography></Button>
              </Grid>
              <Grid xs={12} item>
                <Button href="tel:+447870519614"><PhoneIcon edge style={{"color": ColourTheme.ThirdColour, 'marginRight':'20px'}}/><Typography variant="subtitle1" noWrap className={classes.MenuItemTypography} style={{'color': ColourTheme.ThirdColour}}>Richard: 07870519614</Typography></Button>
              </Grid>
            </Grid>
          </div>
        </Fade>
      </Modal>
    </>
  );
}
