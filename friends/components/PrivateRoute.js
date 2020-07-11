import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...props }) => {
  //const Component = props.component
  return (
    <Route
      {...props}
      render={() => {
        //if localstorage recieves token redirect to Login page
        if (localStorage.getItem("token")) {
          return <Component />;
        } else {
          return <Redirect to="/Login" />;
        }
      }}
    />
  );
};

export default PrivateRoute;
