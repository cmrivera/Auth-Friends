import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Login from "/components/LoginPage";
import PrivateRoute from "/components/PrivateRoute";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NewFriend from "/components/NewFriend";
import FriendList from "./components/FriendList";

//Create routes for pages created.
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <PrivateRoute exact path="/Friends" component={FriendList} />
          <PrivateRoute path="/NewFriend" component={NewFriend} />

          <Route path="/login" component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
