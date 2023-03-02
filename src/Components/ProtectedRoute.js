import React from "react";
import { Route, Navigate } from "react-router-dom";

const ProtectedRoute = ({ component: Component, isAuthenticated, ...rest }) => (
    <Route {...rest} render={(props) => (
      isAuthenticated === true
        ? <Component {...props} />
        : <Navigate to='/login' />
    )} />
  );

  export default ProtectedRoute;