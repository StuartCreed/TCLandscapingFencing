import React from 'react';
import { Component } from 'react';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { withStyles } from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import ColourTheme from '../ColourTheme';

const styles = theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: '10px',
      width: '25ch',
    },
    minWidth: 275,
  },
  margin: {
    margin: '10px'
  },
  CommentFieldContainerStyle: {
    margin: "auto",
    textAlign: 'center'
  },
  ButtonColour: {
    backgroundColor: ColourTheme.FirstColour,
    color: ColourTheme.ThirdColour,
    margin:'30px'
  },
});

class Comment extends Component {

  constructor(props) {
    super(props);
      this.state = {
        Comments: [],
        newCommentorFirstName: [],
        newCommentorSecondName: [],
        newComment: []
      };
  }

  getCommentsAction = () => {
    const axios = require('axios');
    const getQuery = 'http://www.tc-landscaping.co.uk/extractComments.php?Service='+String(this.props.service);
    axios.get(getQuery)
    .then(resp => {
        let commentsArrays = resp.data;
        this.setState({Comments: commentsArrays});
    });
  }

  componentDidMount() {
    this.getCommentsAction();
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const todayDateConst = new Date();
    const todayDateString = String(todayDateConst.toISOString().substr(0,10));
    let originalCommentsArray = this.state.Comments;
    let newCommentsArray = [[String(this.props.id), this.props.service, this.state.newCommentorFirstName, this.state.newCommentorSecondName, todayDateString, this.state.newComment]];
    let concatenatedComments = originalCommentsArray.concat(newCommentsArray);
    this.setState({
      Comments: concatenatedComments
    })
    /*AXIOS POST FUNCTION GOES HERE*/
  }

  myChangeHandler = (event) => {
    if ([event.target.name][0] === "Comment") {
      this.setState({newComment: event.target.value});
    }
    if ([event.target.name][0] === "FirstName") {
      this.setState({newCommentorFirstName: event.target.value});
    }
    if ([event.target.name][0] === "SecondName") {
      this.setState({newCommentorSecondName: event.target.value});
    }
  }

  /*NEED TO MAP NEW COMMENT INTO STATE BY TRACKING THE NEW COMMENT LIVE IN STATE AND THEN ON SUBMIT UPDATE THE COMMENTS ARRAY AND REMOVE THE LIVE COMMENTS. then
  WE DO AN AXIOS POST TO SEND THE DATABASE THE DATA. THIS WOULD QUICKLY UPDATE THE VIEW AND THEN UPDATE THE DATABASE.

  NEED TO RENDER THE COMMETNS FIELDS UPON MOUNTING. NEED TO INCLUDE KEYS FOR EFFICIENCY. ONLY THE COMMENTS DATA SHOULD BE KEPT IN THE STATE, NOT THE JSX

  NOW JUST NEED TO SET UP THE AXIOS POST REQUEST AND SET UP KEYS!!
  */

  render() {

    const { classes } = this.props;

    const CommentsFromDataBase = () => {
      if (this.state.Comments === "No Comments" ) {
        return (
          <div style={{"textAlign":"center", "margin":"auto"}}>There are currently no comments.</div>
        )
      }
      else {
        let commentRendered = this.state.Comments.map((comment) => {
          return (
            <>
                <Grid xs={12} md={4} item>
                <Card variant="outlined" style={{'margin':'20px'}}>
                 <CardContent>
                   <Typography style={{"fontSize":"14"}} color='primary'>
                     <b>Name:</b> {comment[2]} {comment[3]}
                   </Typography>
                   <Typography style={{"fontSize":"14"}} color='primary'>
                     <b>Date:</b> {comment[4]}
                   </Typography>
                   <Typography style={{"fontSize":"14"}} color='primary'>
                     <b>Comment:</b> {comment[5]}
                   </Typography>
                 </CardContent>
                </Card>
                </Grid>
            </>
          )
        })
        return (
          <Grid container style={{'direction':'row','justify':"space-around", "alignItems":"center", 'height':'100%', 'width':'100%', 'color':ColourTheme.FirstColour}}>
            {commentRendered}
          </Grid>
        )
      }
    }


      return (
        <div style={{'margin':'30px'}}>
          <Grid container style={{'direction':'row','justify':"space-around", "alignItems":"center", 'height':'100%', 'width':'100%'}}>
            <Grid xs={12} md={3} item className={classes.CommentFieldContainerStyle}>
              <form method="post" onSubmit={this.handleSubmit}>
                <FormControl className={classes.margin} >

                  <input name="Service" value={this.props.service} style={{"display":"none"}}/>
                  <input name="ServiceID" value={String(this.props.serviceID)} style={{"display":"none"}}/>

                  <Input
                    id="FirstName"
                    name="FirstName"
                    placeholder="First Name"
                    startAdornment={
                      <InputAdornment position="start">
                        <AccountCircle />
                      </InputAdornment>
                    }
                    onChange={this.myChangeHandler}
                    color='primary'
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
                    onChange={this.myChangeHandler}
                    color='primary'
                  />

                  <TextField
                   id="Comment"
                   label="Comment"
                   name="Comment"
                   multiline
                   rows="4"
                   onChange={this.myChangeHandler}
                   placeholder="Insert your comment here."
                   variant="outlined"
                   color='primary'
                   style={{'margin':'30px'}}
                  />


                  <Button variant="contained" className={classes.ButtonColour} type="submit">
                    Submit
                  </Button>

                </FormControl>
              </form>
            </Grid>


            <Grid xs={12} md={9} item className={classes.CommentFieldContainerStyle}>
              <Typography style={{"fontSize":"30px", 'color':ColourTheme.FirstColour}}>
                Comments
              </Typography>
              <CommentsFromDataBase/>
            </Grid>
          </Grid>
        </div>
      );
  }
}

export default withStyles(styles)(Comment);
