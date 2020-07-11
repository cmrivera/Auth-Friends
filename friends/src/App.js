import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Login from "./components/LoginPage";
import PrivateRoute from "./components/PrivateRoute";
import { PrivateRoute as Router, Route, Switch } from "react-router-dom";

//Create routes for pages created.
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login" component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
