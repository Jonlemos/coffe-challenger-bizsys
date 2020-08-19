import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Views
import Home from "./views/Home/Home";
import CoffeeRequest from "./views/CoffeRequest/CoffeRequest";

export default () => (
  <Router>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/coffee" component={CoffeeRequest} />
    </Switch>
  </Router>
);
