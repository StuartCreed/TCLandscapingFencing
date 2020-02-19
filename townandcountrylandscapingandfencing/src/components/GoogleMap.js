import React from 'react';
import { Component } from 'react';
import ColourTheme from '../ColourTheme';
import Fonts from '../Fonts';
import Container from '@material-ui/core/Container';
import Hidden from '@material-ui/core/Hidden';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import 'typeface-roboto';
import { createMuiTheme } from "@material-ui/core/styles";
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%',
};

class GoogleMap extends Component {

  constructor(props) {
    super(props);
       this.state = {
    };
  }


  render() {

    return(
        <>
          <Map
            google={this.props.google}
            zoom={8}
            style={mapStyles}
            initialCenter={{ lat: 47.444, lng: -122.176}}
          >
          </Map>
        </>
      )
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAiOPSvsBYhY28VmvJhQr6i-onTs7edJ-o'
})(GoogleMap);
