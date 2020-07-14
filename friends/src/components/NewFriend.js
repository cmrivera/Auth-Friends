import React, { useState, useEffect } from "react";
import Header from "./Header";
import "../App.css";
import { AxiosWithAuth } from "../api/axiosWithAuth";

//create class component and set this.state for name, age, email
const NewFriend = (props) => {
  const [value, setValue] = useState({});

  //create submit handle not to reset everything
  //then post to axios with authentication
  const submitFriend = (e) => {
    e.preventDefault();
    AxiosWithAuth()
      .post("http://localhost:5000/api/friends", value)
      .then((res) => {
        console.log(res);
        props.history.push("/FriendList");
      });
  };

  //create handle change with event to setState
  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <h1>Add New Friend</h1>
      <form onSubmit={submitFriend}>
        <input
          type="text"
          name="name"
          value={value.name}
          onChange={handleChange}
          placeHolder="Name:"
        />
        <input
          type="number"
          name="age"
          value={value.age}
          onChange={handleChange}
          placeHolder="Age:"
        />
        <input
          type="email"
          name="email"
          value={value.email}
          onChange={handleChange}
          placeHolder="Email:"
        />
        <button type="submit"> Add New</button>
      </form>
    </div>
  );
};

export default NewFriend;
