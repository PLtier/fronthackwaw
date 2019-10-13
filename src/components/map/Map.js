import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import { Link, BrowserHistory } from "react-router-dom";

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 52.22977,
      lng: 21.01178
    },
    zoom: 11
  };

  handleApiLoaded = (map, maps) => {
    console.log(this.props.data, "map");

    let listOfCoords = this.props.data.map(post => {
      return post.singlePins.map(pin => {
        return { lat: pin.latitude, lng: pin.longitude };
      });
    });
    console.log(listOfCoords, "list");

    listOfCoords.forEach((coords, index) => {
      let defaultPolygon = new maps.Polygon({
        id: index,
        paths: coords,
        strokeColor: "#FF0000",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#FF0000",
        fillOpacity: 0.35,
        url: `http://localhost:3001/list/${index}`
      });
      defaultPolygon.setMap(map);
      defaultPolygon.addListener("click", function() {
        window.location.href = this.url;
      });
    });
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyC1gH-KosO28vNz-ZbWQMNM2PmOp3caZE0" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map, maps }) => this.handleApiLoaded(map, maps)}
        />
      </div>
    );
  }
}

export default SimpleMap;
