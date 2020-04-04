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
        service: this.props.service,
        formId: String(this.props.id) + "Form",
        commentsInsertId: String(this.props.id) + "CommentInsert",
        commentsFromDataBase: null
      };
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleSubmit = this.getComments.bind(this);
  }

  getComments() {
    const axios = require('axios');
    const getQuery = 'http://www.tc-landscaping.co.uk/extractComments.php?Service='+String(this.state.service);
    console.log(getQuery, "THIS IS THE GET QUERY")
    axios.get(getQuery)
    .then(resp => {
        console.log(resp.data);
        document.getElementById(this.state.commentsInsertId).innerHTML=resp.data;
        this.setState({commentsInsertId: resp.data});
    });
  }

  /*ADD KEYS!*/

  componentDidMount() {
    this.getComments();
  }

  componentDidUpdate() {
    this.getComments();
  }

  handleSubmit(event) {
    document.getElementById(this.state.formId).submit();
    this.getComments();
    console.log('Your comment has been submitted!');
  }

  render() {

    const { classes } = this.props;

      return (
        <div style={{'margin':'30px'}}>
          <div id={this.state.commentsInsertId}>
          </div>
          <form method="post" id={this.state.formId} action="http://www.tc-landscaping.co.uk/insertComment.php" target='PageNavigateStop' onSubmit={this.handleSubmit}>
            <FormControl className={classes.margin} >

              <input name="Service" value={this.state.service} style={{"display":"none"}}/>

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
