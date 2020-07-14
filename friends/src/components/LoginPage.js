import React, { useState } from "react";
import { axiosWithAuth } from "./AxiosWithAuth";

//create class component with username/password state
const Login = (props) => {
  const [credentials, setCredentials] = useState({});

  //login event hnadler to prevent default, and make axios with auth call
  const login = (e) => {
    e.preventDefault();
    console.log(credentials);

    axiosWithAuth()
      .post("https://localhost:5000/api/login", credentials)
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.data.payload);
        props.history.push("/FriendList");
      });
  };

  //handleChange event to set credntials
  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  //create form for logging in, take given credentials and handlechanges created above
  return (
    <div>
      <h1 className="title">Login</h1>
      <form onSubmit={login}>
        <input
          type="text"
          name="username"
          value={credentials.username}
          onChange={handleChange}
          placeHolder="UserName:"
        />
        <input
          type="password"
          name="password"
          value={credentials.password}
          onChange={handleChange}
          placeHolder="Password:"
        />
        <button>Log In </button>
      </form>
    </div>
  );
};

export default Login;
