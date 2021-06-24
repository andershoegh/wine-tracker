import React from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

interface PrivateRouteProps extends RouteProps {}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ ...rest }) => {
  const { currentUser } = useAuth();

  return currentUser ? <Route {...rest} /> : <Redirect to="/account" />;

  // if (currentUser === null) return <Redirect to="/account" />;
  // return <Route {...rest} />;
};

export default PrivateRoute;
