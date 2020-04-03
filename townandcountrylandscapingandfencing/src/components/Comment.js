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
        comment: this.props.service,
        commentsFromDataBase: null
      };
      this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const axios = require('axios');
    axios.get('http://www.tc-landscaping.co.uk/extractComments.php?q=')

    .then(resp => {
        console.log(resp.data);
        document.getElementById("CommentFromDataBase").innerHTML=resp.data;
    });
  }

  handleSubmit() {
    alert('Your comment has been submitted!');
  }

  render() {

    const { classes } = this.props;
    const formId = String(this.props.id) + "Form";

      return (
        <div style={{'margin':'30px'}}>
          <div id="CommentFromDataBase">
          </div>
          <form method="post" id={formId} action="http://www.tc-landscaping.co.uk/insertComment.php" target='PageNavigateStop' onSubmit={this.handleSubmit}>
            <FormControl className={classes.margin} >

              <input name="Service" value={this.state.comment} style={{"display":"none"}}/>

              <Input
                id="FirstName"
                name="FirstName"
                placeholder="First Name"
                startAdornment={
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                }
              />

              <Input
                id="SecondName"
                name="SecondName"
                placeholder="Second Name"
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
               placeholder="Insert your comment here."
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
