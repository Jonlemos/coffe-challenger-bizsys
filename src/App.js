import React from "react";
import Routes from "./routes";

import CoffeeRequestProvider from "./contexts/CoffeeRequestContext";

export default () => (
  <CoffeeRequestProvider>
    <Routes />
  </CoffeeRequestProvider>
);
