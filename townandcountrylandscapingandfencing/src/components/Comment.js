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
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

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
});

class Comment extends Component {

  constructor(props) {
    super(props);
      this.state = {
        service: this.props.service,
        formId: String(this.props.id) + "Form",
        serviceID: String(this.props.id),
        Comments: null
      };
      this.handleSubmit = this.handleSubmit.bind(this);
      this.getComments = this.getComments.bind(this);
  }

  getComments() {
    const axios = require('axios');
    const getQuery = 'http://www.tc-landscaping.co.uk/extractComments.php?Service='+String(this.state.service);
    axios.get(getQuery)
    .then(resp => {
        let commentsArrays = resp.data.split("####");
        let commentsArraysWithSplit = commentsArrays.map((commentArray) => {
          return (
              commentArray.split('%%%%').slice(1, 6)
          )
        })
        let commentsArraysWithSplitFinal = commentsArraysWithSplit.map((line) => {

          if (line.length === 0) {
            return  (
              <div style={{"textAlign":"center", "margin":"auto"}}>There are currently no comments.</div>
            )
          }
          return (
            <>
                <Grid md={3} xs={12}>
                <Card variant="outlined" style={{'margin':'20px'}}>
                 <CardContent>
                   <Typography style={{"fontSize":"14"}}>
                     <b>Name:</b> {line[1]} {line[2]}
                   </Typography>
                   <Typography style={{"fontSize":"14"}}>
                     <b>Date:</b> {line[3]}
                   </Typography>
                   <Typography style={{"fontSize":"14"}}>
                     <b>Comment:</b> {line[4]}
                   </Typography>
                 </CardContent>
                </Card>
                </Grid>


            </>
          )
        })
        this.setState({Comments: commentsArraysWithSplitFinal});
        console.log(this.state.Comments,"THIS IS THE Comment STATE");
    });
  }

  componentDidMount() {
    this.getComments();
  }

  handleSubmit(event) {
    document.getElementById(this.state.formId).submit();
    this.getComments();
  }

  render() {

    const { classes } = this.props;
    const commentsInState = this.state.Comments;

      return (
        <div style={{'margin':'30px'}}>
          <Grid container style={{'direction':'row','justify':"space-around", "alignItems":"center", 'height':'100%', 'width':'100%'}}>
            <Grid xs={12} md={3} className={classes.CommentFieldContainerStyle}>
              <form method="post" id={this.state.formId} action="http://www.tc-landscaping.co.uk/insertComment.php" target='PageNavigateStop' onSubmit={this.handleSubmit}>
                <FormControl className={classes.margin} >

                  <input name="Service" value={this.state.service} style={{"display":"none"}}/>
                  <input name="ServiceID" value={this.state.serviceID} style={{"display":"none"}}/>

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
            </Grid>
            <Grid xs={12} md={9} className={classes.CommentFieldContainerStyle}>
              <Typography style={{"fontSize":"30px"}}>
                Comments
              </Typography>
              <div>
              <Grid container style={{'direction':'row','justify':"space-around", "alignItems":"center", 'height':'100%', 'width':'100%'}}>
                {commentsInState}
              </Grid>
              </div>
            </Grid>
          </Grid>
        </div>
      );
  }
}

export default withStyles(styles)(Comment);
