import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../store";

interface ProtectedRouteProps {
  component: React.ComponentType<any>;
  exact: boolean;
  path: string;
}

const OnboardingRoute: React.FC<ProtectedRouteProps> = ({
  component: Component,
  ...rest
}) => {
  const user = useSelector((state: RootState) => state.auth.user);

  return (
    <Route
      {...rest}
      render={(props) => {
        if (!user) {
          return <Redirect to="/login" />;
        }

        if (user.hobbies && user.hobbies.length > 0) {
          return <Redirect to="/home" />;
        }

        return <Component {...props} />;
      }}
    />
  );
};

export default OnboardingRoute;
