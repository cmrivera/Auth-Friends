import React from "react";
import axios from "axios";

//create class component with username/password state
class Login extends React.Component {
  state = {
    credentials: {
      username: "",
      password: "",
    },
  };

  //create handleChanges with event to setState for credentials
  handleChange = (e) => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value,
      },
    });
  };

  //login request to axios for authentication using given credentials
  //post credentials, setItem token if correct credentials given
  //if succesful push to friends page
  Login = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/login", this.state.credentials)
      .then((response) => {
        console.log("Post Credentials", response);
        localStorage.setItem("token", response.data.payload);
        this.props.history.push("/Friends");
      })
      .catch();
  };

  //component did mount to make sure it works
  componentDidMount() {
    console.log("Component mounted");
    localStorage.clear();
  }
  render() {
    //create form for logging in, take given credentials and handlechanges created above
    return (
      <div className="formBody">
        <h1 className="title">Login</h1>
        <form onSubmit={this.Login}>
          <input
            type="text"
            name="username"
            value={this.state.credentials.username}
            onChange={this.handleChange}
            placeHolder="UserName:"
          />
          <input
            type="password"
            name="password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
            placeHolder="Password:"
          />
          <button>Log In </button>
        </form>
      </div>
    );
  }
}

export default Login;
