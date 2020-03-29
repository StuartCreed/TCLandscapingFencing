import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import AccountCircle from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

export default function Comment() {
  const classes = useStyles();

  return (
    <div style={{'margin':'30px'}}>
      <form method="post" action="http://www.tc-landscaping.co.uk/comments.php">
        <FormControl className={classes.margin} >

          <Input
            id="FirstName"
            name="FirstName"
            startAdornment={
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            }
          />

          <Input
            id="SecondName"
            name="SecondName"
            startAdornment={
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            }
          />

          <TextField
           id="Comment"
           label="Comment"
           name="Comment"
           multiline
           rows="4"
           defaultValue="Insert your comment here."
           variant="outlined"
           style={{'margin':'30px'}}
          />


          <Button variant="contained" color="primary" type="submit" style={{'margin':'30px'}}>
            Submit
          </Button>

        </FormControl>


      </form>
    </div>
  );
}
