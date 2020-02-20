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
import GoogleMap from 'google-map-react';

const mapHeightComputer = JSON.stringify(window.innerHeight - 140)+'px';
const mapHeightMobile = JSON.stringify(window.innerHeight - 64)+'px';

const styles = theme => ({
    MapStyles: {
      height: mapHeightComputer
    },
    MapStylesMobile: {
      height: mapHeightMobile
    }
  });

class GoogleMapWrapper extends Component {

  constructor(props) {
    super(props);
       this.state = {
    };
  }

  render() {

    const { classes } = this.props;

    const Map = ({latlng, zoom}) =>(
      <div className={this.props.mobile === "true"? classes.MapStylesMobile : classes.MapStyles}>
        <GoogleMap
          bootstrapURLKeys={{ key: 'AIzaSyAiOPSvsBYhY28VmvJhQr6i-onTs7edJ-o' }}
          defaultZoom={window.innerWidth > 792? zoom :11}
          defaultCenter={latlng}
          onGoogleApiLoaded={({map, maps}) =>
            new maps.Circle({
              strokeColor: '#FF0000',
              strokeOpacity: 0.8,
              strokeWeight: 2,
              fillColor: '#FF0000',
              fillOpacity: 0.3,
              map,
              center: latlng,
              radius: 8500,
            })}
        />
      </div>
    );

    return(
          <Map latlng={{lat: 51.802, lng: -0.721}} zoom={12}/>
      )
  }
}

export default withStyles(styles)(GoogleMapWrapper);
