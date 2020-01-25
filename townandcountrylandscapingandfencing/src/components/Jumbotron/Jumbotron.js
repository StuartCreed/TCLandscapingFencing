import React from 'react';
import { Component } from 'react';
import './Jumbotron.css';
import { Box, Paper } from '@material-ui/core';
import ColourTheme from '../../ColourTheme';

class Jumbotron extends Component {
  constructor(props) {
    super(props);
       this.state = {
    };
  }
  render(){
    return(
      <>
        <div style={{'zIndex':'1', 'position': 'relative'}}><img src={require("./Image.jpg")}/></div>
        <Box style={{'width':'100%', 'marginBottom':'-100px'}}>
          <Box style={{'position': 'static', 'display':'block', 'marginLeft':'1100px'}}>
            <Paper style={{"width": "400px", "height":"400px", "backgroundColor": ColourTheme.SecondColour, 'marginTop':'-200px','zIndex':'2', 'position': 'relative'}}>

            </Paper>
          </Box>
          <Box style={{'margin':'50px'}}>
            <Paper style={{"width": "100px", "height":"100px", "backgroundColor": ColourTheme.ThirdColour,'zIndex':'3', 'position': 'relative', 'display':'block'}}>
            </Paper>
          </Box>

        </Box>
      </>
    )
  }
}

export default Jumbotron
