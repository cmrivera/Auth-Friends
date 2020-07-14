import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

//create header that links to other pages once authorized
const Header = () => {
  return (
    <div>
      <header className="header">
        <h1>
          <Link to="/">Friends</Link>
        </h1>
        <ul>
          <li>
            <Link to="/Friends">My Friends List</Link>
          </li>
          <li>
            <Link to="/NewFriend">Add New Friend</Link>
          </li>
          <li>
            <Link to="/">Logout</Link>
          </li>
        </ul>
      </header>
    </div>
  );
};
export default Header;
