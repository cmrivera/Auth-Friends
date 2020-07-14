import React, { Component } from "react";
import Header from "./Header";
import "../App.css";
import { AxiosWithAuth } from "/components/AxiosWithAuth";

//create class component and set this.state for name, age, email
class NewFriend extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      email: "",
    };
  }

  //create handle change with event to setState
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  //create submit handle not to reset everything
  //then post to axios with authentication
  submitHandle = (e) => {
    e.preventDefault();

    AxiosWithAuth()
      .post("/api/friends", this.state)
      .then((response) => {
        this.setState({ name: "", age: "", email: "" });
      })
      .catch((error) => {
        console.log(error);
      });
    this.setState({ name: "", age: "", email: "" });
  };
  render() {
    return (
      <div>
        <Header />

        <div>
          <h1>Add New Friend</h1>
          <form onSubmit={this.submitHandle}>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              placeHolder="Name:"
            />
            <input
              type="number"
              name="age"
              value={this.state.age}
              onChange={this.handleChange}
              placeHolder="Age:"
            />
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              placeHolder="Email:"
            />
            <button type="submit"> Add New</button>
          </form>
        </div>
      </div>
    );
  }
}
export default NewFriend;
