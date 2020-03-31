import React from 'react';
import { Component } from 'react';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { withStyles } from '@material-ui/styles';

const styles = theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: '10px',
      width: '25ch',
    },
  },
  margin: {
    margin: '10px'
  },
});

class Comment extends Component {

  constructor(props) {
    super(props);
      this.state = {
        comment: this.props.service
      };
  }
/*
  function showTable(str) {
    if (str == "") {
        document.getElementById("txtHint").innerHTML = "";
        return;
    } else {
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("CommentFromDataBase").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","http://www.tc-landscaping.co.uk/comments.php?q="+str,true);
        xmlhttp.send();
    }
  }
  */

  render() {

    const { classes } = this.props;

      return (
        <div style={{'margin':'30px'}}>
          <div id="CommentFromDataBase">
          </div>
          <form method="post" action="http://www.tc-landscaping.co.uk/comments.php">
            <FormControl className={classes.margin} >

              <input name="Service" id="ServiceText" value={this.state.comment} style={{"display":"none"}}/>

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
}

export default withStyles(styles)(Comment);
