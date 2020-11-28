import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import Team from "./Team";
import Event from "./Event";
import Workshop from "./Workshop";
import Contact from "./Contact";
import Error from "./Error";
import {
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

// Bootstrap
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle";

import "../index.css";

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          exact
          path="/team"
          component={Team}
        />
        <Route
          exact
          path="/contact"
          component={Contact}
        />
        <Route
          exact
          path="/event"
          component={Event}
        />
        <Route
          exact
          path="/workshop"
          component={Workshop}
        />
        <Route
          exact
          path="/contact"
          component={Contact}
        />
        <Route
          exact
          path="/error"
          component={Error}
        />

        {/* <Redirect to="/error" component={Error} /> */}
      </Switch>
    </>
  );
};

export default App;
