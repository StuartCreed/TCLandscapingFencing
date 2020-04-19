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
import $ from "jquery";
import Switch from '@material-ui/core/Switch';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: '10px',
      width: '25ch',
    },
    minWidth: 275,
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
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
        Comments: [""],
        newCommentorFirstName: [""],
        newCommentorSecondName: [""],
        newComment: [""],
        greaterThanThreeComments: null,
        showAllComments: false,
        lengthOfCommentsArrayStraightFromDatabaseBeforeTruncation: null,
        showCommentForm: 'false'
      };
  }

  getCommentsAction = () => {
    const axios = require('axios');
    const getQuery = 'http://www.tc-landscaping.co.uk/extractComments.php?Service='+String(this.props.service);
    axios.get(getQuery)
    .then(resp => {
        let commentsArrays = resp.data;
        if (commentsArrays !== "No Comments") {
          let lengthOfCommentsArrayStraightFromDatabase = commentsArrays.length;
          this.setState({lengthOfCommentsArrayStraightFromDatabaseBeforeTruncation: lengthOfCommentsArrayStraightFromDatabase});
          if (lengthOfCommentsArrayStraightFromDatabase > 3) {
            this.setState({greaterThanThreeComments: "yes"});
            if (this.state.showAllComments === false ) {
              let numberOfCommentsToCut = lengthOfCommentsArrayStraightFromDatabase - 3;
              commentsArrays.splice(0,numberOfCommentsToCut);
            }
          }
          if (lengthOfCommentsArrayStraightFromDatabase < 4) {
            this.setState({greaterThanThreeComments: "no"});
          }
        }
        this.setState({Comments: commentsArrays});
    });

  }

  componentDidMount() {
    this.getCommentsAction();
    console.log(this.props.mobile);
    if (this.props.mobile === 'false') {
      this.setState({showCommentForm: 'true'});
    }
    if (this.props.mobile === 'true') {
      this.setState({showCommentForm: 'false'});
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.newCommentorFirstName[0], "NEW COMMENTOR FIRST NAME");
    if (this.state.newCommentorFirstName[0] === "") {
      alert('Comment not Submitted, you must submit a First Name')
    }
    if (this.state.newCommentorSecondName[0] === "") {
      alert('Comment not Submitted, you must submit a Second Name')
    }
    if (this.state.newComment[0] === "") {
      alert('Comment not Submitted, you must submit a Comment')
    }
    else if (this.state.newCommentorFirstName[0] !== "" && this.state.newCommentorSecondName[0] !== "" && this.state.newComment[0] !== "") {
      const todayDateConst = new Date();
      const todayDateString = String(todayDateConst.toISOString().substr(0,10));
      let originalCommentsArray = this.state.Comments;
      let newCommentsArray = [[String(this.props.id), this.props.service, this.state.newCommentorFirstName, this.state.newCommentorSecondName, todayDateString, this.state.newComment]];
      let concatenatedComments = originalCommentsArray.concat(newCommentsArray);
      this.setState({
        Comments: concatenatedComments
      })
      $.post("http://www.tc-landscaping.co.uk/insertComment.php",
      {
        FirstName: this.state.newCommentorFirstName[0],
        SecondName: this.state.newCommentorSecondName[0],
        Comment: this.state.newComment[0],
        Service: this.props.service,
        ServiceID: String(this.props.id)
      },
      (data, status) => {
        if (status === "success") {
            alert("Comment Successfully Stored!");
            /*The below resets comment form for that Service now that the comment has been submitted to the database*/
            this.setState({newComment: [""]});
            this.setState({newCommentorFirstName: [""]});
            this.setState({newCommentorSecondName: [""]});
        }
        else {
          alert("Status: " + status);
        }
      });
    }
  }

  showCommentFormFunction = (event) => {
    event.preventDefault();
    this.setState({showCommentForm: 'true'});
  }

  myChangeHandler = (event) => {
    if ([event.target.name][0] === "Comment") {
      this.setState({newComment: [event.target.value]});
    }
    if ([event.target.name][0] === "FirstName") {
      this.setState({newCommentorFirstName: [event.target.value]});
    }
    if ([event.target.name][0] === "SecondName") {
      this.setState({newCommentorSecondName: [event.target.value]});
    }
    if ([event.target.name][0] === "showCommentsToggleSwitch") {

      if (this.state.showAllComments === false) {
        this.setState({showAllComments: true});
        this.getCommentsAction();
      }
      else if (this.state.showAllComments === true) {
        this.setState({showAllComments: false});
        this.getCommentsAction();
      }
      console.log(this.state.showAllComments, "showAllComments stATE")
    }
  }

  render() {

    const { classes } = this.props;

    const CommentsFromDataBase = () => {
      if (this.state.Comments === "No Comments") {
        return (
          <div style={{"textAlign":"center", "margin":"auto"}}>There are currently no comments.</div>
        )
      }
      if (this.state.Comments[0] === "") {
        return (
          <div className={classes.root} style={{"textAlign":"center", "margin":"auto"}}>
            <CircularProgress />
            <CircularProgress color="secondary" />
          </div>
        )
      }
      else {
        /*RETURN COMMENTS FROM DATABASE. IF > 3 THE COMMENTS IN THE STATE ARE TRUNCATED AS PART OF THE LOGIC IN getCommentsAction*/
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

    const ShowCommentsToggle = () => {
      if (this.state.greaterThanThreeComments === "no" || this.state.greaterThanThreeComments === null) {
        return (
          <div></div>
        )
      }

      else if (this.state.greaterThanThreeComments === "yes") {
        return (
          <>
              <Typography style={{"fontSize":"15px", 'color':ColourTheme.SecondColour, 'fontWeight':'bold'}}>
                Show all {this.state.lengthOfCommentsArrayStraightFromDatabaseBeforeTruncation} Comments:
                <Switch
                checked={this.state.showAllComments}
                onChange={this.myChangeHandler}
                color="primary"
                name="showCommentsToggleSwitch"
                />
              </Typography>
          </>
        )
      }
    }

    const CommentForm = () => {
      if (this.state.showCommentForm === 'true') {
        console.log("PASSED TEST")
        return (
          <>
          <Grid xs={12} md={3} item className={classes.CommentFieldContainerStyle} style={{'marginTop':'30px'}}>
          <form method="post" onSubmit={this.handleSubmit}>
            <FormControl className={classes.margin} >

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
                value={this.state.newCommentorFirstName}
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
                value={this.state.newCommentorSecondName}
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
               value={this.state.newComment}
              />


              <Button variant="contained" className={classes.ButtonColour} type="submit">
                Submit
              </Button>

            </FormControl>
          </form>
          </Grid>
          </>
        )
      }
      else if (this.state.showCommentForm === 'false') {
        return (
          <>
            <Grid xs={12} item className={classes.CommentFieldContainerStyle}>
              <form onSubmit={this.showCommentFormFunction}>
                <Button variant="contained" className={classes.ButtonColour} type="submit">
                  Click on me to make a comment
                </Button>
              </form>
            </Grid>
          </>
        )
      }
    }

    return (
        <div style={{'margin':'0px 30px 0px 30px'}}>
          <Grid container style={{'direction':'row','justify':"space-around", "alignItems":"center", 'height':'100%', 'width':'100%'}}>

            <CommentForm />

            <Grid xs={12} md={9} item className={classes.CommentFieldContainerStyle}>
              <Typography style={{"fontSize":"30px", 'color':ColourTheme.FirstColour}}>
                Comments
              </Typography>
              <ShowCommentsToggle/>
              <CommentsFromDataBase/>
            </Grid>
          </Grid>
        </div>
      );
  }
}

export default withStyles(styles)(Comment);
