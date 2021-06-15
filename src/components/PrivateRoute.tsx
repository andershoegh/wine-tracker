import React from "react";
import {
  Route,
  Redirect,
  RouteProps,
  RouteComponentProps,
} from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export const PrivateRoute = ({ component, ...rest }: RouteProps) => {
  const { currentUser } = useAuth();

  if (!component) {
    throw Error("component is undefined");
  }

  const Component = component; // JSX Elements have to be uppercase.
  const render = (props: RouteComponentProps<any>): React.ReactNode => {
    if (currentUser) {
      return <Component {...props} />;
    }
    return <Redirect to={{ pathname: "/account/login" }} />;
  };

  return <Route {...rest} render={render} />;
};
export default PrivateRoute;
