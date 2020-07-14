import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Login from "./api/LoginPage";
import PrivateRoute from "./api/PrivateRoute";
import { Link, Route, Redirect, Router, Switch } from "react-router-dom";
import NewFriend from "./components/NewFriend";
import FriendList from "./components/FriendList";

//Create routes for pages created.
function App() {
  /*const removeToken = () => {
    localStorage.setItem("token", "");
    console.log(`token is now ${localStorage.getItem("token")}`);
  };*/

  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/login"> Login</Link>
          </li>
          <li>
            <Link to="/protected"> Protected Page</Link>
          </li>
        </ul>
        <Switch>
          <PrivateRoute exact path="/protected" component={FriendList} />
          <Route path="/login" component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
