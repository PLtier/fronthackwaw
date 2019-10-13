import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import List from "./List";
import ListElement from "./ListElement";

// The Roster component matches one of two different routes
// depending on the full pathname

class ListSwitch extends Component {
  
  render() {
      console.log(this.props.data)
      return (
        <Switch>
          <Route
            exact
            path="/list"
            render={props => <List {...props} data={this.props.data} />}
          />
          <Route
            path="/list/:number"
            render={props => <ListElement {...props} data={this.props.data} />}
          />
        </Switch>
      );
    }
  }

export default ListSwitch;
