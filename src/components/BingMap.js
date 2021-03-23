import React, { Component } from "react";
import Map from 'ol/Map';
import View from 'ol/View';
import {Circle} from 'ol/geom';
import Feature from 'ol/Feature';
import {Vector as VectorSource} from 'ol/source';
import {Fill, Stroke, Style} from 'ol/style';
import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer';
import BingMaps from 'ol/source/BingMaps'
import { Attribution, defaults as defaultControls} from 'ol/control';
import { withStyles } from '@material-ui/styles';

const mapHeightComputer = JSON.stringify(window.innerHeight - 140)+'px';
const mapHeightMobile = JSON.stringify(window.innerHeight - 64)+'px';

const styles = theme => ({
    MapStyles: {
        height: mapHeightComputer
    },
    MapStylesMobile: {
        height: mapHeightMobile
    },
});

class PublicMap extends Component {
    constructor(props) {
        super(props);
        this.centerCoords = [-80178.788831, 6764581.456953];
        this.circleFeature = new Feature ({
            geometry: new Circle(this.centerCoords, 24000)
        })
        this.attribution = new Attribution({
            collapseLabel: "Microsoft product screen shot(s) reprinted with permission from Microsoft Corporation. Source Bing Maps",
            collapseClassName: 'attr-text'
        });
        this.olmap = new Map({
            target: null, // Set on mount
            layers: [
                new TileLayer({
                    visible: true,
                    preload: Infinity,
                    source: new BingMaps({
                        key: 'Av-UuI83-AWLi_7UqqAmXHJkgifiuQRTttmbP1oBUP6KzDdUMe0M26ersalGrgIE',
                        imagerySet: 'RoadOnDemand',
                        // use maxZoom 19 to see stretched tiles instead of the BingMaps
                        // "no photos at this zoom level" tiles
                        // maxZoom: 19
                    }),
                }),
                new VectorLayer({
                    source: new VectorSource({
                        features: [this.circleFeature],
                    }),
                    style: new Style({
                        stroke: new Stroke({
                            color: 'red',
                            width: 4
                        }),
                        fill: new Fill({
                            color: 'rgba(255, 99, 71, 0.4)'
                        })
                    })
                })
            ],
            view: new View({
                center: [-80178.788831, 6764581.456953],
                zoom: 10.9,
            }),
            controls: defaultControls({rotate: false, attribution: false}).extend([this.attribution])
        });
    }

    componentDidMount() {
        this.olmap.setTarget("map");
        this.olmap.getView().fit(this.circleFeature.getGeometry())
    }

    render() {

        const { classes } = this.props;

        return (
            <div id="map" style={{ width: "100%"}} className={this.props.mobile === "true"? classes.MapStylesMobile : classes.MapStyles}></div>
        );
    }
}

export default withStyles(styles)(PublicMap);