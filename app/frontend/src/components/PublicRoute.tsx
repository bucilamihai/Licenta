import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../store";

interface PublicRouteProps {
  component: React.ComponentType<any>;
  path: string;
  exact?: boolean;
}

const PublicRoute: React.FC<PublicRouteProps> = ({ component: Component, ...rest }) => {
  const user = useSelector((state: RootState) => state.auth.user);

  return (
    <Route
      {...rest}
      render={(props) =>
        user ? <Redirect to="/home" /> : <Component {...props} />
      }
    />
  );
};

export default PublicRoute;
