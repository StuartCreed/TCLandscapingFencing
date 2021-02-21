import React from 'react';
import { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import 'typeface-roboto';
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
          bootstrapURLKeys={{ key: 'AIzaSyCJ7_cz07idL-891ftGoK2tg2sHZchlXUo' }}
          defaultZoom={window.innerWidth > 792? zoom :10}
          defaultCenter={latlng}
          yesIWantToUseGoogleMapApiInternals={true}
          onGoogleApiLoaded={({map, maps}) =>
            new maps.Circle({
              strokeColor: '#FF0000',
              strokeOpacity: 0.8,
              strokeWeight: 2,
              fillColor: '#FF0000',
              fillOpacity: 0.3,
              map,
              center: latlng,
              radius: 15000,
            })}
        />
      </div>
    );

    return(
          <Map latlng={{lat: 51.802, lng: -0.721}} zoom={11}/>
      )
  }
}

export default withStyles(styles)(GoogleMapWrapper);
