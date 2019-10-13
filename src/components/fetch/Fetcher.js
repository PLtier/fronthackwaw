import React, { Component, Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import ListSwitch from "../list/ListSwitch";
import ErrorComponent from "./Error";
import Loader from "./Loader";
import Mapy from "../map/Map";

// The Roster component matches one of two different routes
// depending on the full pathname

class Fetcher extends Component {
  state = {
    error: null,
    isLoaded: false,
    posts: []
  };

  componentDidMount() {
    fetch("/api/events", {
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    })
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            posts: result
          });
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  render() {
    const { error, isLoaded, posts } = this.state;
    if (error) {
      return (
        <Fragment>
          {this.props.render(ErrorComponent, ErrorComponent, null)}
        </Fragment>
      );
    } else if (!isLoaded) {
      return <Fragment>{this.props.render(Loader, Loader, null)}</Fragment>;
    } else {
      return <Fragment>{this.props.render(ListSwitch, Mapy, posts)}</Fragment>;
    }
  }
}

export default Fetcher;


