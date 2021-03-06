import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  //const Component = props.component
  return (
    <Route
      {...rest}
      render={(props) => {
        //if localstorage recieves token redirect to Login page
        if (localStorage.getItem("token")) {
          //if token is in local storage, render given component
          return <Component {...props} />;
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />
  );
};

export default PrivateRoute;
