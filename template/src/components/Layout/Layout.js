import React from "react";
import LayoutContext from "../../context/LayoutContext";
import { Route, withRouter } from "react-router-dom";
import LandingPage from "../../pages/LandingPage/LandingPage";

const Layout = () => {
  return (
    <LayoutContext.Provider value={{ greeting: "Hello, World!" }}>
      <Route exact path="/" component={LandingPage} />
    </LayoutContext.Provider>
  );
};

export default withRouter(Layout);
