import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Menu from "./Menu";
import Birthday from "../Birthday/Birthday";
import Tour from "../Tours/Home";
import Review from "../Reviews/Review";
import Accordation from "../Accordation/Accordation";

const Navbar = () => {
  return (
    <div style={{ overflowX: "hidden" }}>
      <Menu />
      <Switch>
        <Route exact path="/birthday">
          <Birthday />
        </Route>
        <Route exact path="/tour">
          <Tour />
        </Route>
        <Route exact path="/review">
          <Review />
        </Route>
        <Route exact path="/accordation">
          <Accordation />
        </Route>

        <Redirect to="/birthday" />
      </Switch>
    </div>
  );
};

export default Navbar;
