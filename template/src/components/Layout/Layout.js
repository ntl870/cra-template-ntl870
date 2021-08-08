import React from "react";
import { Route, withRouter } from "react-router-dom";
import routes from "../../routes";

const Layout = () => {
  return (
    <>
      {routes.map((route) => (
        <Route exact={route.exact} path={route.path}>
          {route.components.map((component) => component)}
        </Route>
      ))}
    </>
  );
};

export default withRouter(Layout);
