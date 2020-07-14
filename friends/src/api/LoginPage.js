import React from "react";
//import { AxiosWithAuth } from "./axiosWithAuth";
import axios from "axios";

//create  component with username/password state
class Login extends React.Component {
  state = {
    credentials: {
      username: "",
      password: "",
    },
  };

  handleChange = (e) => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value,
      },
    });
  };

  login = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/login/", this.state.credentials)
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.data.payload);
        this.props.history.push("/protected");
      })

      .catch((err) => console.log({ err }));
  };

  //create form for logging in, take given credentials and handlechanges created above
  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.login}>
          <input
            type="text"
            name="username"
            value={this.state.credentials.username}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
          />
          <button>Log In </button>
        </form>
      </div>
    );
  }
}
export default Login;
