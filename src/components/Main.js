import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import UploadForm from "./upload/UploadForm";
import Fetcher from "./fetch/Fetcher";

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/upload" component={UploadForm} />
      <Fetcher
        render={(ListComponent, MapComponent, posts) => (
          <>
            <Route
              path="/list"
              render={props => <ListComponent {...props} data={posts} />}
            />

            <Route
              path="/map"
              render={props => <MapComponent {...props} data={posts} />}
            />
          </>
        )}
      />
    </Switch>
  </main>
);

export default Main;
