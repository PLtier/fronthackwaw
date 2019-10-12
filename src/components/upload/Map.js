import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 52.22977,
      lng: 21.01178
    },
    zoom: 11
  };
  handleApiLoaded = (map, maps) => {
    // Define the LatLng coordinates for the polygon's path.
    let triangleCoords = [
      { lat: 52.219075678364284, lng: 21.009613037109375 },
      { lat: 52.23272813511705, lng: 21.017066955566406 },
      { lat: 52.2181941338946, lng: 21.03099822998047 }
    ];

    let defaultPolygon = new maps.Polygon({
      editable: true,
      paths: triangleCoords,
      strokeColor: "#FF0000",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#FF0000",
      fillOpacity: 0.35,
      draggable: true
    });
    defaultPolygon.setMap(map);
    this.setState({
      value: defaultPolygon.getPaths()
    });

    const setStateAfterChange = () => {
      let test = defaultPolygon
        .getPaths()
        .getAt(0)
        .g.map(el => {
          return { lat: el.lat(), lng: el.lng() };
        });
      this.props.getCoordinates(test);
    };

    defaultPolygon
      .getPaths()
      .getAt(0)
      .addListener("set_at", () => {
        setStateAfterChange();
      });

    defaultPolygon
      .getPaths()
      .getAt(0)
      .addListener("insert_at", () => {
        setStateAfterChange();
      });

    defaultPolygon.addListener("dragend", () => {
      setStateAfterChange();
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
